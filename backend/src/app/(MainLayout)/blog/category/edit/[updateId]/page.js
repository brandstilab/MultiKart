'use client'
import TittleWithDropDown from '@/Components/Common/TittleWithDropDown';
import CategoryForm from '@/Components/category/CategoryForm';
import TreeForm from '@/Components/category/TreeForm';
import { Category } from '@/Utils/AxiosUtils/API';
import useCreate from '@/Utils/Hooks/useCreate';
import usePermissionCheck from '@/Utils/Hooks/usePermissionCheck';
import dynamic from 'next/dynamic';
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const UpdateBlogCategory = ({ params }) => {
    const TableTitle = dynamic(() => import("@/Components/Table/TableTitle"), { ssr: false, });
    const [edit] = usePermissionCheck(["edit"], "category");
    const { t } = useTranslation('common');
    const { mutate, isLoading } = useCreate(`${Category}/${params?.updateId}`, false, "/blog/category", false);
    return (
        <>
            <Row>
                <Col xl="4">
                    <Card>
                        <CardBody>
                            <TittleWithDropDown pathName="/blog/category" moduleName="Category" />
                            <TreeForm type={'post'} isLoading={isLoading} />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="8">
                    <Card>
                        {edit ? <CardBody>
                            {params?.updateId && (
                                <>
                                    <TableTitle moduleName="Edit Category" onlyTitle={true} />
                                    <CategoryForm mutate={mutate} updateId={params?.updateId} loading={isLoading} type={'post'} buttonName="Update" />
                                </>
                            )}
                        </CardBody>
                            : <h1>{t("NoPermission")}</h1>}
                    </Card>
                </Col>
            </Row>
        </>
    );
}
export default UpdateBlogCategory