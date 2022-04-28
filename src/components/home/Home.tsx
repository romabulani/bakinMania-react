import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCategory, useQuiz } from "contexts";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./home.css";

function Home() {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const { quizDispatch } = useQuiz();
  const { categories } = useCategory();
  const scrollToCategories = () => {
    if (scrollRef && scrollRef.current)
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  useEffect(() => {
    quizDispatch({ type: "RESET_ANSWERS" });
    // eslint-disable-next-line
  }, []);

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
          <button className="btn btn-primary" onClick={scrollToCategories}>
            EXPLORE
          </button>
        </div>
      </div>
      <main className="container-main flex-column-center">
        <h3 className="text-center heading3">Quiz Categories</h3>
        <div className="cards flex-row-center" ref={scrollRef}>
          {categories.map((category) => (
            <div className="card card-default" key={category._id}>
              <div className="card-img-container">
                <img
                  src={category.img.src}
                  className="card-img"
                  alt={category.img.altText}
                />
              </div>
              <div className="card-header">{category.categoryName}</div>
              <div className="card-title">{category.description}</div>
              <div className="card-buttons">
                <Link
                  className="card-button btn btn-primary no-link-decoration"
                  to={`/quiz/${category._id}`}
                >
                  PLAY NOW
                </Link>
                <FontAwesomeIcon
                  icon="share"
                  className="card-icon icon-style"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${window.location.href}quiz/${category._id}`
                    );
                    toast.info("Link Copied. Start sharing!");
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export { Home };
