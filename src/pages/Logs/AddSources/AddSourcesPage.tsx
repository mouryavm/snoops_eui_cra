import React from "react";
import {
  EuiPage,
  EuiPageBody,
  EuiCard,
  EuiIcon,
} from "@elastic/eui";
import "./AddSourcesPage.css";

const AddSourcesPage: React.FC = () => {
  return (
    <EuiPage>
      <EuiPageBody className="page-body">
        <div className="page-title">Add Sources</div>
        <div className="centered-container">
          <div className="custom-card-container">
            <EuiCard
              title="Upload"
              description="Add sources via file upload"
              icon={<EuiIcon type="importAction" size="xxl" color="primary" />}
              textAlign="center"
              onClick={() => console.log("Upload clicked")}
              className="custom-card"
            />
            <EuiCard
              title="S3 Bucket"
              description="Add sources from an S3 bucket"
              icon={<EuiIcon type="storage" size="xxl" color="primary" />}
              textAlign="center"
              onClick={() => console.log("S3 Bucket clicked")}
              className="custom-card"
            />
          </div>
        </div>
      </EuiPageBody>
    </EuiPage>
  );
};

export default AddSourcesPage;
