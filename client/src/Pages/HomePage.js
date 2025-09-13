import React from "react";
import Layout from "../components/layout/Layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://content.jdmagicbox.com/v2/comp/mumbai/m4/022pxx22.xx22.091218111321.j9m4/catalogue/milestone-institute-of-technology-thane-west-thane-cad-training-institutes-demjohweyh.jpg"
                style={{ height: "80vh", opacity: "0.6" }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-body-secondary fs-1">
                  Ignite Your Hackthon Skills! 🚀
                </h5>
                <p className="text-body-secondary fs-4 fw-medium">
                  🎯 Boost your problem-solving speed. Are you ready to master? Let’s go! 📌
                 Register for your first event now!
                </p>
                <p className="text-body-secondary fs-4 fw-medium">
                  💡 Sharpen your creativity with our dynamic Event! Designed for students, job aspirants, and
                  competitive exam takers, our event challenge you to think
                  fast, stay smart, and stay ahead!
                </p>
                <p className="text-body-secondary fs-4 fw-medium">
                  📌 Register your first Event now!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/03/22210204/Quantitative-Aptitude.jpg"
                style={{ height: "80vh", opacity: "0.3" }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-body-secondary fs-1">
                  Various Workshop, One at a Time! 🏆
                </h5>
                <p className="text-body-secondary fs-4 fw-medium">
                  📚 Prepare for exams like never before! Whether it's campus
                  placements, government exams, or competitive tests, our app is
                  built to enhance your logical reasoning and quantitative
                  skills.
                </p>
                <p className="text-body-secondary fs-4 fw-medium">
                  🔥 Register with friends, climb the
                  top, and become a champion!
                </p>
                <p className="text-body-secondary fs-4 fw-medium">
                  💪 Change yourself today!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/12/23173931/Number-System-Aptitude-Tricks.jpg"
                style={{ height: "80vh", opacity: "0.8" }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-body-secondary fs-1">
                  Network. Learn. Win! 🎉
                </h5>
               
                <p className="text-body-secondary fs-4 fw-medium">
                  ⚡ Get started now & register for next Event!
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
