import React, { useState } from "react";
import {
  EuiHeader,
  EuiImage,
  EuiButtonIcon,
  EuiAvatar,
  EuiContextMenuPanel,
  EuiContextMenuItem,
} from "@elastic/eui";
import logo from "../../../assets/Snoops.svg";
import "./SnoopUIHeader.css"; // Import custom CSS file for styling

interface SnoopUIHeaderProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const SnoopUIHeader: React.FC<SnoopUIHeaderProps> = ({
  isExpanded,
  toggleSidebar,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <EuiHeader className="snoop-header">
      <div className="snoop-header-left">
        <EuiImage src={logo} alt="test" height={40} />
        <button
          onClick={toggleSidebar}
          className={`snoop-menu-button ${isExpanded ? "expanded" : ""}`}
        >
          <EuiButtonIcon
            iconType={isExpanded ? "menuLeft" : "menuRight"}
            color="primary"
            aria-label="Toggle Sidebar"
          />
        </button>
      </div>
      <div className="snoop-header-right">
        <div className="snoop-avatar-container">
          <button onClick={toggleMenu}>
            <EuiAvatar name="John Doe" size="m" />
          </button>
          {isMenuOpen && (
            <EuiContextMenuPanel className="snoop-context-menu" items={[
              <EuiContextMenuItem key="profile">
                <div>Name: John Doe</div>
                <div>Email: johndoe@example.com</div>
              </EuiContextMenuItem>,
              // Add more menu items here
            ]} />
          )}
        </div>
      </div>
    </EuiHeader>
  );
};

export default SnoopUIHeader;
