import request from "@/Utils/AxiosUtils";
import { sortMenu } from "@/Utils/AxiosUtils/API";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "reactstrap";
import NoCategoryImage from "../../../../public/assets/svg/no-category.png";
import NoDataFound from "../../CommonComponent/NoDataFound";
import TreeLine from "./TreeLine";

const SearchCategory = ({ data, setActive, active, setSearch, search, type, mutate, deleteLoading }) => {
  const [menu, setMenu] = useState(data);
  const router = useRouter();
  const { t } = useTranslation("common");
  const [tc, setTc] = useState(null);


  // Debouncing
  const onChange = (text) => {
    if (tc) clearTimeout(tc);
    setTc(setTimeout(() => setSearch(text), 1000));
  };

  // Save changes
  const saveChanges = () => {
    if (menu) {
// Put your logic here
    }
  };

  // Recursive function to filter and sort JSON
  const filterJson = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map((item, index) => {
        item["sort"] = index;
        return filterJson(item);
      });
    } else if (typeof obj === "object") {
      const newObj = {};
      newObj["id"] = obj["id"];
      newObj["parent_id"] = obj["parent_id"];
      newObj["sort"] = obj["sort"];
      if (Array.isArray(obj["child"])) {
        newObj["child"] = filterJson(obj["child"]);
      }
      return newObj;
    } else {
      return obj;
    }
  };

  // Handle value change
  const handleValueChange = (newValue) => {
    data = replaceChild(data, newValue);
    setMenu(data);
  };
  function findParentId(newChildArray) {
    return newChildArray[0].parent_id;
  }
  function replaceChild(mainArray, newChildArray) {
    const parentId = findParentId(newChildArray);
    if (parentId == null) return newChildArray;
    function replaceChildRecursively(array) {
      return array.map((item) => {
        if (Array.isArray(item.child)) {
          if (item.id === parentId) {
            return { ...item, child: newChildArray };
          } else {
            return { ...item, child: replaceChildRecursively(item.child) };
          }
        }
        return item;
      });
    }
    return replaceChildRecursively(mainArray);
  }

  return (
    <div className="theme-tree-box">
      <Input className="form-control" placeholder={t("SearchNode")} onChange={(e) => onChange(e.target.value)} />
      {data?.length > 0 ? (
        <ul className="tree-main-ul">
          <li>
            <div>
              <i className="tree-icon folder-icon cursor" role="presentation"></i>
              <span> {t("Menu")}</span>
              <a className="ms-auto fw-semibold" onClick={saveChanges}>
                Save Changes
              </a>
            </div>
            <TreeLine data={data || []} onChange={handleValueChange} parentId={data ? data.id : null} level={0} setActive={setActive} mutate={mutate} active={active} search={search} type={type} loading={deleteLoading} />
          </li>
        </ul>
      ) : (
        <NoDataFound customImage={NoCategoryImage} />
      )}
    </div>
  );
};

export default SearchCategory;
