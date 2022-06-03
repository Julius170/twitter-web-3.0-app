// import { useEffect, useContext, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
// import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

// interface Tweet {
//   timestamp: string
//   tweet: string
// }

// interface Tweets extends Array<Tweets> {}

// interface   {
//   name: string
//   profileImage: string
//   walletAddress: string
//   isProfileImageNft: Boolean | undefined
// }

const ProfileTweets = () => {
  const { currentAccount, currentUser } = useContext(TwitterContext)
//   const [tweets, setTweets] = useState<Tweets>([
//     {
//       timestamp: '',
//       tweet: '',
//     },
//   ])
//   const [author, setAuthor] = useState<Author>({
//     name: '',
//     profileImage: '',
//     walletAddress: '',
//     isProfileImageNft: undefined,
//   })

//   useEffect(() => {
//     if (!currentUser) return

//     setTweets(currentUser.tweets)
//     setAuthor({
//       name: currentUser.name,
//       profileImage: currentUser.profileImage,
//       walletAddress: currentUser.walletAddress,
//       isProfileImageNft: currentUser.isProfileImageNft,
//     })
//   }, [currentUser])

  return (
    <div className={style.wrapper}>
      {currentUser.tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            currentUser.name === 'Unnamed'
              ? `${currentAccount.slice(0, 4)}...${currentAccount.slice(-4)}`
              : currentUser.name
          }
          userName={`${currentAccount.slice(0, 4)}...${currentAccount.slice(-4)}`}
          text={tweet.tweet}
          avatar={currentUser.profileImage}
          isProfileImageNft={currentAccount.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default ProfileTweets