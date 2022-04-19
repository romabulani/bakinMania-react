import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./home.css";
function Home() {
  const imgSrcUrls = [
    "https://res.cloudinary.com/dtrjdcrme/image/upload/v1649999358/quiz/cakes.webp",
    "https://res.cloudinary.com/dtrjdcrme/image/upload/v1649999358/quiz/muffins.webp",
    "https://res.cloudinary.com/dtrjdcrme/image/upload/v1649999359/quiz/sweets.webp",
    "https://res.cloudinary.com/dtrjdcrme/image/upload/v1649999359/quiz/baking.webp",
    "https://res.cloudinary.com/dtrjdcrme/image/upload/v1649999359/quiz/cakedecoration.webp",
  ];
  return (
    <>
      <div className="hero-container">
        <div className="hero-content flex-column-center">
          <h2 className="heading2 keyword">Bakin Mania</h2>
          <p className="bold-text text-center">Are you bored?</p>
          <p className="bold-text text-center">We got you covered</p>
          <p className="bold-text text-center">
            Do you know about cakes, desserts and baking?
          </p>
          <div className="flex-row-center">
            <button className="btn btn-primary">EXPLORE</button>
            <button className="btn btn-outline-primary">CREATE QUIZ</button>
          </div>
        </div>
      </div>
      <main className="container-main flex-column-center">
        <h3 className="text-center heading3">Quiz Categories</h3>
        <div className="cards flex-row-center">
          {imgSrcUrls.map((url) => (
            <div className="card card-default" key={url}>
              <div className="card-img-container">
                <img src={url} className="card-img" alt="cakes" />
              </div>
              <div className="card-header">Cakes</div>
              <div className="card-title">Bring on the cake!</div>
              <div className="card-buttons">
                <Link
                  className="card-button btn btn-primary no-link-decoration"
                  to="/rules"
                >
                  PLAY NOW
                </Link>
                <FontAwesomeIcon icon="share" className="card-icon" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export { Home };
