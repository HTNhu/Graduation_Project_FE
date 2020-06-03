/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect, useLayoutEffect } from 'react'
import firebase from 'firebase/app'
import {
  Card,
  Input,
  Avatar,
  Typography,
  Button,
  Menu,
  Dropdown,
  notification
} from 'antd'
import {
  CommentOutlined,
  FlagOutlined,
  BookOutlined,
  EllipsisOutlined
} from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
import { brokenContext } from '../../layouts/MainLayout'
import './index.scss'
import {
  Reaction,
  HighLightPost,
  SharePost,
  CommentPost,
  ModalReport,
  ModalCreatePost
} from '@components'
import { IContext } from '@tools'
import { Post } from './post'
// import { SumComment } from '../../components/Comment'
// 
const { Meta } = Card
// var moment = require('moment')
const data = [
  {
    title: 'Ant Design Title 1',
    groupId: '111',
    postId: 'post1'
  },
  {
    title: 'Ant Design Title 2',
    groupId: '222',
    postId: 'post2'
  },
  {
    title: 'Ant Design Title 3',
    groupId: '111',
    postId: 'post3'
  },
  {
    title: 'Ant Design Title 4',
    groupId: '222',
    postId: 'post4'
  }
]

const HomePage = props => {
  const isBroken = useContext(brokenContext)
  const [visibleModalCreate, setVisibleModalCreate] = useState(false)
  // const [visibleModalReport, setVisibleModalReport] = useState(false)
  // const [showText, setShowText] = useState(false)

  // const nameEl = showText ? 'expand' : 'collapse'
  const { me } = useContext(IContext)
  
  const handleOk = () => {
    setVisibleModalCreate(false)
    // setVisibleModalReport(false)
  }
  const handleCancel = () => {
    setVisibleModalCreate(false)
    // setVisibleModalReport(false)
  }

  return (
    <>
      <h3>Tạo bài viết</h3>
      <Input.TextArea
        onClick={() => setVisibleModalCreate(!visibleModalCreate)}
        style={{ margin: '0 auto', marginBottom: 10 }}
        placeholder={`${me?.firstname} ơi, hôm nay bạn cần chia sẻ gì ?`}
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
      <h3>Bài viết từ FAMILY</h3>
      <HighLightPost isBroken={isBroken}></HighLightPost>

      {data.map((item, idx) => {
        return (
          <Post key={idx} item={item} idx={idx} ></Post>
        )
      })}

      <ModalCreatePost
        isBroken={isBroken}
        handleCancel={handleCancel}
        handleOk={handleOk}
        visible={visibleModalCreate}
      ></ModalCreatePost>
    </>
  )
}

export default withRouter(HomePage)
