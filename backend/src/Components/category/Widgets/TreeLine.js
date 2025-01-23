import React from "react";
import { useRouter } from "next/navigation";
import Options from "../../Table/Options";
import { RiArrowDownSLine } from "react-icons/ri";

const TreeLine = ({ data, level, active, setActive, type, mutate, loading }) => {
  const router = useRouter();

  if (!data) return null;

  return (
    <ul>
      {data.map((item, i) => {
        const hasSubcategories = item.subcategories && item.subcategories.length > 0;
        
        return (
          <li key={i} className={hasSubcategories ? "inside-ul" : ""} style={{ color: router?.query?.updateId == item.id ? "#0da487" : "" }}>
            <div
              className={`${item.status == 0 ? "disabled" : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                if (hasSubcategories) {
                  let temp = active;
                  active.includes(item.id) ? temp.splice(active.indexOf(item.id), 1) : (temp = [...active, item.id]);
                  setActive([...temp]);
                }
              }}
            >
              {hasSubcategories && <RiArrowDownSLine />} {/* Render arrow only if there are subcategories */}
              {item.name}
              <div className="tree-options">
                <Options fullObj={item} mutate={mutate} type={type} loading={loading} keyInPermission={"category"} />
              </div>
            </div>
            {hasSubcategories && (
              <div className={active.includes(item.id) ? "d-block" : "d-none"}>
                <TreeLine data={item.subcategories} level={level + 1} active={active} setActive={setActive} mutate={mutate} type={type} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TreeLine;
