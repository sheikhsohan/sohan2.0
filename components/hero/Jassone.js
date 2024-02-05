import useVanta from "@/utility/useVanta";

const Jassone = ({ activeMenu }) => {
  const myRefDiv = useVanta();
  return (
    <div
      className={`iknow_tm_animate_section ${
        activeMenu == "home"
          ? "iknow_tm_animate_section animated zoomIn active"
          : "iknow_tm_animate_section active zoomOut hidden animated"
      }`}
      id="home"
    >
      <div className="iknow_tm_hero_extra">
        <div className="background">
          <div className="image" ref={myRefDiv} />
          <div className="overlay" />
        </div>
        <div className="hero_content">
          <div className="left">
            <span className="hello">Hello,I'm</span>
            <h3 className="name">Hadiuzzaman (Sohan)</h3>
            <p className="text">
              A passionate Web Designer and Web Developer based In Khulna, Bangladesh
            </p>
            <div className="iknow_tm_button yellow transition_link">
              <a href="#contact">Work with me</a>
            </div>
          </div>
          <div className="right">
            <div className="image parallax" data-relative-input="true">
              <img src="/img/thumbs/47-60.jpg" alt="" />
              <div
                className="main layer"
                data-depth="0.05"
                data-img-url="/img/hero/sohan.jpg"
              />
              <span className="box layer" data-depth="0.1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jassone;
