
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import { Col, Label, Row } from 'reactstrap';

const SimpleTitleWrapper = (props) => {
  
  const { t } = useTranslation( 'common');
  return (
    <Row className='mb-3 align-items-center'>
      <Label htmlFor='bankaccount' className='col-xxl-2 col-xl-3 col-lg-12 col-md-3'>
        {t(props?.title)}
      </Label>
      <Col xxl={10} xl={9} lg={12} md={9} {...props?.colProps} className={props?.colClass ? props?.colClass : ''}>
        {props.children}
      </Col>
    </Row>
  );
};

export default SimpleTitleWrapper;
