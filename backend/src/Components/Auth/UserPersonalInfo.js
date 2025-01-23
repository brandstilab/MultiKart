import { Field } from "formik";
import { Col } from "reactstrap";
import { ReactstrapInput } from "../ReactstrapFormik";

const UserPersonalInfo = () => {
  return (
    <>
      <Col sm="6">
        <Field name="name" type="text" inputprops={{noExtraSpace:true}} component={ReactstrapInput} className="form-control" id="name" placeholder="Name" label="Name" />
      </Col>
      <Col sm="6">
        <Field name="email" type="email" inputprops={{noExtraSpace:true}} component={ReactstrapInput} className="form-control" id="email" placeholder="Email" label="Email" />
      </Col>
      <Col sm="6">
        <Field name="password" type="password" inputprops={{noExtraSpace:true}}  component={ReactstrapInput} className="form-control" id="password" placeholder="Password" label="Password" />
      </Col>
      <Col sm="6">
        <Field name="password_confirmation" type="password"  inputprops={{noExtraSpace:true}} component={ReactstrapInput} className="form-control" id="password_confirmation" placeholder="Confirm Password" label="ConfirmPassword" />
      </Col>
      <Col sm="6">
        <Field name="store_name" type="text" component={ReactstrapInput} inputprops={{noExtraSpace:true}} className="form-control" id="store_name" placeholder="Store Name" label="StoreName" />
      </Col>
      <Col sm="6">
        <Field name="description" type="textarea" component={ReactstrapInput} inputprops={{noExtraSpace:true}} className="form-control" id="description" placeholder="Store Description" label="StoreDescription" />
      </Col>
    </>
  );
};

export default UserPersonalInfo;
