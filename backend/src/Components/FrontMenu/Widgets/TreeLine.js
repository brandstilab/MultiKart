import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import dragula from "react-dragula";
import { RiArrowDownSLine } from "react-icons/ri";
import Options from "../../Table/Options";

const TreeLine = ({ data, onChange, parentId, level, active, setActive, type, mutate, loading }) => {
  const router = useRouter();
  const containerRef = useRef(null);

  const updateChildrenOrder = (children) => {
    return children.map((child) => {
      const updatedChild = { ...child };
      if (updatedChild.children) {
        updatedChild.children = updateChildrenOrder(child.children);
      }
      return updatedChild;
    });
  };

  const handleChange = (newValue) => {
    onChange(newValue);
  };

  useEffect(() => {
    if (containerRef.current) {
      const drake = dragula([containerRef.current]);
      drake.on("drop", (el, target, source, sibling) => {
        const newOrder = Array.from(containerRef.current.children).map((child) => {
          return parseInt(child.dataset.itemId);
        });

        const updatedData = newOrder.map((id) => data.find((item) => item.id === id));
        if (updatedData) {
          onChange(updatedData);
        }
      });
      return () => {
        drake.destroy();
      };
    }
  }, []);

  if (!data) return null;

  return (
    <ul ref={containerRef}>
      {data.map((item, i) => {
        const hasChildren = item.child && item.child.length > 0;
        return (
          <li key={i} data-item-id={item?.id} className={hasChildren ? "inside-ul" : ""} style={{ color: router?.query?.updateId == item.id ? "#0da487" : "" }}>
            <div
              className={` ${item.status == 0 ? "disabled" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                if (hasChildren) {
                  let temp = active;
                  active.includes(item.id) ? temp.splice(active.indexOf(item.id), 1) : (temp = [...active, item.id]);
                  setActive([...temp]);
                }
              }}
            >
              {hasChildren && <RiArrowDownSLine className="file-icon ms-0" />}
              {item.title}
              <div className="tree-options">
                <Options fullObj={item} mutate={mutate} type={type} loading={loading} keyInPermission={"category"} />
              </div>
              <i className="tree-icon file-icon"></i>
            </div>
            {hasChildren && (
              <div className={active.includes(item.id) ? "d-block" : "d-none"}>
                <TreeLine onChange={handleChange} parentId={item.id} data={item.child} level={level + 1} active={active} setActive={setActive} mutate={mutate} type={type} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TreeLine;
