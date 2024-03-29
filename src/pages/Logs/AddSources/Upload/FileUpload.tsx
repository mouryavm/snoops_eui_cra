import * as React from "react";
import { EuiCard, EuiText, EuiTextColor } from "@elastic/eui";

interface Props {}

const FileUpload = () => {
  return (
    <>
      <EuiCard title="" style={{ height: "93vh" }}>
        <EuiText textAlign="left" size="s">
          <p>
            To begin the process, please upload the file containing the logs you
            wish to ingest. Ensure that the file format is compatible with our
            system. If you have multiple files, you can compress them into a
            single archive file (e.g., ZIP) before uploading for convenience.
          </p>
        </EuiText>
      </EuiCard>
    </>
  );
};

export default FileUpload;
