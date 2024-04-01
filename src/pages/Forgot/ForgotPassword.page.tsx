import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { EuiButton, EuiFieldText, EuiFormRow, EuiText } from "@elastic/eui";
import AuthLayout from "../../Components/Layout/AuthLayout/AuthLayout";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
  });

  return (
    <AuthLayout title="Forgot Password">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values: any, { setSubmitting }: any) => {
          // Perform forgot password logic here
          console.log("Forgot password for email:", values.email);
          // Optionally, show a success message or redirect the user
          setSubmitting(false); // Ensure to set submitting to false after submission
        }}
      >
        {({ isSubmitting, isValid }: any) => (
          <Form>
            <EuiFormRow fullWidth>
              <Field name="email">
                {({ field, form }: { field: any; form: any }) => (
                  <EuiFormRow
                    fullWidth
                    isInvalid={form.errors.email && form.touched.email}
                    error={form.errors.email}
                  >
                    <EuiFieldText
                      fullWidth
                      placeholder="Email Address"
                      {...field}
                    />
                  </EuiFormRow>
                )}
              </Field>
            </EuiFormRow>
            <EuiFormRow fullWidth>
              <EuiButton
                fullWidth
                type="submit"
                isLoading={isSubmitting}
                isDisabled={!isValid}
              >
                Submit
              </EuiButton>
            </EuiFormRow>
            <EuiText
              size="s"
              color="subdued"
              textAlign="center"
              style={{ marginTop: 7 }}
            >
              <p>
                Remember your password?{" "}
                <a onClick={() => navigate("/auth/login")}>Log in here</a>
              </p>
            </EuiText>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
