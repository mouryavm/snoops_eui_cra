import React from "react";
import { EuiPage, EuiPageBody, EuiFlexGroup, EuiFlexItem, EuiText, EuiButton } from "@elastic/eui";
import { Link } from "react-router-dom";
import backgroundImage from "./background.jpg"; // Import the background image
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
  return (
    <EuiPage className="not-found-page" restrictWidth="100%">
      <EuiPageBody component="div" className="not-found-page-body">
        <EuiFlexGroup justifyContent="center" alignItems="center" direction="column" className="not-found-content">
          <EuiFlexItem grow={false}>
            <EuiText textAlign="center">
              <h2>404 Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
              <p>
                Please go back to <Link to="/">homepage</Link>.
              </p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <Link to="/">
              <EuiButton color="primary" fill>
                Go to Homepage
              </EuiButton>
            </Link>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageBody>
    </EuiPage>
  );
};

export default NotFoundPage;
