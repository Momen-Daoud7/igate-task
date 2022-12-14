import "./Login.css";
import { Button } from "@material-ui/core";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "../../formik/FormikControl";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/features/auth";
import { useEffect } from "react";

const Login = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const nav = useNavigate();

  // Redirect the login user
  useEffect(() => {
    if (token) {
      nav("/");
    }
  }, [token, nav]);

  // Formik setup
  const initialValues = { email: "", password: "" };

  // Validation rules
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required").email("invalid email"),
    password: Yup.string().required("Password is required"),
  });

  // Submit Handler
  const submitHanlder = async (values, onSubmitProps) => {
    await dispatch(login(values)).unwrap();
    onSubmitProps.resetForm();
    nav("/")
  };

  return (
    <section className="login">
      <h3>Log in</h3>
      <div className="login__body">
        <Formik
          initialValues={initialValues}
          onSubmit={submitHanlder}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <FormikControl
                control="input"
                type="email"
                placeholder="Enter your email"
                name="email"
              />
              <FormikControl
                control="input"
                type="password"
                placeholder="Password"
                name="password"
              />
              <Button
                type="submit"
                disabled={formik.isSubmitting}
                className="form-button"
              >
                log in
              </Button>
            </Form>
          )}
        </Formik>
        <div className="login__needAccount">
          <p>Need an account?</p> <Link>Sign Up</Link>
        </div>
        <p className="login__frogetPassword">Forget Password?</p>
      </div>
    </section>
  );
};

export default Login;
