import Image from "next/image";
import { colors, megaMenuLayout } from "@/Data/MenuData";
import { Input, Label } from "reactstrap";
import InputWrapperComponent from "../InputFields/InputWrapperComponent";

const BadgeColor = ({ setFieldValue, values }) => {
  const handleClick = (val) => {
    setFieldValue("badge_color", val);
  };
  return (
    <InputWrapperComponent name={"HeaderOption"}>
      <ul className="badge-color-list">
        {colors.map((elem, i) => (
          <li key={i}>
            <div className={`selection-box ${elem}`}>
              <Input name="badge_color" type="radio" id={elem} checked={values["badge_color"] == elem ? true : false} onChange={() => handleClick(elem)}/>
              <Label className="w-100" htmlFor={elem} />
            </div>
          </li>
        ))}
      </ul>
    </InputWrapperComponent>
  );
};

export default BadgeColor;
