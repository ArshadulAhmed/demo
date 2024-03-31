import React from "react";
import { FiHome } from "react-icons/fi";
import SideNavUser from "./SideNavUser";

import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

function SideNavStaticMenu(props){

    return(
        <div className="sideNavStaticMenuWrapper commonMenuWrapper">
            <div className="menuWrapper">
                <div className="iconBlock"><IoIosNotificationsOutline /></div><p>Notification</p><p className="notificationCount">10</p>
            </div>
            <div className="menuWrapper">
                <div className="iconBlock"><MdOutlineContactSupport /></div><p>Support</p>
            </div>
            <div className="menuWrapper">
                <div className="iconBlock"><IoSettingsOutline /></div><p>Settings</p>
            </div>

            <SideNavUser/>
        </div>
    )
}

export default SideNavStaticMenu;