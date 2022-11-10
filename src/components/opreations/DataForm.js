import { Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../formik/FormikControl";
import "./DataForm.css";

const DataForm = ({ submitHandler, savedValues }) => {
  const initialValues = {
    title: "",
    description: "",
    date: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    submitHandler(values);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("description is required"),
    date: Yup.date("invalid date").required("Date is required"),
  });

  return (
    <div className="dataForm">
      <Formik
        initialValues={savedValues || initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="text"
              placeholder="Title"
              name="title"
            />
            <FormikControl
              control="input"
              type="date"
              placeholder="Date"
              name="date"
            />
            <FormikControl
              control="textarea"
              placeholder="Write description"
              name="description"
            />
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              className="form-button"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DataForm;
