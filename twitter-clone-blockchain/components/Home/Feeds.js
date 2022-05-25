import { BsStarts } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
    wrapper: `flex-[2] border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justiy-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
    displayName: "Phensic",
    userName: "walltet-address",
    avatar: "C:\Users\Phensic002\OneDrive\Documents\Twitter-web3\twitter-clone-blockchain\public\Phensic.png",
    text: "gm",
    isProfileImageNFT: false,
    timestamp: "2022-05-24T12:00:00.000Z"
    },
    {
    displayName: "Phensic",
    userName: "walltet-address",
    avatar: "C:\Users\Phensic002\OneDrive\Documents\Twitter-web3\twitter-clone-blockchain\public\Phensic.png",
    text: "gm",
    isProfileImageNFT: false,
    timestamp: "2022-01-24T12:00:00.000Z"
    },
    {
    displayName: "Phensic",
    userName: "walltet-address",
    avatar: "C:\Users\Phensic002\OneDrive\Documents\Twitter-web3\twitter-clone-blockchain\public\Phensic.png",
    text: "gm",
    isProfileImageNFT: false,
    timestamp: "2022-03-24T12:00:00.000Z"
    }

]

export default function Feeds() {
  return (
    <div className={$`{style.wrapper}`}>
        <div className= {style.header}>
            <div className={style.headerTitle}>Home</div>
            <BsStarts />
        </div>
        {tweets.map(( tweets, index) =>(
                <Post
                key={index}
                displayName= {tweets.displayName}
                userName ={`${tweets.userName.slice(0,4).slice}...${tweets.userName -4}} `}
                avatar ={tweets.avatar} 
                text ={tweets.text} 
                isProfileImageNFT={tweets.isProfileImageNFT}
                timestamp={tweets.timestamp}
                />

            ) )
        }
        <TweetBox />
    </div>
  )
}
