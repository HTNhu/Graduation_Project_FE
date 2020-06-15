import React, { useState, useEffect, useContext } from 'react'
// import { brokenContext } from '../../layouts/MainLayout'
import { IContext } from '@tools'
import firebase from 'firebase/app'
import { BellOutlined } from '@ant-design/icons'
import { Tooltip, Popover, Badge, Button, List } from 'antd'
import './index.scss'

const Noti = props => {
  // const isBroken = useContext(brokenContext)
  const [notifications, setNotifications] = useState([])
  const [visible, setVisible] = useState(false)
  const { me } = useContext(IContext)
  const { history } = props
  useEffect(() => {
    getNotification()
  }, [me])
  const getNotification = () => {
    let temp
    firebase
      .database()
      .ref('notifications/' + me?._id)
      .orderByKey()
      .on('value', snapshot => {
        temp = snapshot.val()
          ? Object.keys(snapshot.val()).map(key => ({
              ...snapshot.val()[key],
              id: key
            }))
          : []

        setNotifications(temp.reverse())
      })
  }

  return props.isBroken ? (
    <div onClick={() => history.push('/notify')}>
      <Badge
        dot
        count={notifications.filter(item => item.seen === false)?.length}
      >
        <BellOutlined />
      </Badge>
      <span>Thông báo</span>
    </div>
  ) : (
    <Popover
      placement="bottomLeft"
      id="noti-popover"
      // visible={visible}
      content={
        notifications?.length === 0 ? (
          <p>Chưa có thông báo nào</p>
        ) : (
          <List
            className="demo-loadmore-list"
            // loading={initLoading}
            itemLayout="horizontal"
            // loadMore={loadMore}
            dataSource={notifications}
            renderItem={noti => (
              <List.Item
                className="noti-item"
                style={{
                  backgroundColor: noti.seen
                    ? 'initial'
                    : 'rgba(214, 234, 248, 0.8)'
                }}
                onClick={() => {
                  firebase
                    .database()
                    .ref('notifications/' + me?._id + '/' + noti.id)
                    .update({
                      seen: true
                    })
                  history.push(noti.link)
                  setVisible(false)
                }}
              >
                {/* <Skeleton avatar title={false} loading={item.loading} active> */}
                <List.Item.Meta
                  // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.design">{noti.content.trim()}</a>}
                  description={
                    <p style={{ fontSize: 10 }}>
                      {noti?.createdAt
                        ? new Date(noti?.createdAt).toLocaleString()
                        : new Date().toLocaleString()}
                    </p>
                  }
                />
                {/* <div>content</div> */}
                {/* </Skeleton> */}
              </List.Item>
            )}
          />
        )
      }
      title="Thông Báo"
      trigger="click"
    >
      <Tooltip title="Thông báo" placement="bottomRight">
        <Button
          onClick={() => setVisible(!visible)}
          className="btn-round"
          shape="circle"
          icon={
            <Badge
              size={1}
              overflowCount={9}
              count={notifications.filter(item => item.seen === false)?.length}
            >
              <BellOutlined />
            </Badge>
          }
        />
      </Tooltip>
    </Popover>
  )
}
export default Noti
