/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import { Avatar, Menu, Button, Upload, message, notification } from 'antd'
import { withRouter } from 'react-router-dom'
import firebase from 'firebase/app'
import {
  EllipsisOutlined,
  HeartTwoTone,
  MessageTwoTone,
  PlusOutlined,
  LoadingOutlined,
  CameraFilled,
  CheckOutlined,
  CloseOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  CloseCircleFilled
} from '@ant-design/icons'

import * as uuid from 'uuid'
import Info from './info'
import MyMessenger from '@pages/myMessenger'
import MyPosts from './myPosts'
import SavedPosts from './savedPosts'
import { HighLightGroup, ModalPreviewImg, Chat, Follow } from '@components'
import { brokenContext } from '../../layouts/MainLayout'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_USER, UPDATE_USER, uploadImg } from '@shared'
import './index.scss'
import { IContext } from '@tools'

function Profile(props) {
  const { history } = props
  const { type, userId } = props.match.params
  // const MY_USER_ID = 'tuinhune'
  const isBroken = useContext(brokenContext)
  const { loading, error, data, refetch } = useQuery(GET_USER, {
    variables: { userId: userId }
  })
  const [previewImg, setPreviewImg] = useState({
    isShow: false,
    imgSrc: ''
  })
  const { me, refetchMe } = useContext(IContext)
  const isMe = userId === me?._id
  const [loadingImg, setLoadingImg] = useState({
    coverPhoto: false,
    avatar: false
  })
  const [img, setImg] = useState({
    coverPhoto: null,
    avatar: null
  })
  const [updateUser] = useMutation(UPDATE_USER)
  // const sendNotifollow = async () => {
  //   const notificationId = uuid.v1()
  //   try {
  //     await firebase
  //       .database()
  //       .ref('notifications/' + userId + '/' + notificationId)
  //       .set({
  //         action: 'follow',
  //         reciever: userId,
  //         link: `/${me?._id}/info`,
  //         content: `${me?.firstname} đã bắt đầu theo dõi bạn`,
  //         seen: false
  //       })
  //   } catch (err) {
  //     console.log(err)
  //   }
  //   notification.success({ message: 'Đã theo dõi' })
  // }
  const uploadButtonCover =
    isMe &&
    (!img.coverPhoto ? (
      <div
        className="btn-saveCover"
        style={{
          // border: '1px solid #fff',
          backgroundColor: 'rgba(0,0,0,0.3)',
          position: 'absolute',
          top: '5px',
          left: '5px'
        }}
      >
        <Upload
          name="cover"
          listType="picture-card"
          className="icon-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={info => handleChangeCover(info)}
        >
          <CameraFilled style={{ fontSize: 25, color: '#fff' }} />
        </Upload>
      </div>
    ) : (
      <div
        className="btn-saveCover"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.4)'
        }}
      >
        <Button
          style={{ marginRight: 15, padding: '0 20px' }}
          type="primary"
          onClick={() => handleSubmitUpload('coverPhoto')}
        >
          Lưu
        </Button>
        <Button
          type="ghost"
          style={{ padding: '0 20px' }}
          onClick={() => handleCancel()}
        >
          {' '}
          Hủy
        </Button>
      </div>
    ))
  const uploadButtonAvt =
    isMe &&
    (!img?.avatar ? (
      <div
        className="avatar-uploader"
        style={{ position: 'absolute', bottom: 5, right: 5 }}
      >
        <Upload
          name="avatar"
          listType="picture-card"
          className="icon-avt-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={info => handleChangeAvatar(info)}
        >
          <CameraFilled style={{ fontSize: 23 }} />
        </Upload>
      </div>
    ) : (
      <div
        className="btn-saveAvt"
        style={{
          fontSize: 25,
          borderRadius: '50%',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.2)'
        }}
      >
        <CheckCircleTwoTone
          twoToneColor="#52c41a"
          style={{ marginRight: 10 }}
          onClick={() => handleSubmitUpload('avatar')}
        />
        <CloseCircleTwoTone twoToneColor="red" onClick={() => handleCancel()} />
      </div>
    ))
  function getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }
  const handleChangeAvatar = async info => {
    setLoadingImg({
      ...loadingImg,
      coverPhoto: false
    })
    setImg({
      ...img,
      coverPhoto: null
    })
    if (info.file.status === 'uploading') {
      setLoadingImg({
        ...loadingImg,
        avatar: true
      })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, async imageUrl => {
        const url = await uploadImg(imageUrl)
        setLoadingImg({ ...loadingImg, avatar: false })
        setImg({
          ...img,
          avatar: url
        })
      })
    }
  }
  const handleChangeCover = info => {
    setLoadingImg({
      ...loadingImg,
      avatar: false
    })
    setImg({
      ...img,
      avatar: null
    })
    if (info.file.status === 'uploading') {
      setLoadingImg({
        ...loadingImg,
        coverPhoto: true
      })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, async imageUrl => {
        const url = await uploadImg(imageUrl)
        setLoadingImg({ ...loadingImg, coverPhoto: false })
        setImg({
          ...img,
          coverPhoto: url
        })
      })
    }
  }
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      notification.error({ message: 'You can only upload JPG/PNG file!' })
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      notification.error({ message: 'Image must smaller than 2MB!' })
    }
    return isJpgOrPng && isLt2M
  }

  const handleSubmitUpload = async type => {
    await updateUser({
      variables: {
        userId: userId,
        editUser: {
          coverPhoto:
            type === 'coverPhoto' ? img?.coverPhoto : data?.getUser?.coverPhoto,
          avatar: type === 'avatar' ? img?.avatar : data?.getUser?.avatar
        }
      }
    })
    setImg({
      coverPhoto: null,
      avatar: null
    })
    await refetch()
    refetchMe()
    notification.success({
      message: `Thay ảnh ${type === 'avatar' ? 'đại diện' : 'bìa'} thành công`
    })
  }
  const handleCancel = () => {
    setLoadingImg({
      coverPhoto: false,
      avatar: false
    })
    setImg({
      coverPhoto: null,
      avatar: null
    })
  }
  return (
    <>
      {type !== 'messenger' && (
        <>
          <div className="cover-uploader">
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '250px',
                backgroundColor: '#ccc'
              }}
            >
              {(img.coverPhoto || data?.getUser.coverPhoto) && (
                <img
                  className="cover-img"
                  style={{ objectFit: 'cover', height: 250, width: '100%' }}
                  // alt='example'
                  src={img.coverPhoto || data?.getUser.coverPhoto}
                  onClick={() => {
                    setPreviewImg({
                      isShow: true,
                      imgSrc: img.coverPhoto || data?.getUser.coverPhoto
                    })
                  }}
                />
              )}
              {loadingImg.coverPhoto && (
                <LoadingOutlined
                  style={{
                    fontSize: 30,
                    position: 'absolute',
                    top: 'calc(50% - 15px)',
                    left: 'calc(50% - 15px)'
                  }}
                />
              )}
              {uploadButtonCover}
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              width: '100%',
              display: 'flex',
              marginTop: -95,
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', width: '100%' }}>
              <div
                style={{
                  position: 'relative',
                  width: 130,
                  height: 130,
                  marginRight: 30
                }}
              >
                {(data?.getUser?.avatar || img?.avatar) && (
                  <Avatar
                    className="img-avt"
                    style={{ border: '2px solid black', objectFit: 'cover' }}
                    shape="circle"
                    size={130}
                    src={img?.avatar || data?.getUser?.avatar}
                    onClick={() => {
                      setPreviewImg({
                        isShow: true,
                        imgSrc: img?.avatar || data?.getUser?.avatar
                      })
                    }}
                  />
                )}
                {uploadButtonAvt}
                {loadingImg.avatar && (
                  <LoadingOutlined
                    style={{
                      fontSize: 30,
                      position: 'absolute',
                      top: 'calc(50% - 15px)',
                      left: 'calc(50% - 15px)',
                      color: '#fff'
                    }}
                  />
                )}
              </div>
              <div style={{ marginTop: 100, marginBottom: 0, width: '90%' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: isBroken ? 'flex-start' : 'space-between'
                  }}
                >
                  <p
                    style={{
                      fontWeight: 'bolder',
                      fontSize: 20,
                      color: 'black'
                    }}
                  >
                    {`${data?.getUser.firstname} ${data?.getUser.lastname}`}
                  </p>
                  <div>
                    {
                      !isMe && 
                        <div style={{ marginTop: 5 }}> 
                          <Follow isBroken={isBroken} follower={{userId: userId, followerId: me?._id}}/>
                          <Chat members={[me?._id, userId]} history={history} isBroken={isBroken}></Chat>
                        </div>
                    }
                  </div>
                </div>
                <Menu
                  selectedKeys={[type]}
                  //   onSelect={(e) => {
                  //     // setKeyMenu(e.key)
                  //     // console.log(keyMenu)
                  //   }
                  //   }
                  style={{
                    marginTop: -30,
                    // color: 'black',
                    fontSize: 15,
                    fontWeight: 550,
                    width: isBroken ? '60vw' : '35vw',
                    backgroundColor: 'initial'
                  }}
                  overflowedIndicator={<EllipsisOutlined color="black" />}
                  mode="horizontal"
                >
                  <Menu.Item
                    onClick={() => history.push(`/${userId}/info`)}
                    key="info"
                  >
                    Thông tin
                  </Menu.Item>
                  {isBroken && (
                    <Menu.Item
                      onClick={() => history.push(`/${userId}/messenger`)}
                      key="mail"
                    >
                      Tin nhắn
                    </Menu.Item>
                  )}
                  <Menu.Item
                    onClick={() => history.push(`/${userId}/savedposts`)}
                    key="savedposts"
                  >
                    Bài viết đã lưu
                  </Menu.Item>
                  <Menu.Item
                    onClick={() => history.push(`/${userId}/myposts`)}
                    key="myposts"
                  >
                    Bài viết của tôi
                  </Menu.Item>
                  <Menu.Item
                    onClick={() => history.push(`/${userId}/joinedGroup`)}
                    key="joinedGroup"
                  >
                    Cộng đồng đã tham gia
                  </Menu.Item>
                </Menu>
              </div>
            </div>
          </div>
          <br />{' '}
        </>
      )}
      <div
        style={{
          backgroundColor: type === 'info' ? '#fff' : 'aliceblue',
          padding: type === 'info' && 16
        }}
      >
        {type === 'info' && <Info userInfo={data?.getUser} />}
        {type === 'messenger' && <MyMessenger userInfo={data?.getUser} />}
        {type === 'myposts' && (
          <MyPosts history={history} userInfo={data?.getUser} />
        )}
        {type === 'savedposts' && (
          <SavedPosts history={history} userInfo={data?.getUser} />
        )}
        {type === 'joinedGroup' && <HighLightGroup userInfo={data?.getUser} />}
      </div>
      <ModalPreviewImg
        previewImg={previewImg}
        onCancel={() => setPreviewImg({ ...previewImg, isShow: false })}
      />
    </>
  )
}

export default withRouter(Profile)
