import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

function SideNavUser(props){

    return(
        <div className="userBlock">
           
           <FaRegCircleUser className="userImage"/>
           <div className="userInfo">
            <p>Brooklyn Simmons</p>
            <p>brooklyn@brooklyn.com</p>
           </div>
           <MdMoreVert />
        </div>
    )
}

export default SideNavUser;