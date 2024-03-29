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

  const toggleMenu = () => setIsMenuOpen((prev) => !prev); // Toggle menu visibility
  const closeMenu = () => setIsMenuOpen(false); // Function to close menu

  return (
    <EuiHeader className="snoop-header">
      <div className="snoop-header-left">
        <EuiImage src={logo} alt="test" height={40} />
        <div></div>
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
          {isMenuOpen && ( // Render the context menu panel only if isMenuOpen is true
            <EuiContextMenuPanel
              className="snoop-context-menu"
              items={[
                <EuiContextMenuItem key="profile" onClick={closeMenu}> {/* Close menu when clicked */}
                  <div>Name: John Doe</div>
                  <div>Email: johndoe@example.com</div>
                </EuiContextMenuItem>,
                // Add more menu items here
              ]}
            />
          )}
        </div>
      </div>
    </EuiHeader>
  );
};

export default SnoopUIHeader;
