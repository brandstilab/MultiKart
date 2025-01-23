import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext, useEffect, useState } from "react";

const TapTop = () => {
  const [tapTopStyle, setTapTopStyle] = useState("none");
  const { themeOption } = useContext(ThemeOptionContext);

  const executeScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setTapTopStyle("tap-show");
    } else {
      setTapTopStyle("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {themeOption?.general?.back_to_top_enable ? (
        <div className={`tap-top ${tapTopStyle}`}>
          <div onClick={() => executeScroll()}>
            <i className="ri-arrow-up-double-line" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TapTop;
