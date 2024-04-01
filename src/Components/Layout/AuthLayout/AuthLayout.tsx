import React from "react";
import { EuiCard, EuiImage } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import "./authLayout.css";
import snoops_logo from "../../../assets/snoops_logo_name.svg";

interface AuthLayoutProps extends React.PropsWithChildren {
  title: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <div className="auth-layout-container">
      <div className="background-image" />
      <div className="auth-container">
        <div className="card-container">
          <div className="image-container">
            <EuiImage
              style={{ maxWidth: "200px", textAlign: "center" }}
              src={snoops_logo}
              alt="Snoops Logo"
              className="centered-image"
              hasShadow={false}
            />
          </div>
          <div className="card-wrapper">
            <EuiCard
              title={title}
              textAlign="center"
              description={children || ""}
              display="plain"
              paddingSize="l"
              style={{ borderRadius: "10px" }}
            />            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
