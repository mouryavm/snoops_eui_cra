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
import { useAuthContext } from "../../context/AuthContext/AuthProvider";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  return (
    <AuthLayout title="Login">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values: any) => {
          const success = login(values.username, values.password);

          if (success) {
            navigate("/dashboard");
          } else {
            console.log(
              "Login failed. Please check your username and password."
            );
          }
        }}
      >
        {({
          handleSubmit,
          submitForm,
        }) => (
          <Form onSubmit={handleSubmit}>
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
                  type="button"
                  onClick={async () => {
                    submitForm()
                  }}
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
    </AuthLayout>
  );
};

export default LoginScreen;
