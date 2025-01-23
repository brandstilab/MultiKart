import { Field } from "formik";
import ReactstrapSelectInput from "../ReactstrapFormik/ReactstrapSelectInput";

const SelectField = ({ name, ...rest }) => {
  return <Field type="text" name={name} id={name} component={ReactstrapSelectInput} {...rest} />;
};

export default SelectField;
