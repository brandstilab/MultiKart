import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import SellerServiceBox from "./SellerServiceBox";

const SellerService = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  return (
    <WrapperComponent classes={{ sectionClass: "service section-b-space pt-0", fluidClass: "container", row: "partition4" }} customCol={true}>
      <SellerServiceBox data={themeOption?.seller?.services?.service_1} />
      <SellerServiceBox data={themeOption?.seller?.services?.service_2} />
      <SellerServiceBox data={themeOption?.seller?.services?.service_3} />
      <SellerServiceBox data={themeOption?.seller?.services?.service_4} />
    </WrapperComponent>
  );
};

export default SellerService;
