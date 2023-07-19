import React, { useState } from 'react';
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MaterialUISwitch } from "./Switch.js";
import "./menu.css";
import { menu_consts } from "./header_consts.js";
import "./SearchInput/Search.css";


export const Menu = () => {
  const [showSearchDiv, setShowSearchDiv] = useState(false);

  const handleClickSearch = () => {
    setShowSearchDiv(!showSearchDiv);
  };

  return (
    <>
      <div className="main_menu">
        <ul className="menu">
          <Link to="/">
            <img
              className="menu_logo"
              alt="logo"
              src="https://t4.ftcdn.net/jpg/05/41/13/85/360_F_541138545_5Kv07srfEnUhmLxq4Iig9h4aptGXFReJ.jpg"
            />
          </Link>
          {menu_consts.map((item) => (
            <li className="menu_list" key={item.id}>
              <Link className="menu_link" to={item.link}>
                {item.menu_title}
              </Link>
            </li>
          ))}
          <div className="search_logo" onClick={handleClickSearch}>
            <SearchOutlined />
          </div>
          <MaterialUISwitch />
        </ul>
      </div>
      {showSearchDiv && (
          <div className='div_style'>
            <div>
               <input className='input_style' type='text' placeholder='Search for movies and series' />
            </div>
            <div style={{position:"absolute", color:"white", fontSize:"28px", left:"69%"}}>
            <SearchOutlined />
            </div>
          </div>
      )}
    </>
  );
};