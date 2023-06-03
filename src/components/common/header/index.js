import React from 'react';
import "./header.css"

const Header = () => {
  return (
    <div className="max-width header" >
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" className="header-logo" alt=""></img>

        <div className="header-right">
            <div className="header-location-search-container">
                <div className="location-wrapper">
                    <div className="location-icon-name">
                    <i class="fa-sharp fa-solid fa-location-dot absolute-center location-icon"></i>
                    <div>Banglore</div>
                    </div>
                    <i class="fa-solid fa-caret-down absolute-center"></i>
                </div>
                <div className="location-search-separator"></div>
                <div className="header-search-bar">
                <i class="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
                <input placeholder="search for restaurant, cuisine or dish " className="search-input"/>
                </div>
            </div>
            <div className="profile-wrapper">
            <img ></img>
            </div>
        </div>
    </div>
  )
}

export default Header