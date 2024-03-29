import React from "react";
import {
  EuiPage,
  EuiPageBody,
  EuiCard,
  EuiIcon,
  EuiImage,
} from "@elastic/eui";
import "./AddSourcesPage.css";
import s3bucket_img from '../../../assets/Amazon-S3-Logo 1.png'
import fileUpload from '../../../assets/upload-file.png'
import { useNavigate } from "react-router-dom";

const AddSourcesPage: React.FC = () => {

    const navigate = useNavigate()
  return (
    <EuiPage>
      <EuiPageBody className="page-body">
        <div className="page-title">Add Sources</div>
        <div className="centered-container">
          <div className="custom-card-container">
            <EuiCard
              title="Upload"
              description="Add sources via file upload"
            //   icon={<EuiIcon type="importAction" size="xxl" color="primary" />}
                icon={<EuiImage src={fileUpload} alt="file upload"  size={60}/>}
              textAlign="center"
              onClick={() => navigate ('/logs/addSources/fileupload')}
              className="custom-card"
            />
            <EuiCard
              title="S3 Bucket"
              description="Add sources from an S3 bucket"
            //   icon={<EuiIcon type="storage" size="xxl" color="primary" />}
            icon={<EuiImage src={s3bucket_img} alt="s3bucket"  size={100}/>}
              textAlign="center"
              onClick={() => navigate('/logs/addSources/s3bucket')}
              className="custom-card"
            />
          </div>
        </div>
      </EuiPageBody>
    </EuiPage>
  );
};

export default AddSourcesPage;
