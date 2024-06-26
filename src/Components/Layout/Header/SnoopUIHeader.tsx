import React, { useState } from "react";
import {
  EuiHeader,
  EuiImage,
  EuiButtonIcon,
  EuiAvatar,
  EuiCallOut,
  EuiText,
  EuiButtonEmpty,
  EuiButton,
} from "@elastic/eui";
import logo from "../../../assets/Snoops.svg";
import "./SnoopUIHeader.css";
import { useAuthContext } from "../../../context/AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

interface SnoopUIHeaderProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const SnoopUIHeader: React.FC<SnoopUIHeaderProps> = ({
  isExpanded,
  toggleSidebar,
}) => {
  const navigate = useNavigate();
  const [isCalloutVisible, setIsCalloutVisible] = useState(false);

  const toggleCallout = () => setIsCalloutVisible((prev) => !prev);

  const { logout } = useAuthContext();

  const handleLogout = () => logout();

  return (
    <EuiHeader className="snoop-header">
      <div className="snoop-header-left">
        <EuiImage src={logo} alt="test" height={35} />
        <div></div>
        <button
          onClick={toggleSidebar}
          className={`snoop-menu-button ${isExpanded ? "expanded" : ""}`}
        >
          <EuiButtonIcon
            iconType={isExpanded ? "menuLeft" : "menuRight"}
            style={{ color: "white" }}
            aria-label="Toggle Sidebar"
          />
        </button>
      </div>

      <div className="snoop-header-right">
        <div className="snoop-avatar-container">
          <button onClick={toggleCallout}>
            <EuiAvatar name="John Doe" size="m" color="#fff" />
          </button>
          {isCalloutVisible && (
            <EuiCallOut
              className="snoop-callout"
              title="John Doe"
              color="primary"
              iconType="user"
              style={{ marginTop: 180 }}
            >
              <EuiText> johndoe@example.com</EuiText>
              <EuiText onClick={()=>navigate('/inviteOrg')}> Invite Organization</EuiText>
              {/* <EuiButton size="s" style={{backgroundColor:'white'}}>Invite Organization</EuiButton> */}
              <EuiButton onClick={handleLogout}>Logout</EuiButton>
              <EuiButtonEmpty size="s" onClick={toggleCallout}>
                Close
              </EuiButtonEmpty>
            </EuiCallOut>
          )}
        </div>
      </div>
    </EuiHeader>
  );
};

export default SnoopUIHeader;
