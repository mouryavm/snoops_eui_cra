import React from "react";
import { EuiCard, EuiImage, EuiText } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import "./authLayout.css";
import snoops_logo from '../../../assets/snoops_logo_name.svg';
import threats from '../../../assets/threats.png'
import virus from '../../../assets/virus.png'
import Quotes from '../../../assets/quotes.png'
import Quotes_text from '../../../assets/quote_text.png'

interface AuthLayoutProps extends React.PropsWithChildren {
  title: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <div className="auth-layout-container">
      <div className="background-image" style={{ backgroundColor: 'linear-gradient(to right, rgba(104, 99, 249, 1), rgba(93, 39, 175, 1))' }} />
      <div className="auth-container">
        <div className="card-container">
          <img src={threats} className="overlay-image threats" alt="threats" />
          <img src={virus} className="overlay-image virus" alt="virus" />
          <img src={Quotes} className="overlay-image quotes" alt="quotes" />
          <img src={Quotes_text} className="overlay-image quotes_text" alt="quotes_text" />
          <div className="image-container">
            <EuiImage
              style={{ maxWidth: "150px",marginLeft:15 }}
              src={snoops_logo}
              alt="Snoops Logo"
              className="centered-image"
              hasShadow={false}
            />
          </div>
          <div className="card-wrapper">
          <EuiText style={{marginLeft:23,fontFamily: "Plus Jakarta Sans"}}>
          <h3>{title}</h3>
          </EuiText>
            <EuiCard
              title=""
              textAlign="left"
              
              description={children || ""}
              display="plain"
              paddingSize="l"
              style={{ borderRadius: "10px" ,fontFamily: "Plus Jakarta Sans",marginBottom: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
