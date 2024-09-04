import React from "react";
import menuIcon from "./icon/menu.png"; // 이미지 파일 경로를 import
import "./AppLayout.style.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useMenu } from "../../Context/MenuContext";
const AppLayout = () => {
  const { menu, toggleMenu } = useMenu();

  return (
    <div>
      <div className="navbar-container">
        <div className="menu-container">
          <img width="40" src={menuIcon} alt="Menu Icon" onClick={toggleMenu} />
        </div>
        <div
          className="GitHub-container"
          style={{
            margin: "10px",
            marginRight: "50px",
            marginLeft: "100px",
          }}
        >
          <a
            className="hover-Link"
            href="https://github.com/KimHeeH"
            style={{ color: "white", fontSize: "25px", textDecoration: "none" }}
            target="_blank" // 새 탭에서 열리도록 설정
            rel="noopener noreferrer" // 보안 및 성능 향상을 위해 추가
          >
            GitHub
          </a>
        </div>
        <div className="Blog-container" style={{ margin: "10px" }}>
          <a
            href="https://gimicoding.tistory.com/"
            className="hover-Link"
            style={{
              color: "white",
              fontSize: "25px",
              textDecoration: "none",
            }}
            target="_blank" // 새 탭에서 열리도록 설정
            rel="noopener noreferrer" // 보안 및 성능 향상을 위해 추가
          >
            Blog
          </a>
        </div>
      </div>
      <Outlet menu={menu} />
    </div>
  );
};

export default AppLayout;
