// HomePage.js
import React, { useEffect, useRef } from "react";
import "./HomePage.style.css";
import image from "./image/image 2.png";
import { useMenu } from "../../Context/MenuContext";
import Interview from "./component/Interview";
import Project from "./component/Project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const { menu } = useMenu();
  const sectionsRef = useRef([]);

  useEffect(() => {
    // 각 섹션에 대해 애니메이션 설정, Home 섹션과 그 하위 요소는 제외
    sectionsRef.current.forEach((section) => {
      // Home 섹션과 그 하위 요소들을 제외한 나머지 섹션에만 애니메이션 적용
      if (section && section.id !== "home" && section.id !== "home-image") {
        gsap.fromTo(
          section,
          { x: section.id === "interview" ? 0 : 200, opacity: 0 }, // 초기 위치와 투명도 설정
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%", // 애니메이션 시작 위치
              end: "top 30%", // 애니메이션 끝 위치
              scrub: true, // 스크롤과 애니메이션 동기화
            },
          }
        );
      }
    });

    // 인터뷰 섹션에 슬라이드 업 애니메이션 적용
    const interviewSection = sectionsRef.current.find(
      (section) => section.id === "interview"
    );

    if (interviewSection) {
      gsap.fromTo(
        interviewSection,
        { y: 100, opacity: 0 }, // 초기 위치: 아래쪽
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: interviewSection,
            start: "top 80%", // 애니메이션 시작 위치
            end: "top 30%", // 애니메이션 끝 위치
            scrub: true, // 스크롤과 애니메이션 동기화
          },
        }
      );
    }
  }, []);

  // 스크롤 위치를 조정하는 함수
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // 고정된 헤더의 높이를 고려한 오프셋
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div style={{ color: "white" }}>
        <div>
          {menu && (
            <div className="toggle-menu">
              <div
                className="menu-list"
                onClick={() => scrollToSection("home")}
              >
                Home
              </div>
              <div
                className="menu-list"
                onClick={() => scrollToSection("interview")}
              >
                Interview
              </div>
              <div
                className="menu-list"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </div>
            </div>
          )}
        </div>
        <div
          id="home"
          className="title fade-in"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>프론트엔드 개발자의 꿈을 이루고 싶은 김희수 입니다</h2>
        </div>
        <div
          id="home-image"
          className="image-container fade-in"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <img src={image} height="400" alt="나" />
        </div>
      </div>
      <div
        id="interview"
        className="Interview-container fade-in"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <Interview />
      </div>
      <div
        id="projects"
        className="Interview-container fade-in"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <Project />
      </div>
    </div>
  );
};

export default HomePage;
