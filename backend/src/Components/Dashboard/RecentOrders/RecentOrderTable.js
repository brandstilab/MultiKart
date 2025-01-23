import { Col, Row } from "reactstrap";
import { OrderAPI } from "../../../Utils/AxiosUtils/API";
import RecentOrders from "./RecentOrders";

const RecentOrderTable = () => {
  return (
    <Row className="theme-form dashboard-form">
        <Col xs={12}>
          <RecentOrders
            url={OrderAPI}
            moduleName={"RecentOrders"}
            paramsProps={{ paginate: 7 }}
            filterHeader={{
              noPagination: true,
              noSearch: true,
              noPageDrop: true,
            }}
          />
        </Col>
    </Row>
  );
};

export default RecentOrderTable;
