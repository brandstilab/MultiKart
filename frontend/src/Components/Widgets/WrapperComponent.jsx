import { Col, Row } from "reactstrap";

const WrapperComponent = ({ classes = {}, noRowCol = false, colProps = {}, customCol = false, ...props }) => {
  return (
    <section className={classes?.sectionClass ? classes?.sectionClass : ""} {...props}>
      <div className={` ${classes?.fluidClass ? classes?.fluidClass : ""}`}>
        {noRowCol ? (
          props.children
        ) : (
          <Row className={classes.row ? classes.row : "g-sm-4 g-3"}>
            {customCol ? (
              <>{props.children}</>
            ) : (
              <Col className={classes.col ? classes.col : ""} {...colProps}>
                {props.children}
              </Col>
            )}
          </Row>
        )}
      </div>
    </section>
  );
};

export default WrapperComponent;
