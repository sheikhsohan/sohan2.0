"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import ModalLayout from "./ModalLayout";
const ServicePopup = () => {
  const { setServiceModal, serviceModal } = useContext(context);
  return (
    <ModalLayout nullValue={setServiceModal}>
      <div className="service_informations">
        <div className="image">
          <img src="/img/thumbs/4-2.jpg" alt="img" />
          <div className="main" data-img-url={serviceModal.img} />
        </div>
        <div className="title">
          <h3>{serviceModal.title}</h3>
        </div>
        <div className="description">
          <p>
            iKnow is a leading web design agency with an award-winning design
            team that creates innovative, effective websites that capture your
            brand, improve your conversion rates, and maximize your revenue to
            help grow your business and achieve your goals.
          </p>
        </div>
      </div>
    </ModalLayout>
  );
};
export default ServicePopup;
