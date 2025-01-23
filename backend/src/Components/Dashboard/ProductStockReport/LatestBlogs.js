import { useQuery } from "@tanstack/react-query";
import Link from 'next/link';
import { useEffect } from "react";
import { Col, Form, Row } from "reactstrap";

import request from "../../../Utils/AxiosUtils";
import { blog } from "../../../Utils/AxiosUtils/API";
import { dateFormate } from "../../../Utils/CustomFunctions/DateFormate";
import Avatar from "../../CommonComponent/Avatar";
import NoDataFound from "../../CommonComponent/NoDataFound";
import DashboardWrapper from "../DashboardWrapper";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import TopSellingProduct from "../RecentOrders/TopSellingProduct";
import { checkPermission } from "@/Components/Common/checkPermissonList";


const LatestBlogs = () => { 
    
  const router = useRouter()   
    const { data, isLoading, refetch } = useQuery([blog], () => request({ url: blog, params: { status: 1, paginate: 2 } },router), {
        refetchOnWindowFocus: false, enabled: false, select: (data) => data?.data?.data,
    });
    useEffect(() => {
        refetch()
    }, [])
    return (
        <div>
            {checkPermission("product.index") && (
                <Formik initialValues={{ filter_by: "" }}>
                    {({ values, setFieldValue }) => (
                        <Form>
                            <TopSellingProduct values={values} setFieldValue={setFieldValue}/>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    )
}

export default LatestBlogs