import { ErrorMessage } from "formik";
import { RiCloseLine } from "react-icons/ri";
import { handleModifier } from "../../Utils/Validation/ModifiedErrorMessage";
import { useTranslation } from "react-i18next";

const MultiSelectInput = ({ values, name, selectedItems, setIsComponentVisible, setFieldValue, setSelectedItems, errors, getValuesKey, initialTittle }) => {
  const { t } = useTranslation("common");
  const RemoveSelectedItem = (id, item) => {
    let temp = values[name];
    if (temp.length > 0) {
      if (Array.isArray(temp)) {
        temp?.splice(temp.indexOf(id), 1);
        setFieldValue(name, temp);
      } else {
        setFieldValue(name, item[getValuesKey] == values[name] ? undefined : item[getValuesKey]);
      }
    } else if (temp == id) {
      setFieldValue(name, undefined);
    }
  };

  return (
    <>
      <div className={`bootstrap-tagsinput form-select`} onClick={() => setIsComponentVisible((p) => p !== name && name)}>
        {(Array.isArray(values[name]) && values[name].length > 0 && selectedItems?.length > 0) || (!Array.isArray(values[name]) && values[name]) ? (
          selectedItems?.map((item, i) => (
            <span className="tag label label-info" key={i}>
              {item.name || item.title}
              <a>
                <RiCloseLine
                  onClick={(e) => {
                    e.stopPropagation();
                    RemoveSelectedItem(item[getValuesKey], item);
                    setSelectedItems((p) => p.filter((elem) => elem[getValuesKey] !== item[getValuesKey]));
                    if (Array.isArray(values[name])) {
                      setFieldValue(
                        name,
                        values[name]?.filter((elem) => elem[getValuesKey] !== item[getValuesKey])
                      );
                    } else {
                      setFieldValue(name, undefined);
                    }
                  }}
                />
              </a>
            </span>
          ))
        ) : (
          <span>{t(initialTittle ? initialTittle : "Select")}</span>
        )}
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div className="invalid-feedback d-block">
            {t(handleModifier(name))} {t("IsRequired")}
          </div>
        )}
      />
    </>
  );
};

export default MultiSelectInput;
