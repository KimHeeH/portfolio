import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Carousel 기본 스타일 추가
import projectImage1 from "../../image/netflix.png";
import projectImage2 from "../../image/Homepage.png"; // 두 번째 이미지 경로
import projectImage3 from "../../image/video.png"; // 세 번째 이미지 경로
import projectImage4 from "../../image/Movies.png"; // 네 번째 이미지 경로
import projectImage5 from "../../image/MovieDetail.png"; // 다섯 번째 이미지 경로

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Netflix_Project = () => {
  // 이미지 리스트 추가
  const NetflixImageList = [
    { src: projectImage1, alt: "Project Image 1" },
    { src: projectImage2, alt: "Project Image 2" },
    { src: projectImage3, alt: "Project Image 3" },
    { src: projectImage4, alt: "Project Image 4" },
    { src: projectImage5, alt: "Project Image 5" },
  ];

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <h2>Netflix clone coding project</h2>
      </div>

      <Carousel
        centerMode={true}
        infinite={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
        autoPlay={false} // 자동 슬라이드를 비활성화하여 수동으로 테스트
        arrows={true} // 좌우 화살표 추가하여 수동 이동 가능하게 설정
        swipeable={true} // 터치 스와이프 가능 설정
        draggable={true} // 드래그 가능 설정
        showDots={true} // 아래에 점 추가하여 슬라이드 위치 표시
      >
        {/* 슬라이드 항목을 이미지 리스트로부터 생성 */}
        {NetflixImageList.map((image, index) => (
          <div key={index} className="slider-item">
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Netflix_Project;
