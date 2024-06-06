import React from "react";
import { IoHome } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { BiConversation } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdSubscriptions } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
const Sidebar = ({bgColor,color}) => {
  return (
    <>
      <div className="side_bar_content" style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`
      }}>
        <div className="top_content">
          <div className="items">
            <IoHome className="icons" /> Home
          </div>
          <div className="items">
            <IoIosNotifications className="icons" />
            Notification
          </div>
          <div className="items">
            <CiShoppingCart className="icons" /> Shop
          </div>
          <div className="items">
            <BiConversation className="icons" />
            Conversation
          </div>
          <div className="items">
            <FaWallet className="icons" />
            Wallet
          </div>
          <div className="items">
            <MdSubscriptions className="icons" />
            Subscription
          </div>
          <div className="items">
            <CgProfile className="icons" />
            My profile
          </div>
        </div>
        <div className="bottom_content items">
          <BiLogOut className="icons" />
          LogOut
        </div>
      </div>
    </>
  );
};

export default Sidebar;
