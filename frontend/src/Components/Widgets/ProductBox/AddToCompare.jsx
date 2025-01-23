import CompareContext from "@/Context/CompareContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { Href } from "@/Utils/Constants";
import { ToastNotification } from "@/Utils/CustomFunctions/ToastNotification";
import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { RiRefreshLine } from "react-icons/ri";

const AddToCompare = ({ productObj, customClass }) => {
  const [attribute, price, rating, sortBy, field, layout, category, checkLogin] = useCustomSearchParams(["attribute", "price", "rating", "sortBy", "field", "layout", "category", "checkLogin"]);
  const { compareState, setCompareState, setOpenCompareSidebar, refetch } = useContext(CompareContext);
  const { setOpenAuthModal } = useContext(ThemeOptionContext);
  const cookieUAT = Cookies.get("uat");
  const router = useRouter();

  const addToCompare = (productObj) => {
    if (!cookieUAT) {
      const temp = ["/theme/paris"];
      const queryParams = new URLSearchParams({ ...attribute, ...price, ...sortBy, ...field, ...rating, ...layout, ...category, checkLogin: temp }).toString();
      setOpenAuthModal(true);
      ToastNotification("error", "Unauthenticated");
    } else {
      // Put your logic here
    }
  };

  return (
    <>
      {customClass ? (
        <a href={Href} className={customClass ?? ""} onClick={() => addToCompare(productObj)}>
          <RiRefreshLine />
        </a>
      ) : (
        <li title="Compare" onClick={() => addToCompare(productObj)}>
          <a>
            <RiRefreshLine />
          </a>
        </li>
      )}
    </>
  );
};

export default AddToCompare;
