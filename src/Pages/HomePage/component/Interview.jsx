// Interview.js
import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import gsap from "gsap";
import "./Interview.style.css";

const Interview = () => {
  const [selectedTopic, setSelectedTopic] = useState(""); // 선택된 주제 상태
  const descriptionRef = useRef(null); // 설명 요소 참조

  // 설명이 나타날 때 애니메이션 설정
  useEffect(() => {
    if (selectedTopic) {
      gsap.fromTo(
        descriptionRef.current,
        { x: -200, opacity: 0 }, // 초기 위치와 투명도
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, [selectedTopic]);

  // 클릭 시 설명을 업데이트하는 함수
  const clickList = (topic) => {
    setSelectedTopic(topic); // 주제 상태 업데이트
  };

  // 각 설명을 객체로 관리
  const descriptions = {
    클린코드:
      "코드를 작성할 때 복잡함을 피하고, 명확하고 간결한 코드를 지향합니다. 모든 코드는 협업자가 쉽게 이해하고 유지보수할 수 있도록 작성하고자 하며, 주석과 문서화를 통해 코드의 가독성을 높이는 데 중점을 두고 있습니다.",
    열정: "어려운 문제를 만나도 포기하지 않고 끝까지 해결하려는 열정을 가지고 있습니다. 새로운 기술과 지식을 배우는 것을 즐기며, 이를 통해 지속적으로 성장합니다. 매일 학습한 내용을 기록하고, 이를 바탕으로 자신의 발전 과정을 체크하고 있습니다.",
    협업: "팀 내에서 원활한 협업을 위해 뛰어난 의사소통 능력을 발휘할 수 있습니다. 팀원들과의 소통을 통해 프로젝트의 목표와 방향을 명확히 하고, 문제가 발생하면 팀원들과 협력하여 신속하게 해결하며, 이를 통해 프로젝트의 효율성을 높이고자 합니다.",
  };

  return (
    <div style={{ color: "white", minHeight: "100vh" }}>
      <div className="title-container">Interview</div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "60px",
            fontWeight: "600",
          }}
        >
          개발에 있어서 중요하게 생각하는 점은?
        </div>
        <div>
          <div className="button-container">
            <div>
              <Button
                className="button-list"
                variant="outline-light"
                onClick={() => clickList("클린코드")}
              >
                클린코드
              </Button>
            </div>
            <div>
              <Button
                className="button-list"
                variant="outline-light"
                onClick={() => clickList("열정")}
              >
                열정
              </Button>
            </div>
            <div>
              <Button
                className="button-list"
                variant="outline-light"
                onClick={() => clickList("협업")}
              >
                협업
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 선택된 주제에 따라 설명을 표시 */}
      <div
        className="description-container"
        style={{ marginTop: "20px", padding: "0 20px" }}
      >
        {selectedTopic && (
          <div className="description" ref={descriptionRef}>
            <p>{descriptions[selectedTopic]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interview;
