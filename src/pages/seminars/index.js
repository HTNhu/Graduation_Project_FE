import React, { useContext, useRef, useEffect, useState, useMemo } from 'react'
import { Card, Button, Space, Menu, Dropdown, Avatar } from 'antd'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  UserOutlined
} from '@ant-design/icons'
import './index.scss'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import firebase from 'firebase/app'
import { IContext } from '@tools'
import ModalSeminar from './modalSeminar'
import SeminarDetail from './seminarDetail'

const GET_SEMINARS = gql`
  query seminars {
    seminars {
      _id
      title
      description
      startAt
      createdBy {
        _id
        firstname
        lastname
        avatar
        expert {
          jobTitle
        }
      }
    }
  }
`

function index() {
  const { me } = useContext(IContext)
  const modalRef = useRef()
  const { data, refetch } = useQuery(GET_SEMINARS)
  const [firebaseSeminars, setFirebaseSeminars] = useState([])
  useEffect(() => {
    firebase
      .database()
      .ref('seminars')
      .on('value', snapshot => setFirebaseSeminars(snapshot.val()))
  }, [])
  const seminars = useMemo(() => {
    if (data?.seminars && firebaseSeminars) {
      const startSeminarIds = firebaseSeminars
        .filter(v => v.isStart)
        .map(v => v._id)
      const endSeminarIds = firebaseSeminars
        .filter(v => !v.isStart)
        .map(v => v._id)
      const excludeIndex = []
      const startSeminars = data?.seminars?.filter((v, idx) => {
        excludeIndex.push(idx)
        return startSeminarIds.includes(v._id)
      })
      const endSeminars = data?.seminars?.filter((v, idx) => {
        excludeIndex.push(idx)
        return endSeminarIds.includes(v._id)
      })
      return {
        startSeminars,
        endSeminars,
        upcomingSeminars: data?.seminars?.filter((v, idx) =>
          excludeIndex.includes(idx)
        )
      }
    }
  }, [firebaseSeminars, data?.seminars])
  console.log(me)
  return (
    <Card
      title="Hội thảo"
      extra={
        me?.expert?.isVerify ? (
          <Button
            icon={<PlusOutlined />}
            onClick={() => modalRef.current?.openModal()}
          >
            Tạo hội thảo
          </Button>
        ) : null
      }
    >
      <Card type="inner" title="Đang diễn ra">
        {seminars?.startSeminars?.map(v => (
          <SeminarDetail key={v._id} me={me} seminarData={v} />
        ))}
      </Card>
      <Card style={{ marginTop: 16 }} type="inner" title="Sắp tới">
        {seminars?.upcomingSeminars?.map(v => (
          <SeminarDetail key={v._id} me={me} seminarData={v} />
        ))}
      </Card>
      <Card style={{ marginTop: 16 }} type="inner" title="Đã kết thúc">
        {seminars?.endSeminars?.map(v => (
          <SeminarDetail key={v._id} me={me} seminarData={v} />
        ))}
      </Card>
      <ModalSeminar ref={modalRef} refetchSeminars={refetch} />
    </Card>
  )
}

export default index
