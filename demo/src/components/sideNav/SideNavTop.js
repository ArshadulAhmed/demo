import React from "react";
import { MdMenu } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { TbHome } from "react-icons/tb";

import { GoOrganization } from "react-icons/go";
import { FaCodepen } from "react-icons/fa6";
import logo from '../../assets/image/logo2.png'
import { AiOutlineTrademark } from "react-icons/ai";
import { VscHistory } from "react-icons/vsc";
import { CiWallet } from "react-icons/ci";

function SideNavTop(props) {

    return (
        <div className="sideNavTopWrapper">
            <div className="logoBlock">
                <div className="logoBlockTop">
                    <img src={logo} alt='Carbon cell logo' className="logo" />
                    <MdMenu />
                </div>
                <div className="searchBlock">
                    <input type="text" placeholder="search" />
                </div>
            </div>
            <div className="sideNavDynamicMenuWrapper commonMenuWrapper">
                <div className="menuWrapper">
                    <div className="iconBlock"><TbHome /></div><p>Home</p>
                </div>
                <div className="menuWrapper">
                    <div className="iconBlock"><GoOrganization /></div><p>Organization</p>
                </div>
                <div className="menuWrapper">
                    <div className="iconBlock"><FaCodepen /></div><p>Assets</p>
                </div>
                <div className="menuWrapper">
                    <div className="iconBlock"><AiOutlineTrademark /></div><p>Trade</p>
                </div>
                <div className="menuWrapper">
                    <div className="iconBlock"><VscHistory /></div><p>History</p>
                </div>
                <div className="menuWrapper">
                    <div className="iconBlock"><CiWallet /></div><p>Wallet</p>
                </div>
            </div>
        </div>
    )
}

export default SideNavTop;