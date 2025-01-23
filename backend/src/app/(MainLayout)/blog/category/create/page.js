'use client'
import TittleWithDropDown from '@/Components/Common/TittleWithDropDown';
import CategoryForm from '@/Components/category/CategoryForm';
import TreeForm from '@/Components/category/TreeForm';
import request from '@/Utils/AxiosUtils';
import { Category } from '@/Utils/AxiosUtils/API';
import SuccessHandle from '@/Utils/CustomFunctions/SuccessHandle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const CreateBlogCategory = () => {
    const { t } = useTranslation( 'common');
    const queryClient = useQueryClient();
    const router = useRouter();
    const { mutate, isLoading } = useMutation((data) => request({ url: Category, data, method: "post" },router), {
        onSuccess: (resData) => {
            SuccessHandle(resData, router, "/blog/category/create", t("CategoryCreatedSuccessfully"));
            queryClient.invalidateQueries({ queryKey: ["/blog/category/create"] });
        },
    });
    return (
        <Container fluid={true}>
            <Row >
                <Col xl="4">
                    <Card >
                        <CardBody>
                            <TittleWithDropDown  noDropDown  moduleName="Category"    />
                            <TreeForm type={"post"} isLoading={isLoading} />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="8">
                    <Card >
                        <CardBody>
                            <div className="title-header option-title">
                                <h5>{t("AddCategory")}</h5>
                            </div>
                            <CategoryForm loading={isLoading} mutate={mutate} type={"post"} buttonName="Save"/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateBlogCategory