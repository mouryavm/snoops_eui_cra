import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  EuiButton,
  EuiFieldPassword,
  EuiForm,
  EuiFormRow,
  EuiText,
  EuiFieldText,
} from "@elastic/eui";
import AuthLayout from "../../Components/Layout/AuthLayout/AuthLayout";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (values: any) => {
    console.log("Logged in with username:", values.username);
    // Perform login logic here
  };

  return (
    <AuthLayout
      title="Login"
      description={
        <>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values: any, { setSubmitting }: any) => {
              setTimeout(() => {
                handleLogin(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, isValid }: any) => (
              <Form>
                <EuiForm component="form">
                  <EuiFormRow
                    fullWidth
                    isInvalid={true}
                    //error="Please enter your username"
                  >
                    <Field name="username">
                      {({ field, meta }: any) => (
                        <div>
                          <EuiFieldText
                            fullWidth
                            placeholder="Username"
                            {...field}
                            isInvalid={!!meta.error && meta.touched}
                          />
                          {meta.touched && meta.error && (
                            <div style={{ color: "red" }}>{meta.error}</div>
                          )}
                        </div>
                      )}
                    </Field>
                  </EuiFormRow>
                  <EuiFormRow
                    fullWidth
                    isInvalid={true}
                    //error="Please enter your password"
                  >
                    <Field name="password">
                      {({ field, meta }: any) => (
                        <div>
                          <EuiFieldPassword
                            fullWidth
                            placeholder="Password"
                            type="dual"
                            {...field}
                            isInvalid={!!meta.error && meta.touched}
                          />
                          {meta.touched && meta.error && (
                            <div style={{ color: "red" }}>{meta.error}</div>
                          )}
                        </div>
                      )}
                    </Field>
                  </EuiFormRow>
                  <EuiFormRow fullWidth>
                    <EuiButton
                      fullWidth
                      type="submit"
                      isLoading={isSubmitting}
                      disabled={isSubmitting || !isValid}
                    >
                      Log In
                    </EuiButton>
                  </EuiFormRow>
                </EuiForm>
              </Form>
            )}
          </Formik>
          <EuiText
            size="s"
            color="subdued"
            textAlign="center"
            style={{ marginTop: 7 }}
          >
            <p>
              Don't have an account?{" "}
              <a onClick={() => navigate("/auth/register")}>Register here</a>
            </p>
          </EuiText>
          <EuiText
            size="s"
            color="subdued"
            textAlign="center"
            style={{ marginTop: 7 }}
          >
            <p>
              <a onClick={() => navigate("/auth/forgot")}>Forgot Password</a>
            </p>
          </EuiText>
        </>
      }
    />
  );
};

export default LoginScreen;
