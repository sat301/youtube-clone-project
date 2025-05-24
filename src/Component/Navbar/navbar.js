import React, { useState } from 'react'
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Navbar = () => {
    const [userPic, setuserPic] = useState
    ("https://wallpapercave.com/wp/wp11413592.jpg")
    const [navbarModal, setNavbarModal] = useState(false);

    const handleClickModal =()=>{
        setNavbarModal(prev=>!prev);
    }




    return (
        <div className='navbar'>

            <div className="navbar-left">
                <div className="navbarHumberger">
                    <MenuIcon sx={{ color: "white" }} />
                </div>
                <div class="navbar_youtubeImg">
                    <YouTubeIcon sx={{ fontSize: "34px" }} className='navbar_youtubeImage' />
                    <div className='navbar_utubeTitle'>YouTube</div>
                </div>
            </div>

            <div className="navbar-middle">
                <div className="navbar_searchBox">
                    <input placeholder="Search" type="text"
                        className='navbar_searchBoxInput' />
                    <div className="navbar_searchIconBox">
                        <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
                    </div>
                    <div className="navbar_mike">
                        <KeyboardVoiceIcon sx={{ color: "white" }} />
                    </div>
                </div>
            </div>

            <div className="navbar-right">
                <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
                <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
                <img onClick={handleClickModal} src={userPic} alt="logo" className="navbar-right-logo" />
                { navbarModal &&
                    <div className="navbar-modal">
                        <div className="navbar-modal-option">profile</div>
                        <div className="navbar-modal-option">Logout</div>
                        <div className="navbar-modal-option">Login</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar

