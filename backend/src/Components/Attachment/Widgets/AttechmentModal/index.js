import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiUploadCloud2Line } from "react-icons/ri";
import { Row, TabContent, TabPane } from "reactstrap";
import ShowModal from "../../../../Elements/Alerts&Modals/Modal";
import Btn from "../../../../Elements/Buttons/Btn";
import { selectImageReducer } from "../../../../Utils/AllReducers";
import request from "../../../../Utils/AxiosUtils";
import { attachment, createAttachment } from "../../../../Utils/AxiosUtils/API";
import useCreate from "../../../../Utils/Hooks/useCreate";
import usePermissionCheck from "../../../../Utils/Hooks/usePermissionCheck";
import { YupObject, requiredSchema } from "../../../../Utils/Validation/ValidationSchemas";
import FileUploadBrowser from "../../../InputFields/FileUploadBrowser";
import TableBottom from "../../../Table/TableBottom";
import AttachmentFilter from "../AttachmentFilter";
import ModalButton from "./ModalButton";
import ModalData from "./ModalData";
import ModalNav from "./ModalNav";
import { useRouter } from "next/navigation";


const AttachmentModal = (props) => {
    const { modal, setModal, setFieldValue, name, setSelectedImage, isattachment, multiple, values, showImage, redirectToTabs, noAPICall ,selectedImage ,paramsProps } = props
    const [create] = usePermissionCheck(["create"], "attachment");    
    const { t } = useTranslation( 'common');
    const [tabNav, setTabNav] = useState(1);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [paginate, setPaginate] = useState(50);
    const [sorting, setSorting] = useState("");
    const router = useRouter()
    const [state, dispatch] = useReducer(selectImageReducer, { selectedImage: [], isModalOpen: "", setBrowserImage: '' });
    const { data: attachmentsData, refetch } = useQuery([attachment], () => request({ url: attachment, params: {  search, sort: sorting, paginate: paginate, page ,...paramsProps } },router), { enabled: false, refetchOnWindowFocus: false, select: (data) => data?.data });
    const { mutate, isLoading } = useCreate(createAttachment, false, !redirectToTabs && "/attachment", redirectToTabs ? "No" : false, () => {
        refetch();
        !redirectToTabs && setModal(false)
        redirectToTabs && setTabNav(1)
    });
    useEffect(() => {
        modal && !noAPICall && refetch();
        isattachment && setTabNav(2)
    }, [search, sorting, page, paginate, modal]);    
    useEffect(() => {
        dispatch({ type: "SELECTEDIMAGE", payload: selectedImage})
    }, [modal]);

    return (
        <ShowModal open={modal} setModal={setModal} modalAttr={{ className: "media-modal modal-dialog modal-dialog-centered modal-xl" }} close={true} title={"InsertMedia"} noClass={true}
            buttons={tabNav === 1 && <ModalButton setModal={setModal} dispatch={dispatch} state={state} name={name} setSelectedImage={setSelectedImage} attachmentsData={attachmentsData?.data} setFieldValue={setFieldValue} tabNav={tabNav} multiple={multiple} mutate={mutate} isLoading={isLoading} values={values} showImage={showImage} />}>
            <ModalNav tabNav={tabNav} setTabNav={setTabNav} isattachment={isattachment} />
            <TabContent activeTab={tabNav}>
                {!isattachment && <TabPane className={tabNav == 1 ? "fade active show" : ""} id="upload">
                    <AttachmentFilter setSearch={setSearch} setSorting={setSorting} />
                    {<div className="content-section select-file-section py-0 ratio2_3">
                        {<Row xxl={6} xl={5} lg={4} sm={3} xs={2} className="g-sm-3 g-2 py-0 media-library-sec ratio_square">
                            <ModalData isModal={true} attachmentsData={attachmentsData?.data} state={state} refetch={refetch} dispatch={dispatch} multiple={multiple} redirectToTabs={redirectToTabs} />
                        </Row>}
                        { attachmentsData?.data?.length > 0 && <TableBottom current_page={attachmentsData?.current_page} total={attachmentsData?.total} per_page={attachmentsData?.per_page} setPage={setPage} />}
                    </div>}
                </TabPane>}
                {create && <TabPane className={tabNav == 2 ? "fade active show" : ""} id="select">
                    {<div className="content-section drop-files-sec">
                        <div>
                            <RiUploadCloud2Line />
                            <Formik
                                initialValues={{ attachments: "" }}
                                validationSchema={YupObject({ attachments: requiredSchema })}
                                onSubmit={(values, { resetForm }) => {
                                    let formData = new FormData();
                                    Object.values(values.attachments).forEach((el, i) => {
                                        formData.append(`attachments[${i}]`, el);
                                    });
                                    !redirectToTabs && setModal(false)
                                    redirectToTabs && setTabNav(1)
                                    // Put Add Or Update Logic HereresetForm()
                                }}>
                                {({ values, setFieldValue, errors }) => (
                                    <Form className="theme-form theme-form-2 mega-form">
                                        <div>
                                            <div className="dflex-wgap justify-content-center ms-auto save-back-button">
                                                <h2>{t("Dropfilesherepaste")} <span>{t("or")}</span>
                                                    <FileUploadBrowser errors={errors} id="attachments" name="attachments" type="file" multiple={true} values={values} setFieldValue={setFieldValue} dispatch={dispatch} accept="*/*" />
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            {values?.attachments?.length > 0 &&
                                                <a href="#javascript" onClick={() => setFieldValue('attachments', "")}>{t("Clear")}</a>
                                            }
                                            <Btn type="submit" className="ms-auto" title="Insert Media" loading={Number(isLoading)} />
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>}
                </TabPane >}
            </TabContent>
        </ShowModal >
    );
};
export default AttachmentModal;