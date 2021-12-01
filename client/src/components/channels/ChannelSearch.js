import React, {useState, useEffect} from 'react'
import {useChatContext} from 'stream-chat-react'
import {BiSearch} from 'react-icons/bi'
const ChannelSearch = () => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false)


    const getChannels = async(text) => {
        try{
            // begin here

        } catch(e){
            setQuery("")
        }
    }

    // handleChange
    const onSearch = (e) => {
        e.preventDefault()
        setLoading(true);
        setQuery(e.target.value)
    }

    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <BiSearch size={30} color="#fff" />
                </div>
                <input 
                    type="text"
                    name="search"
                    className="channel-search__input__text"
                    placeholder="Search"
                    onChange={onSearch}
                    value={query}
                />
            </div>
        </div>
    )
}

export default ChannelSearch
