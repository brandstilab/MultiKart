import Link from "next/link";
import { Card, CardBody, Col, Row, Table } from "reactstrap";
import React, { useContext } from "react";
import { dateFormate } from "@/Utils/CustomFunctions/DateFormate";
import SettingContext from "@/Context/SettingContext";
import { RiEyeLine } from "react-icons/ri";

const SubOrdersTable = ({ data }) => {
  const { convertCurrency } = useContext(SettingContext);
  return (
    <Card className="dashboard-table">
      <CardBody>
        <div className="wallet-table">
          <div className="tracking-wrapper table-responsive">
            <Table className="product-table order-table">
              <thead>
                <tr>
                  <th scope="col">Order Number</th>
                  <th scope="col">OrderDate</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((subOrder, i) => (
                  <tr key={i}>
                    <td>
                      <h6>#{subOrder?.order_number}</h6>
                    </td>
                    <td>{dateFormate(subOrder?.created_at)}</td>
                    <td>{convertCurrency(subOrder?.amount)} </td>
                    <td>
                      <div className={`status-${subOrder.order_status.slug}`}>
                        <span>{subOrder.order_status.name}</span>
                      </div>
                    </td>
                    <td>
                      <Link href={`/account/order/details/${subOrder.order_number}`}>
                        <RiEyeLine />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SubOrdersTable;
