import { context } from "@/context/context";
import { useContext } from "react";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      icon: "web",
      desc: "Dive into the world of captivating web design with my personalized services. I specialize in...",
      img: "img/service/1.jpg",
    },
    {
      id: 2,
      title: "Web Development",
      icon: "squares",
      desc: "Transform your vision into a reality with my expert web development services...",
      img: "img/service/2.jpg",
    },
    {
      id: 3,
      title: "WordPress",
      icon: "wordpress",
      desc: "Unleash the full potential of your WordPress site with my specialized development...",
      img: "img/service/3.jpg",
    },
    {
      id: 4,
      title: "Graphics Design",
      icon: "squares",
      desc: "Elevate your brand's visual identity with my bespoke graphics design services...",
      img: "img/service/4.jpg",
    },
    {
      id: 5,
      title: "Case Study",
      icon: "briefcase",
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/5.jpg",
    },
    {
      id: 6,
      title: "Experience Design",
      icon: "writing_2",
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/6.jpg",
    },
  ];
  const { modalToggle, setServiceModal } = useContext(context);
  return (
    <div className="iknow_tm_services">
      <div className="iknow_tm_main_title">
        <span>Service</span>
        <h3>Never compromise with quality</h3>
      </div>
      <div className="service_list">
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <div className="list_inner">
                <span className="icon">
                  <img
                    className="svg"
                    src={`/img/svg/${service.icon}.svg`}
                    alt="image"
                  />
                </span>
                <h3 className="title">{service.title}</h3>
                <p className="text">{service.desc}</p>
                <a
                  className="iknow_tm_full_link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Service;
