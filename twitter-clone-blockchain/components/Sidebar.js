import Link from 'next/link'


import { FiMoreHorizontal } from 'react-icon/vsc'
import { VscTwitter } from 'react-icon/vsc'
import SidebarOptions from './SidebarOptions'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icon/ri'
import { BiHash } from 'react-icon/bi' 
import { FiBell } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icon/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icon/fa'
import { CgMoreO } from 'react-icon/cg'
import {BsBookmarkFill, BsBookmark, BsPerson, BsPersonFill } from 'react-icon/bs'


const style = {
    wrapper: `flwx-[0.7] px-8 flex flex-col`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 cursor-pointer hover`,
    profileLeft: `lex item-center justafy-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-lg`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`,

}


export default function Sidebar({initialSelectedIcon = "Home"}) {
    const [selected, setSelected] = useState ("Home")
  return (
    <div className={style.wrapper}>
        <div className={style.twitterIconContainer}>
            <VscTwitter />``
        </div>
        <div>{style.navContainer}
        <SidebarOptions Icon={selected === "Home" ? RiHome7Fill : RiHome7Line} 
        text = "Home"
        isActive={Boolean(selected === "Home")}
        redirect= {'/'}
        />

        <SidebarOptions
        Icon={selected === "Explore" ? FaHashtag : BiHash}
        text = "Explore"
        isActive= {Boolean(selected === "Explore")}
        setSelected = {setSelected}        
        />

        <SidebarOptions
        Icon={selected === "Notifications" ? FaBell : FiBell}
        text = "Notifications"
        isActive= {Boolean(selected === "Notifications")}
        setSelected = {setSelected}        
        />
        <SidebarOptions
        Icon={selected === "Messages" ? HiMail : HiOutlineMail}
        text = "Messages"
        isActive= {Boolean(selected === "Messages")}
        setSelected = {setSelected}        
        />
        <SidebarOptions
        Icon={selected === "Bookmarks" ? BsBookmarkFill : BsBookmark}
        text = "Bookmarks"
        isActive= {Boolean(selected === "Bookmarks")}
        setSelected = {setSelected}        
        />
        <SidebarOptions
        Icon={selected === "Lists" ? FaHashtag : BiHash}
        text = "Lists"
        isActive= {Boolean(selected === "Lists")}
        setSelected = {setSelected}        
        />
        <SidebarOptions
        Icon={selected === "Profile" ? BsPersonFill : BsPerson}
        text = "Profile"
        isActive= {Boolean(selected === "Profile")}
        setSelected = {setSelected}   
        redirect = {"/profile"}     
        />
        <SidebarOptions
        Icon={CgMoreO}
        text = "More" setSelected={setSelected}/>

        <div className={style.tweetButton}>Mint</div>
        
        <div className={style.profileButton}></div>
        <div className={style.profileLeft}></div>
        <div className={style.profileRight}></div>
        <div className={style.details}>
            <div className={style.name}>Phensic</div>
            <div className={style.handle}>anlbcaldugcoayd</div>

            <div className={style.moreContainer}></div>
            <FiMoreHorizontal />

        </div>
        
        </div>
    </div>
  )
}
