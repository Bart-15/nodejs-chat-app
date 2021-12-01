import React from 'react'
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import './App.css'
import Auth from './components/auth/Auth'
import {ChannelContainer, ChannelListContainer} from './components/channels'


// api key for stream chat
const API_KEY = "eunye544ggy6"
const client = StreamChat.getInstance(API_KEY)
const AuthToken = false;

const App = () => {
    if(!AuthToken) {
        return (
          <Auth />  
        ) 
    }
    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer />
                <ChannelContainer />
            </Chat>
        </div>
    )
}

export default App
