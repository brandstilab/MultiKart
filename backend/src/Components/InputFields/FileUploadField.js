import { mimeImageMapping } from "@/Data/MimeImageType";
import { ErrorMessage } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseLine } from "react-icons/ri";
import { Input } from "reactstrap";
import InputWrapper from "../../Utils/HOC/InputWrapper";
import { handleModifier } from "../../Utils/Validation/ModifiedErrorMessage";
import AttachmentModal from "../Attachment/Widgets/AttechmentModal";

const FileUploadField = ({ values, updateId, setFieldValue, errors, multiple, loading, showImage, paramsProps, ...props }) => {
  const storeImageObject = props.name.split("_id")[0];
  const { t } = useTranslation("common");
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);
  useEffect(() => {
    if (values) {
      multiple ? setSelectedImage(values[storeImageObject]) : values[storeImageObject] ? setSelectedImage(loading ? null : [values[storeImageObject]]) : values[props.name] ? setSelectedImage([values[props.name]]) : setSelectedImage([]);
    }
  }, [values[storeImageObject], loading]);
  useEffect(() => {
    if (props?.uniquename) {
      if (Array.isArray(props?.uniquename)) {
        const onlyIds = props?.uniquename?.map((data) => data.id);
        setSelectedImage(loading ? null : props?.uniquename);
        setFieldValue(props?.name, onlyIds);
      } else {
        setSelectedImage(loading ? null : [props?.uniquename]);
        setFieldValue(props?.name, props?.uniquename?.id);
      }
    }
  }, [props?.uniquename, loading, showImage]);

  const removeImage = (result) => {
    if (props.name) {
      if (multiple) {
        let updatedImage = selectedImage.filter((elem) => elem.id !== result.id);
        setSelectedImage(updatedImage);
        setFieldValue(storeImageObject, updatedImage);
      } else {
        setFieldValue(props?.name, Array.isArray(values[props.name]) ? values[props.name].filter((el) => el !== result.id) : null);
        setSelectedImage(selectedImage.filter((elem) => elem.id !== result.id));
        setFieldValue(storeImageObject, "");
      }
    }
  };

  const getMimeTypeImage = (result) => {
    return mimeImageMapping[result?.mime_type] ?? result?.original_url?.split("/")[1] == "storage" ? result?.original_url : result?.original_url;
  };
  const ImageShow = () => {
    return (
      <>
        {selectedImage?.length > 0 &&
          selectedImage?.map((result, i) => (
            <li key={i}>
              <div className="media-img-box">
                <Image src={getMimeTypeImage(result)} className="img-fluid" alt="ratio image" height={130} width={130} />
                <p className="remove-icon">
                  <RiCloseLine onClick={() => removeImage(result)} />
                </p>
              </div>
              <h6>{result?.file_name}</h6>
            </li>
          ))}
      </>
    );
  };
  return (
    <>
      <ul className={`image-select-list`}>
        <li className="choosefile-input">
          <Input
            {...props}
            onClick={(event) => {
              event.preventDefault();
              setModal(props.id);
            }}
          />
          <label htmlFor={props.id}>
            <Image height={40} width={40} src={"/assets/images/add-image.png"} className="img-fluid" alt="" />
          </label>
        </li>

        <ImageShow />

        <AttachmentModal paramsProps={paramsProps} modal={modal == props.id} name={props.name} multiple={multiple} values={values} setModal={setModal} setFieldValue={setFieldValue} setSelectedImage={setSelectedImage} selectedImage={selectedImage} showImage={showImage} redirectToTabs={true} />
      </ul>
      <p className="help-text">{props?.helpertext}</p>
      {errors?.[props?.name] ? (
        <ErrorMessage
          name={props.name}
          render={(msg) => (
            <div className="invalid-feedback d-block">
              {t(handleModifier(storeImageObject).split(" ").join(""))} {t("IsRequired")}
            </div>
          )}
        />
      ) : null}
    </>
  );
};

export default InputWrapper(FileUploadField);
