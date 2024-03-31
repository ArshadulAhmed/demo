import React from "react";

import SideNavTop from './SideNavTop'
import SideNavStaticMenu from './SideNavStaticMenu'
import SideNavUser from './SideNavUser'

import '../../assets/scss/sideNav.scss'


function SideNavBar(props){

    return(
        <div className="sideNavWrapper">
            <SideNavTop/>
            <SideNavStaticMenu/>
        </div>
    )
}

export default SideNavBar;