import Image from "next/image";
import { megaMenuLayout } from "@/Data/MenuData";
import { Input, Label } from "reactstrap";
import InputWrapperComponent from "../InputFields/InputWrapperComponent";

const FrontMenuRadio = ({ setFieldValue, values }) => {
  const handleClick = (val) => {
    setFieldValue("mega_menu_type", val.value);
  };
  return (
    <InputWrapperComponent name={"HeaderOption"} classes="d-flex">
      <ul className="mega-menu-list">
        {megaMenuLayout.map((elem, i) => (
          <li key={i}>
            <div className="selection-box">
              <Input name="mega_menu_type" type="radio" id={elem.value} checked={values["mega_menu_type"] == elem.value ? true : false} onChange={() => handleClick(elem)} />
              <Label className="w-100" htmlFor={elem.value}>
                <div className="circle"></div>
                <div>
                  <Image src={elem.image} className="img-fluid " alt={elem.value} width={1000} height={4000} />
                  <p className="mt-1">{elem.label}</p>
                </div>
              </Label>
            </div>
          </li>
        ))}
      </ul>
    </InputWrapperComponent>
  );
};

export default FrontMenuRadio;
