import { useState } from "react"
import  { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarCharHorizontalFill } from 'react-icon/ri'
import { IoMdCalender } from 'react-icons/io'
import { MdOutlineLocatioOn } from 'react-icon/md' 
import {client}  from '../../lib/client'
import { useContext } from "react"
import { TwitterContext } from "../../context/TwitterContext"

const style = {
    wrapper: `px-4 fles-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `heigth-12 w-12 rounded full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex lex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#3196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
}



const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("")
    import (currentAccount) = useContext(TwitterContext) 
    const postTweet = (event) => {
        event.preventDefault();
        console.log(tweetMessage)

        if (!tweetMessage) return

        const tweetId = `${currentAccount}_${Date.now()}`

        const tweetDoc = {
            _type: "tweets",
            _id: "tweetId",
            tweet: tweetMessage,
            timestamp: new Date(Date.now()).toISOString(),
            author: {
                _key:tweetId,
                _tyoe: 'reference',
                _ref: currentAccount,
            },
        }
        await client.createIfNotExists(tweetDoc)

        await client
        .patch(currentAccount)
        .setIfMissing({tweets: [] }) 
        .insert('after', 'tweets[-1', [
           {
               _key:tweetId,
               _type: 'reference',
               _ref: tweetId,         } 
        ])
        .commit()
        setTweetMessage("")
}
  return (
    <div className={style.wrapper}>
        <div className={style.tweetBoxLeft}>
            <img src='C:\Users\Phensic002\OneDrive\Documents\Twitter-web3\twitter-clone-blockchain\public\Phensic.png'
            alt="profile image"
            className={style.profileImage} 
            />
        </div>
        <div className={style.tweetBoxRight}>
            <form>
                <textarea
                className={style.inputField}
                placeholder="Whats happening" 
                value= {tweetMessage}
                onChange={(e) => setTweetMessage(e.target.value)}/>
                <div className={style.formLowerContainer}>
                    <div className={style.iconsContainer}>
                        <BsCardImage className={style.icon} />
                        <RiFileGifLine className= {style.icon}/>
                        <RiBarCharHorizontalFill className={style.icon}/>
                        <BsEmojiSmile className={style.icon}/>
                        <IoMdCalender className={style.icon}/>
                        <MdOutlineLocatioOn className={style.icon} />  
                    </div>
                        <button 
                        type="submit"
                        disable={!tweetMessage}
                        onClick={(event) => postTweet(event)} 
                        className={`${style.submitGeneral}
                        ${ tweetMessage ? style.activeSubmit : style.inactiveSubmit
                        }`}
                      Tweet
                      >
                        </button>
                </div>
            </form>
            </div>        
    </div>
  )
}

export default TweetBox