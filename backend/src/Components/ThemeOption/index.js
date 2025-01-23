import TabTitle from '@/Components/Widgets/TabTitle';
import { useQuery } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { ThemeOptionTabTitleListData } from '../../Data/TabTitleListData';
import Btn from '../../Elements/Buttons/Btn';
import request from '../../Utils/AxiosUtils';
import { ThemeOptions } from '../../Utils/AxiosUtils/API';
import { RecursiveSet } from '../../Utils/CustomFunctions/RecursiveSet';
import usePermissionCheck from '../../Utils/Hooks/usePermissionCheck';
import Loader from '../CommonComponent/Loader';
import ThemeOptionAllTabs from './ThemeOptionAllTabs';
import { ThemeOptionInitialValue } from './ThemeOptionInitialValue';
import ThemeOptionSubmit from './ThemeOptionSubmit';
import { useTranslation } from "react-i18next";

const ThemeOptionForm = ({ mutate, loading, title }) => {
    
    const { t } = useTranslation( 'common');
    const [activeTab, setActiveTab] = useState("1");
    const [edit] = usePermissionCheck(["edit"]);
    const router = useRouter();
    const { data, isLoading, refetch } = useQuery([ThemeOptions], () => request({ url: ThemeOptions },router), { refetchOnWindowFocus: false, enabled: true, select: (res) => { return res?.data } });
    let NewSettingsData = data?.options || {};
    let IncludeList = ['status', "cookie_enable", "back_to_top_enable", 'footer_copyright', 'payment_enable', 'social_media_enable', "sticky_header_enable", "page_top_bar_enable", "blog_author_enable", "read_more_enable", "back_button_enable", "page_top_bar_dark", "sticky_cart_enable"]
    RecursiveSet({ data: NewSettingsData, IncludeList })
    if (isLoading) return <Loader />
    return (
        <Formik
            enableReinitialize
            initialValues={{ ...ThemeOptionInitialValue(NewSettingsData) }}
            onSubmit={(values) => {
                ThemeOptionSubmit(values, mutate)
            }}>
            {({ values, errors, touched, setFieldValue }) => (
                <Form className="theme-form theme-form-2 mega-form vertical-tabs">
                    <Col>
                        <Card>
                            <div className="title-header option-title">
                                <h5>{t(title)}</h5>
                            </div>
                            <Row>
                                <Col xl="3" lg="4">
                                    <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={ThemeOptionTabTitleListData} errors={errors} touched={touched} />
                                </Col>
                                <ThemeOptionAllTabs activeTab={activeTab} errors={errors} values={values} setFieldValue={setFieldValue} touched={touched} />
                                <div className="ms-auto justify-content-end dflex-wgap mt-4 save-back-button">
                                    <Btn className="me-2 btn-outline btn-lg" title="Back" onClick={() => router.back()} />
                                    {edit && <Btn className="btn-primary btn-lg" type="submit" title="Save" loading={Number(loading)} />}
                                </div>
                            </Row>
                        </Card>
                    </Col>
                </Form>
            )}
        </Formik>
    )
}
export default ThemeOptionForm