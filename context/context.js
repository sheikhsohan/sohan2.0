"use client";
const type = {
  ANIMATION: "ANIMATION",
  MODAL: "MODAL",
  EXPERIENCEMODAL: "EXPERIENCEMODAL",
  SERVICEMODAL: "SERVICEMODAL",
  PORTFOLIOMODAL: "PORTFOLIOMODAL",
  BLOGMODAL: "BLOGMODAL",
  TESTIMONIALiTEMS: "TESTIMONIALiTEMS",
  ABOUTDATA: "ABOUTDATA",
};
const {
  MODAL,
  SERVICEMODAL,
  PORTFOLIOMODAL,
  BLOGMODAL,
  TESTIMONIALiTEMS,
  ABOUTDATA,
} = type;

import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Service from "@/components/Service";
import { createContext, useCallback, useReducer } from "react";

import dynamic from "next/dynamic";
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});

const context = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    case PORTFOLIOMODAL:
      return {
        ...state,
        portfolioModal: payload,
      };
    case BLOGMODAL:
      return {
        ...state,
        blogModal: payload,
      };
    case TESTIMONIALiTEMS:
      return {
        ...state,
        testimonialItems: payload,
      };
    case ABOUTDATA:
      return {
        ...state,
        aboutData: payload,
      };
    default:
      return state;
  }
};

const state = (props) => {
  const initialState = {
    modal: false,
    serviceModal: null,
    portfolioModal: null,
    blogModal: null,
    testimonialItems: 2,
    pageContent: [
      { id: 1, sectionId: "about", component: <AboutMe /> },
      { id: 2, sectionId: "resume", component: <Resume /> },
      { id: 3, sectionId: "portfolio", component: <Portfolio /> },
      { id: 4, sectionId: "service", component: <Service /> },
      // { id: 6, sectionId: "news", component: <Blog /> },
      { id: 7, sectionId: "contact", component: <Contact /> },
    ],
    menus: [
      { id: 0, href: "home", title: "Home", icon: "squares" },
      { id: 1, href: "about", title: "About Me", icon: "archive" },
      { id: 2, href: "resume", title: "Resume", icon: "contacs" },
      { id: 3, href: "portfolio", title: "Portfolio", icon: "briefcase" },
      { id: 4, href: "service", title: "Service", icon: "gear" },
      // { id: 6, href: "news", title: "Blog", icon: "writing" },
      { id: 7, href: "contact", title: "Contact", icon: "letter" },
    ],
    aboutData: {
      name: "Hadiuzzaman (Sohan)",
      img: "/img/hero/sohan.jpg",
      birthday: "April 2, 2001",
      nationality: "Bangladeshi",
      email: "princesohan751@gmail.com",
      phone: "+880 18596 50372",
      bio: "! My name is Hadiuzzaman (Sohan). I am Web designer and Developer, and I'm very passionate and dedicated to my work. With 2 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.",
      address: "Gozendropur, Dumuria, Khulna",
      title: "World leading Web Designner & Developer",
      subTitle:
        "A passionate UI/UX Designer and Web Developer based In NYC, USA",
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const modalToggle = useCallback((value) => {
    dispatch({
      type: MODAL,
      payload: value,
    });
  }, []);

  const setServiceModal = useCallback((value) => {
    dispatch({
      type: SERVICEMODAL,
      payload: value,
    });
  }, []);
  const setPortfolioModal = useCallback((value) => {
    dispatch({
      type: PORTFOLIOMODAL,
      payload: value,
    });
  }, []);
  const setBlogModal = useCallback((value) => {
    dispatch({
      type: BLOGMODAL,
      payload: value,
    });
  }, []);

  const setTestimonialItems = useCallback((value) => {
    dispatch({
      type: TESTIMONIALiTEMS,
      payload: value,
    });
  }, []);

  const setAboutData = useCallback((value) => {
    let aboutData = {
      name: value && value.name ? value.name : state.aboutData.name,
      img: value && value.img ? value.img : state.aboutData.img,
      address: value && value.address ? value.address : state.aboutData.address,
      bio: value && value.bio ? value.bio : state.aboutData.bio,
      birthday:
        value && value.birthday ? value.birthday : state.aboutData.birthday,
      email: value && value.email ? value.email : state.aboutData.email,
      nationality:
        value && value.nationality
          ? value.nationality
          : state.aboutData.nationality,
      phone: value && value.phone ? value.phone : state.aboutData.phone,
      title: value && value.title ? value.title : state.aboutData.title,
    };
    dispatch({
      type: ABOUTDATA,
      payload: value ? aboutData : state.aboutData,
    });
  }, []);

  const {
    modal,
    serviceModal,
    portfolioModal,
    blogModal,
    pageContent,
    testimonialItems,
    menus,
    aboutData,
  } = state;
  return (
    <context.Provider
      value={{
        modal,
        modalToggle,
        serviceModal,
        setServiceModal,
        portfolioModal,
        setPortfolioModal,
        blogModal,
        setBlogModal,
        pageContent,
        setTestimonialItems,
        testimonialItems,
        menus,
        setAboutData,
        aboutData,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default state;

export { context };
