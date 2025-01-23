import { Form, Formik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiDownload2Line, RiUpload2Line, RiUploadCloud2Line } from "react-icons/ri";
import { DropdownItem, TabContent, TabPane } from "reactstrap";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import Btn from "../../Elements/Buttons/Btn";
import { YupObject, requiredSchema } from "../../Utils/Validation/ValidationSchemas";
import FileUploadBrowser from "../InputFields/FileUploadBrowser";

const ImportExport = ({ importExport, refetch, moduleName, exportButton, Dropdown }) => {
  const { t } = useTranslation("common");
  const [modal, setModal] = useState(false);

  const exportUser = () => {
    // Put Your Logic Here
  };

  return (
    <>
      {Dropdown ? (
        <>
          <button onClick={() => setModal(true)} className="dropdown-item">
            {t("Import")}
          </button>
          <DropdownItem onClick={exportUser}>{t("Export")}</DropdownItem>
        </>
      ) : (
        <>
          <a className="align-items-center btn btn-light-bg" onClick={() => setModal(true)}>
            <RiUpload2Line />
            {t("Import")}
          </a>
          {exportButton == true && (
            <a className="align-items-center btn btn-light-bg" onClick={() => exportUser()}>
              <RiDownload2Line />
              {t("Export")}
            </a>
          )}
        </>
      )}

      <ShowModal open={modal} setModal={setModal} modalAttr={{ className: "import-export-modal media-modal inset-media-modal modal-dialog modal-dialog-centered modal-xl" }} close={true} title={"InsertMedia"} noClass={true}>
        <TabContent>
          <Formik
            initialValues={{ [moduleName?.toLowerCase()]: "" }}
            validationSchema={YupObject({ [moduleName?.toLowerCase()]: requiredSchema })}
            onSubmit={(values, { resetForm }) => {
              let formData = new FormData();
              Object.values(values[moduleName.toLowerCase()]).forEach((el, i) => {
                formData.append(`${moduleName?.toLowerCase()}`, el);
              });
              setModal(false);
              u;
            }}
          >
            {({ values, setFieldValue, errors }) => (
              <Form className="theme-form theme-form-2 mega-form">
                <TabPane className={"fade active show"} id="select">
                  <div className="content-section drop-files-sec mb-2">
                    <div>
                      <RiUploadCloud2Line />
                      <div>
                        <div className="dflex-wgap justify-content-center ms-auto save-back-button">
                          <h2>
                            {t("Dropfilesherepaste")}
                            <span>{t("or")}</span>
                            <FileUploadBrowser errors={errors} id={moduleName.toLowerCase()} name={moduleName.toLowerCase()} type="file" multiple={true} values={values} setFieldValue={setFieldValue} accept=".csv" />
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    {t("downloadExampleCSV")}
                    <a className="ms-2" href={`/assets/csv/${importExport?.sampleFile}`} download={importExport?.sampleFile}>
                      {t(importExport?.sampleFile?.includes("csv") ? "Here" : "ReadTheInstructions")}
                    </a>
                    {importExport?.instructionsAndSampleFile && (
                      <>
                        {t("and_please_ensure_you")}
                        <a href={`/assets/csv/${importExport?.instructions}`} download={importExport?.instructions}>
                          {" "}
                          {t("read_the_instructions")}{" "}
                        </a>
                      </>
                    )}
                  </p>
                </TabPane>
                <div className="modal-footer">
                  {values[moduleName.toLowerCase()] && values[moduleName.toLowerCase()]?.length > 0 && (
                    <a href="#javascript" onClick={() => setFieldValue(`${moduleName}`, "")}>
                      {t("Clear")}
                    </a>
                  )}
                  <Btn type="submit" className="btn-theme ms-auto" title="Insert Media" />
                </div>
              </Form>
            )}
          </Formik>
        </TabContent>
      </ShowModal>
    </>
  );
};

export default ImportExport;
