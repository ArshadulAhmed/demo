import React from "react";
import  SideNavBar  from "../components/sideNav/SideNavBar";
import '../assets/scss/mainLayout.scss'

function MainLayout(props) {
    return (
        <div className="mainLayout">
            <SideNavBar />
            <div>{props.children}</div>
        </div>
    );
}

export default MainLayout;