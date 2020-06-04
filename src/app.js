import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter } from 'react-router-dom'
import * as firebase from 'firebase/app'
import 'firebase/database'
import { SdkUtils } from '@utils'
import { Client, ContextWrapper } from '@tools'
import Routers from '@routers'
import './app.scss'

const firebaseConfig = {
  apiKey: 'AIzaSyAzni8DvqLlDB_rnt1nxtCpIEeHocXHaZA',
  authDomain: 'graduation-project-2020.firebaseapp.com',
  databaseURL: 'https://graduation-project-2020.firebaseio.com',
  projectId: 'graduation-project-2020',
  storageBucket: 'graduation-project-2020.appspot.com',
  messagingSenderId: '950930789819',
  appId: '1:950930789819:web:b54a53c02ebdcf7e59609e',
  measurementId: 'G-MPT0K7B144'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const App = () => {
  // firebase.initializeApp(firebaseConfig)
  SdkUtils.initFacebookSdk()
  SdkUtils.initGooglePlatform()
  return (
    <ApolloProvider client={Client}>
      <BrowserRouter>
        <ContextWrapper>
          <Routers />
        </ContextWrapper>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
