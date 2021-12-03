import React from 'react'
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import './App.css'
import Auth from './components/auth/Auth'
import Cookies from 'universal-cookie'
import {ChannelContainer, ChannelListContainer} from './components/channels'


// api key for stream chat
const API_KEY = "exf3k9ep4mxm"
const client = StreamChat.getInstance(API_KEY)
const cookies = new Cookies();
const AuthToken = cookies.get("token");


if(AuthToken) {
    client.connectUser({
       id: cookies.get('userId'),
       name: cookies.get('username'),
       fullName:  cookies.get('fullName'),
       phoneNumber: cookies.get('phoneNumber'),
       image: cookies.get('image'),
       hashedPassword: cookies.get('hashedPassword')
    }, AuthToken)
}

const App = () => {
    if(!AuthToken) return <Auth />
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
