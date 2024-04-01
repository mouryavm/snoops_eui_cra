import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  EuiFieldText,
  EuiFieldPassword,
  EuiButton,
  EuiFormRow,
  EuiText,
  EuiCheckbox,
} from "@elastic/eui";
import AuthLayout from "../../Components/Layout/AuthLayout";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  organization: Yup.string().required("Please enter your organization name"),
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
    <AuthLayout title="Register">
      <Formik
        validateOnMount={false}
        initialValues={{
          firstName: "",
          lastName: "",
          organization: "",
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
                <EuiFormRow
                  label="First Name"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  isInvalid={meta.touched && meta.error}
                >
                  <EuiFieldText
                    placeholder="First Name"
                    fullWidth
                    required
                    {...field}
                  />
                </EuiFormRow>
              )}
            </Field>
            </EuiFormRow>
            <Field name="lastName">
              {({ field, meta }: { field: any; meta: any }) => (
                <EuiFormRow
                  label="Last Name"
                  error={meta.touched && meta.error ? meta.error : undefined}
                 // helpText={meta.touched && meta.error ? meta.error : undefined}
                  isInvalid={meta.touched && meta.error}
                >
                  <EuiFieldText
                    placeholder="Last Name"
                    fullWidth
                    required
                    {...field}
                  />
                </EuiFormRow>
              )}
            </Field>
            <EuiFormRow>
            <Field name="organization">
              {({ field, meta }: { field: any; meta: any }) => (
                <EuiFormRow
                  label="Organization"
                  error={meta.touched && meta.error ? meta.error : undefined}
                 // helpText={meta.touched && meta.error ? meta.error : undefined}
                  isInvalid={meta.touched && meta.error}
                >
                  <EuiFieldText
                    placeholder="Organization"
                    fullWidth
                    required
                    {...field}
                  />
                </EuiFormRow>
              )}
            </Field>
            </EuiFormRow>
            <EuiFormRow>
            <Field name="email">
              {({ field, meta }: { field: any; meta: any }) => (
                <EuiFormRow
                  label="Email "
                  error={meta.touched && meta.error ? meta.error : undefined}
                 // helpText={meta.touched && meta.error ? meta.error : undefined}
                  isInvalid={meta.touched && meta.error}
                >
                  <EuiFieldText
                    placeholder="Email"
                    fullWidth
                    required
                    {...field}
                  />
                </EuiFormRow>
              )}
            </Field>
            </EuiFormRow>
            <EuiFormRow>
            <Field name="password">
              {({ field, meta }: { field: any; meta: any }) => (
                <EuiFormRow
                  label="Password "
                  error={meta.touched && meta.error ? meta.error : undefined}
                 // helpText={meta.touched && meta.error ? meta.error : undefined}
                  isInvalid={meta.touched && meta.error}
                >
                  <EuiFieldPassword
                    placeholder="Password"
                    fullWidth
                    required
                    type='dual'
                    {...field}
                  />
                </EuiFormRow>
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
    </AuthLayout>
  );
};

export default RegisterPage;
