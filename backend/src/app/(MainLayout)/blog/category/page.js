'use client'
import TittleWithDropDown from '@/Components/Common/TittleWithDropDown'
import CategoryForm from '@/Components/category/CategoryForm'
import TreeForm from '@/Components/category/TreeForm'
import { Category } from '@/Utils/AxiosUtils/API'
import useCreate from '@/Utils/Hooks/useCreate'
import usePermissionCheck from '@/Utils/Hooks/usePermissionCheck'
import { useRef, useState } from 'react'
import { useTranslation } from "react-i18next"
import { Card, CardBody, Col, Row } from 'reactstrap'

const BlogCategory = () => {
    const { t } = useTranslation( 'common');
    const [create] = usePermissionCheck(["create"], "category");
    const [resetData, setResetData] = useState(false)
    const refRefetch = useRef()
    const { mutate, isLoading } = useCreate(Category, false, false, false, (resDta) => {
        if (resDta?.status == 200 || resDta?.status == 201) {
            refRefetch?.current?.call()
            setResetData(true)
        }
    });
    return (
        <Row >
            <Col xl="4">
                <Card >
                    <CardBody>
                        <TittleWithDropDown  noDropDown  moduleName="Category"    />
                        <TreeForm type={"post"} isLoading={isLoading} ref={refRefetch} />
                    </CardBody>
                </Card>
            </Col>
            <Col xl="8">
                <Card >
                    {create ? <CardBody>
                        <div className="title-header option-title">
                            <h5>{t("AddCategory")}</h5>
                        </div>
                        <CategoryForm loading={isLoading} mutate={mutate} key={resetData} type={"post"} />
                    </CardBody>
                        : <h1>No permission</h1>}
                </Card>
            </Col>
        </Row>
    );
}
export default BlogCategory