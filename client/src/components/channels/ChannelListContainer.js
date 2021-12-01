import React from 'react'
import {ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import {BsChatLeftDotsFill} from 'react-icons/bs'
import {BiLogOutCircle} from 'react-icons/bi'

const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <BsChatLeftDotsFill  size={20} />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon2__inner">
                <BiLogOutCircle size={20} />
            </div>
        </div>
    </div>
)

const AppHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Chat Us!</p>
    </div>
)


const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className="channel-list__list__wrapper">
                <AppHeader />
                <ChannelSearch />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => {
                        return (
                            <TeamChannelList {...listProps} type="team"/>
                        )
                    }} 
                    Preview = {(prevProps) => {
                        return (
                            <TeamChannelPreview {...prevProps} type="team" />
                        )
                    }}
                    />
                    <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => {
                        return (
                            <TeamChannelList {...listProps} type="messaging"/>
                        )
                    }} 
                    Preview = {(prevProps) => {
                        return (
                            <TeamChannelPreview {...prevProps} type="messaging" />
                        )
                    }}
                    />
            </div>
        </>
    )
}

export default ChannelListContainer
