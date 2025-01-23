import Image from "next/image";
import { useContext } from "react";
import SettingContext from "../../../Helper/SettingContext";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";

const LogoWrapper = ({ setSidebarOpen }) => {
  const { state } = useContext(SettingContext);
  return (
    <div className="logo-wrapper logo-wrapper-center">
      <Logo />
      <Image className="img-fluid logo-sm w-auto" src={state?.setTinyLogo?.original_url ? state?.setTinyLogo?.original_url : ""} alt="Tiny Logo" width={150} height={29} />
      <ToggleButton setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default LogoWrapper;
