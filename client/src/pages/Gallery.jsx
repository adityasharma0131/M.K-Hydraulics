import React, { useState } from "react";
import HeroPage from "../components/HeroPage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const images = [
    "http://picsum.photos/2000/3000",
    "http://picsum.photos/3000/3000",
    "http://picsum.photos/4000/3000",
    "http://picsum.photos/3000/3000",
    "http://picsum.photos/1000/3000",
    "http://picsum.photos/2000/1500",
    "http://picsum.photos/2500/3000",
    "http://picsum.photos/3000/2000",
    "http://picsum.photos/2000/3000",
    "http://picsum.photos/3000/3000",
    "http://picsum.photos/3000/3000",
    "http://picsum.photos/1000/3000",
    "http://picsum.photos/2500/3000",
    "http://picsum.photos/3000/2000",
  ];

  const [data, setData] = useState({
    img: "",
    i: 0,
  });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const nextImage = () => {
    setData((prev) => {
      const nextIndex = (prev.i + 1) % images.length;
      return { img: images[nextIndex], i: nextIndex };
    });
  };

  const prevImage = () => {
    setData((prev) => {
      const prevIndex = (prev.i - 1 + images.length) % images.length;
      return { img: images[prevIndex], i: prevIndex };
    });
  };

  const closeImage = () => {
    setData({ img: "", i: 0 });
  };

  return (
    <>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.9)",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            overflow: "hidden",
          }}
        >
          <button
            onClick={closeImage}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: "10px",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >
            &#10094;
          </button>
          <img
            src={data.img}
            style={{
              width: "auto",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
            alt="Enlarged gallery item"
          />
          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: "10px",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >
            &#10095;
          </button>
        </div>
      )}
      <HeroPage heading="Gallery" />
      <div className="gallery-container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery Image ${index + 1}`}
                style={{
                  width: "100%",
                  display: "block",
                  cursor: "pointer",
                }}
                onClick={() => viewImage(src, index)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Gallery;