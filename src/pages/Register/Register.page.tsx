import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  EuiFieldText,
  EuiFieldPassword,
  EuiButton,
  EuiFormRow,
  EuiIcon,
  EuiPopover,
  EuiPopoverTitle,
  EuiText,
  EuiCheckbox,
} from "@elastic/eui";
import AuthLayout from "../../Components/Layout/AuthLayout";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  organisation: Yup.string().required("Please enter your organisation name"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: Yup.string()
    .required("Please enter a password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
      "Password must be at least 12 characters long and contain one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Register"
      description={
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            organisation: "",
            email: "",
            password: "",
            isTermsAccepted: false,
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values: any, { setSubmitting }: any) => {
            setTimeout(() => {
              console.log("Registered with:", values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }: any) => (
            <Form>
              <EuiFormRow>
                <Field name="firstName">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <div>
                      <EuiFieldText
                        placeholder="First Name"
                        fullWidth
                        required
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </EuiFormRow>
              <EuiFormRow>
                <Field name="lastName">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <div>
                      <EuiFieldText
                        placeholder="Last Name"
                        fullWidth
                        required
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </EuiFormRow>
              <EuiFormRow>
                <Field name="organisation">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <div>
                      <EuiFieldText
                        placeholder="Organisation Name"
                        fullWidth
                        required
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </EuiFormRow>
              <EuiFormRow>
                <Field name="email">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <div>
                      <EuiFieldText
                        type="email"
                        placeholder="Email Address"
                        fullWidth
                        required
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </EuiFormRow>
              <EuiFormRow>
                <Field name="password">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <div>
                      <EuiFieldPassword
                        placeholder="Password"
                        fullWidth
                        required
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </EuiFormRow>
              <EuiFormRow>
                <Field name="isTermsAccepted" type="checkbox">
                  {({ field }: { field: any }) => (
                    <EuiCheckbox
                      id="termsCheckbox"
                      label="I Accept to the Privacy Policy and Terms & Conditions"
                      {...field}
                    />
                  )}
                </Field>
              </EuiFormRow>
              <EuiButton
                fullWidth
                type="submit"
                fill
                isLoading={isSubmitting}
                onClick={() => navigate("/auth/login")}
              >
                Register
              </EuiButton>
              <EuiText
                size="s"
                color="subdued"
                textAlign="center"
                style={{ marginTop: 7 }}
              >
                <p>
                  <a onClick={() => navigate("/auth/login")}>Back to Login </a>
                </p>
              </EuiText>
            </Form>
          )}
        </Formik>
      }
    />
  );
};

export default RegisterPage;
