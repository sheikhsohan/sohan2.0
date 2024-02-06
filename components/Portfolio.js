import { context } from "@/context/context";
import { useContext, useState } from "react";
import DesignSection from "./DesignProjects";

const Portfolio = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
  const [active, setActive] = useState("all");
  const activeLi = (value) => (active == value ? "current" : "");
  const [designFilterActive, setDesignFilterActive] = useState(false);
  // const activeContent = (value) => {
  //   return active === "all" || active === value ? "show" : "hidden";
  // };

  const activeContent = (value) => {
    if (active === "all" && (value === "wordpress" || value === "design")) {
      return "hidden";
    } else {
      return active === "all" || active === value ? "show" : "hidden";
    }
  };
  

  const handelClick = (value, e) => {
    e.preventDefault();
    if (value === "design") {
      // Toggle the design filter state
      setDesignFilterActive(!designFilterActive);
    }
    // First, set the "active" state to hide all items
    setActive("none");
    // Then, after a brief delay, set it to show all items
    setTimeout(() => {
      setActive(value);
    }, 0);
  };
  
  

  return (
    <div className={`iknow_tm_portfolio ${designFilterActive ? 'design-active' : ''}`}>
      <div className="iknow_tm_main_title">
        <span>Works</span>
        <h3>My works that I recently complete.</h3>
      </div>
      <div className="portfolio_filter">
        <ul>
          <li>
            <a
              href="#"
              className={activeLi("all")}
              onClick={(e) => handelClick("all", e)}
              data-filter="*"
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("bootstrap")}
              onClick={(e) => handelClick("bootstrap", e)}
              data-filter=".bootstrap"
            >
              Bootstrap 5
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("react")}
              onClick={(e) => handelClick("react", e)}
              data-filter=".react"
            >
              React
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("design")}
              onClick={(e) => handelClick("design", e)}
              data-filter=".design"
            >
              Graphics Design
            </a>
          </li>
          <li>
            <a
              href="#"
              className={("wordpress")}
              onClick={(e) => handelClick("wordpress", e)}
              data-filter=".wordpress"
            >
              WordPress
            </a>
          </li>
        </ul>
      </div>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          <li className={`react ${activeContent("react")}`}>
            <div className="list_inner">
              <div className="image">
                <img src="/img/thumbs/1-1.jpg" alt="image" />
                <div className="main" data-img-url="/img/project/modernstore.png" />
              </div>
              <div className="overlay" />
              <img
                className="svg"
                src="/img/svg/react.svg"
                alt="image"
              />
              <div className="details">
                <span>#React #NextJs #Sanity</span>
                <h3>Modern Ecommerce Store</h3>
              </div>
              <a
                className="iknow_tm_full_link"
                href="https://ecommercebyhadiuzzaman.vercel.app/" target="_blank"
              />
            </div>
          </li>
          <li className={`react ${activeContent("react")}`}>
            <div className="list_inner">
              <div className="image">
                <img src="/img/thumbs/1-1.jpg" alt="image" />
                <div className="main" data-img-url="/img/project/music.png" />
              </div>
              <div className="overlay" />
              <img
                className="svg"
                src="/img/svg/react.svg"
                alt="image"
              />
              <div className="details">
                <span>#React #NextJs #Tailwind</span>
                <h3>Music App</h3>
              </div>
              <a
                className="iknow_tm_full_link"
                href="https://musicapp-three.vercel.app/" target="_blank"
              />
            </div>
          </li>
          <li className={`bootstrap ${activeContent("bootstrap")}`}>
            <div className="list_inner">
              <div className="image">
                <img src="/img/thumbs/1-1.jpg" alt="image" />
                <div className="main" data-img-url="/img/project/agency.png" />
              </div>
              <div className="overlay" />
              <img
                className="svg"
                src="/img/svg/bootstrap.svg"
                alt="image"
              />
              <div className="details">
                <span>#Ajax #Bootstrap</span>
                <h3>Digital Agency</h3>
              </div>
              <a
                className="iknow_tm_full_link"
                href="https://digital-agenci.vercel.app/" target="_blank"
              />
            </div>
          </li>
          <li className={`wordpress ${activeContent("wordpress")}`}>
            <h3>Coming Soon...</h3>
          </li>
          <DesignSection activeContent={activeContent} />
        </ul>
      </div>
    </div>
  );
};
export default Portfolio;
