"use client";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { Button, Modal, ModalBody } from "reactstrap";

const ExitModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { themeOption } = useContext(ThemeOptionContext);

  useEffect(() => {
    const handleMouseOut = (event) => {
      if (event.clientY <= 0) {
        openModal();
        window.removeEventListener("mouseout", handleMouseOut);
      }
    };

    const modalShown = Cookies.get("exit");

    if (!modalShown) {
      window.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const openModal = () => {
    setShowModal(true);
    Cookies.set("exit", "true");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Modal isOpen={showModal} toggle={() => setShowModal(false)} centered className="exit-modal auth-modal modal-md theme-modal-2 fade show">
      <div className="modal-dialog modal-dialog-centered">
        <ModalBody>
          <div className="right-content">
            <div className="auth-title">
              <h2>{themeOption?.popup?.exit.title}</h2>
              <h4>{themeOption?.popup?.exit.sub_title}</h4>
              <h5>{themeOption?.popup?.exit.description}</h5>
            </div>
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default ExitModal;
