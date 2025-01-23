"use client"
import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { Subscribe } from '@/Utils/AxiosUtils/API';
import AllSubscriptionTable  from '@/Components/Subscriptions';

const Subscription = () => {
    const [isCheck, setIsCheck] = useState([]);
    return (
        <Col sm="12">
            <AllSubscriptionTable  url={Subscribe} moduleName="Subscription" onlyTitle={true} isCheck={isCheck} setIsCheck={setIsCheck} />
        </Col>
    )
}

export default Subscription