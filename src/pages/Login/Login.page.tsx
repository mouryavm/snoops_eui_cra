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
  EuiFlexGrid,
  EuiCheckbox,
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
  const [checked, setChecked] = React.useState(false);
  const onChange = (e: any) => {
    setChecked(e.target.checked);
  };

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
        {({ handleSubmit, submitForm }) => (
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
              <EuiFlexGrid
                columns={2}
                direction="column"
                style={{ marginTop: 15, marginBottom: 15 }}
              >
                <EuiCheckbox
                  id="1"
                  label="Remember me"
                  checked={checked}
                  onChange={(e) => onChange(e)}
                />
                <EuiText
                  size="s"
                  color="subdued"
                  textAlign="right"
                  
                >
                  <p>
                    <a onClick={() => navigate("/auth/forgot")}>
                      Forgot Password
                    </a>
                  </p>
                </EuiText>
              </EuiFlexGrid>

              <EuiFormRow fullWidth>
                <EuiButton
                  fullWidth
                  type="button"
                  onClick={async () => {
                    submitForm();
                  }}
                >
                  Submit
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
        style={{ marginTop: 27 }}
      >
        <p>
          Don't have an account?{" "}
          <a onClick={() => navigate("/auth/register")}>Sign in</a>
        </p>
      </EuiText>
    </AuthLayout>
  );
};

export default LoginScreen;
