import Btn from "@/Elements/Buttons/Btn";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiFilter3Line } from "react-icons/ri";
import { Form, Input, Label } from "reactstrap";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import CalenderFilter from "./CalenderFilter";
import MultipleFilter from "./MultipleFilter";
import TableDeleteOption from "./TableDeleteOption";
import TableDuplicateOption from "./TableDuplicateOption";

const TableTop = (props) => {
  const { differentFilter, setPaginate, showFilterDifferentPlace, setSearch, paginate, url, isCheck, setIsCheck, isReplicate, refetch, dateRange, date, setDate, filterHeader, keyInPermission, advanceFilter } = props;
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"], keyInPermission ? keyInPermission : "");
  const { t } = useTranslation("common");
  const [input, setInput] = useState();
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(true);
  const [text, setText] = useState("");
  const [tc, setTc] = useState(null);
  useEffect(() => {
    setInput(paginate);
  }, [paginate]);

  const onChange = (text) => {
    if (tc) clearTimeout(tc);
    setTc(setTimeout(() => setSearch(text), 1000));
  };
  return (
    <>
      <div className="show-box">
        {filterHeader?.noPageDrop !== true && (
          <div className="me-auto">
            <Form
              className="entries-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Label>
                {t("Show")}:
                <select className="form-control" onChange={(e) => setPaginate(e.target.value)}>
                  <option>15</option> <option>25</option> <option>50</option> <option>100</option>
                </select>
              </Label>
              <span>{t("Itemsperpage")}</span>
              {destroy && isCheck?.length > 0 && <TableDeleteOption url={url} setIsCheck={setIsCheck} isCheck={isCheck} />}
              {edit && isCheck?.length > 0 && isReplicate && <TableDuplicateOption isReplicate={isReplicate} url={url} isCheck={isCheck} setIsCheck={setIsCheck} refetch={refetch} />}
            </Form>
          </div>
        )}
        {dateRange && <CalenderFilter date={date} setDate={setDate} />}
        <div className="d-flex align-items-center gap-2">
          {filterHeader?.noSearch !== true && (
            <div className="role-search">
              <Label htmlFor="role-search" className="form-label">
                {" "}
                {t("Search")}:
              </Label>

              <Input
                type="search"
                className="form-control"
                id="role-search"
                value={text}
                onChange={(e) => {
                  onChange(e.target.value);
                  setText(e.target.value);
                }}
              />
            </div>
          )}
          {advanceFilter && (
            <div className="top-panel-selection">
              <Btn className="align-items-center btn d-flex h-100 btn-light-bg fs-5 px-3 py-1" onClick={() => setShowAdvanceFilter((prev) => !prev)}>
                <RiFilter3Line />
              </Btn>
            </div>
          )}
        </div>
        {showFilterDifferentPlace && filterHeader?.customFilter}
      </div>
      {differentFilter && differentFilter}
      {advanceFilter && showAdvanceFilter ? <MultipleFilter showAdvanceFilter={showAdvanceFilter} advanceFilter={advanceFilter} /> : null}
    </>
  );
};

export default TableTop;
