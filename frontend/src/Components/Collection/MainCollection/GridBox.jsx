import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { ImagePath } from "@/Utils/Constants";
import Image from "next/image";
import { useContext } from "react";

const GridBox = ({ grid, setGrid }) => {
  const { themeOption, setVariant, variant } = useContext(ThemeOptionContext);

  return (
    <div className="collection-grid-view">
      <ul>
        <li className={`${grid == 2 ? "active" : ""}`} onClick={() => setGrid(2)}>
          <Image src={`${ImagePath}/icon/2.png`} alt="grid image" height={16} width={11} className="product-2-layout-view" />
        </li>
        <li className={`${grid == 3 ? "active" : ""}`} onClick={() => setGrid(3)}>
          <Image src={`${ImagePath}/icon/3.png`} alt="grid image" height={16} width={18} className="product-3-layout-view" />
        </li>
        <li className={` ${grid == 4 ? "active" : ""}`} onClick={() => setGrid(4)}>
          <Image src={`${ImagePath}/icon/4.png`} className="product-4-layout-view" alt="grid image" height={16} width={25} />
        </li>
        <li className={` ${grid == "list" ? "active" : ""}`} onClick={() =>  {setGrid("list"),setVariant('product_box_eleven')}}>
          <Image src={`${ImagePath}/icon/list.png`} className="product-6-layout-view" alt="grid image" height={12} width={18} />
        </li>
      </ul>
    </div>
  );
};

export default GridBox;
