import React, { useEffect, useState } from "react";
import HeroPage from "../components/HeroPage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    img: "",
    i: 0,
  });

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch("/api/gallery");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedImages = await response.json();
        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const nextImage = () => {
    setData((prev) => {
      const nextIndex = (prev.i + 1) % images?.length;
      const nextImageUrl = `/api/uploads/${images[nextIndex].filename}`;

      return { img: nextImageUrl, i: nextIndex };
    });
  };

  const prevImage = () => {
    setData((prev) => {
      const prevIndex = (prev.i - 1 + images?.length) % images?.length;
      const prevImageUrl = `${import.meta.env.VITE_MODE=="prod"? import.meta.env.VITE_PROD_BACKEND:import.meta.env.VITE_DEV_BACKEND}/uploads/${images[prevIndex].filename}`;

      return { img: prevImageUrl, i: prevIndex };
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
        {loading ? (
          <p>Loading gallery images...</p>
        ) : error ? (
          <p>Error loading gallery images: {error.message}</p>
        ) : (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="20px">
              {images.map((item, index) => (
                <img
                  key={item._id}
                  src={`${import.meta.env.VITE_MODE=="prod"? import.meta.env.VITE_PROD_BACKEND:import.meta.env.VITE_DEV_BACKEND}/uploads/${item.filename}`}
                  alt={`Gallery Image ${index + 1}`}
                  style={{
                    width: "100%",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    viewImage(
                      `${import.meta.env.VITE_MODE=="prod"? import.meta.env.VITE_PROD_BACKEND:import.meta.env.VITE_DEV_BACKEND}/uploads/${item.filename}`,
                      index
                    )
                  }
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </div>
    </>
  );
};

export default Gallery;
