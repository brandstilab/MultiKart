import { Col } from "reactstrap";

const SellerSteps = ({ data, number }) => {
  return (
    <Col lg={4}>
      <div className="step-box">
        <div>
          <div className="steps">{number}</div>
          <h4>{data?.title}</h4>
          <p>{data?.description}</p>
        </div>
      </div>
    </Col>
  );
};

export default SellerSteps;
