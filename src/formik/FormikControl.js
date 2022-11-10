import Input from "./UI/Input";
import Textarea from "./UI/Textarea";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
