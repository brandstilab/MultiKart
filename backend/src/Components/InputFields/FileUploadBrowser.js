import Image from "next/image";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseLine } from "react-icons/ri";
import { Input, Row } from "reactstrap";
import { ToastNotification } from "../../Utils/CustomFunctions/ToastNotification";

const FileUploadBrowser = ({ values, setFieldValue, dispatch, ...props }) => {
    
    const { t } = useTranslation("common");
    useEffect(() => {
        dispatch && dispatch({ type: "SETBROWSERIMAGE", payload: values })
    }, [values])
    function addFileFromFileList(newFiles) {
        const dt = new DataTransfer();
        if (!(values[props.name]?.[0] instanceof File)) return newFiles;
        const files = values[props.name] || [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            file && dt.items.add(file);
        }
        for (let i = 0; i < newFiles.length; i++) {
            const file = newFiles[i];
            file && dt.items.add(file);
        }
        return dt.files;
    }
    function removeFileFromFileList(index) {
        const dt = new DataTransfer();
        const files = values[props.name];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (index !== i) dt.items.add(file);
        }
        return dt.files;
    }
    function ImageShow(fileDetail) {
        return fileDetail ? (
            props.multiple ? (
                [...fileDetail]?.map((elem, i) => (
                    <div key={i}>
                        <div className="img-box">
                            {elem?.type == 'image/png' ? <Image src={elem instanceof File ? URL.createObjectURL(elem) : elem} className="img-fluid" width={100} height={100} alt="image" /> :
                                <div><h4>{elem?.name}</h4><h4>{elem?.type}</h4></div>}
                            {elem instanceof File && (
                                <div className="remove-img">
                                    <RiCloseLine
                                        className="remove-icon"
                                        onClick={() => {
                                            setFieldValue(props.name, removeFileFromFileList(i));
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <li>
                    <Image src={fileDetail instanceof File ? URL.createObjectURL(fileDetail) : fileDetail} className="img-fluid" width={100} height={100} alt="image" />
                    {fileDetail instanceof File && (
                        <p>
                            <RiCloseLine
                                className="remove-icon"
                                onClick={() => {
                                    setFieldValue(props.name, "");
                                }}
                            />
                        </p>
                    )}
                </li>
            )
        ) : null;
    }
    const onSelect = (event) => {
        if (event.currentTarget.files.length > 5) {
            return ToastNotification('error', `You've reached 5 file maximum.`)
        } else {
            setFieldValue(props.name, props.multiple ? addFileFromFileList(event.currentTarget.files) : event.currentTarget.files, props.index);
        }
    }
    const handleClick = event => {
        const { target = {} } = event || {};
        target.value = "";
      };
    
    return (
        <>
            <a href="#javascript" className="font-blue browse-file">
                {t("browsefiles")}
                <Input  {...props} onChange={(event) => onSelect(event)} onClick={handleClick}  />
            </a>
            <div className={`overflow-section ${!values[props?.name]?.length > 0 ? 'd-none' : ''}`}>
                <Row xl={5} xxl={6} lg={4} md={3} xs={2} className="image-selection-list g-sm-4 g-3">
                    {values?.[props.name] && ImageShow(values?.[props.name])}
                </Row>
            </div>
        </>
    );
};
export default FileUploadBrowser;