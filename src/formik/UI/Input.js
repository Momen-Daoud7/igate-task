import { Field, ErrorMessage } from "formik";
import TextError from "../Errors/TextError";

const Input = ({ label, name, ...rest }) => {
  return (
    <div className="form-control">
      <Field name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
