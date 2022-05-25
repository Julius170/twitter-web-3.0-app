import BsFllPatchCheckFill  from 'react-icons/bs'
import { format } from 'timeago.js' 
import { FaRegComment } from 'react-icon/fa'
import  { FiShare } from 'react-icon/fi'
import  { FaRegComment, FaRetweet } from 'react-icon/fa'

const style = {
      wrapper: `flex p-3 border-b border-[#38444d]`,
      profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
      postMain: `flex-l px-4`,
      headerDetail: `flex items-center`,
      name: `font-bold mr-l`,
      verified: `text-[0.8rem]`,
      handleAndTimeAgo: `text-[#8899a] ml-l`,
      tweet: `my-2`,
      image: `rounded-3xl`,
      footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
      footerIcon:`rounded-full text-lg p-2`
    }


function Post() { (

  displayName,
  userName,
  text,
  avatar,
  timestamp,
  isProfileImageNFT,
  
  ) => {
  return 
    <div className={style.wrapper}>
      <div>
        <img 
        src={avatar}
        alt={userName}
        className={
          isProfileImageNFT ? `${style.profileImage} smaillHex`
          : style.profileImage
        } />
        <div className={style.postMain}>
          <div>
            <span className={style.headerDetail}>
              <span className={style.name}>
                {displayName}
              </span>
              {isProfileImageNFT && 
              <span className={style.verified}>
                <BsFllPatchCheckFill />  
              </span>}
            <span className={style.handleAndTimeAgo}>
              @{userName} * {format(new Date(timestamp).getTime)}
            </span>
            </span>
            <div className={style.tweet}>{tweet}</div>
          </div>
          <div className={style.footer}>
                <div className ={ `${style.footerIcon}hover:bg-[#le364a] hover:text-[#ld9bf0] `}>
                  <FaRegComment />
                </div>
              <div className ={ `${style.footerIcon}hover:bg-[#lb393b] hover:text-[#03ba7c] `}>
                <FaRetweet />
              </div>
              <div className ={ `${style.footerIcon}hover:bg-[#39243c] hover:text-[#f9lc80] `}>
                <AiOutlineHeart />
              </div>
              <div className ={ `${style.footerIcon}hover:bg-[#le394a] hover:text-[#ld9bf0] `}>
                  <FiShare />
              </div>
          </div>
        </div>
          </div>
    </div>
  }
}

export default Post
