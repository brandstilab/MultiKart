"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useContext } from "react";
import { Col } from "reactstrap";
import ContactDetails from "./ContactDeatails";
import ContactLeftSideBox from "./ContactLeftSideBox";
import ContactUsForm from "./ContactUsForm";
import MapSection from "./MapSection";

const ContactUsContent = () => {
  const { isLoading } = useContext(ThemeOptionContext);

  if (isLoading) return <Loader />;
  return (
    <>
      <Breadcrumbs title={"ContactUs"} subNavigation={[{ name: "ContactUs" }]} />
      <WrapperComponent classes={{ sectionClass: "contact-page section-b-space", row: "g-sm-4 g-3", fluidClass: "container" }} customCol={true}>
        <Col lg="5">
          <ContactDetails />
        </Col>
        <Col lg="7">
          <ContactUsForm />
        </Col>
        <ContactLeftSideBox />
      </WrapperComponent>
      <WrapperComponent classes={{ sectionClass: "contact-page pt-0 overflow-hidden", fluidClass: "container-fluid p-0" }}>
        <MapSection />
      </WrapperComponent>
    </>
  );
};

export default ContactUsContent;
