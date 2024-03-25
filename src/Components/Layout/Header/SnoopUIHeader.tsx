import React, { useState } from "react";
import {
  EuiHeader,
  EuiImage,
  EuiButtonIcon,
  EuiPopover,
  EuiAvatar,
  EuiText,
} from "@elastic/eui";
import logo from "../../../assets/Snoops.svg";

interface SnoopUIHeaderProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const SnoopUIHeader: React.FC<SnoopUIHeaderProps> = ({
  isExpanded,
  toggleSidebar,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const closePopover = () => setIsPopoverOpen(false);
  const togglePopover = () => setIsPopoverOpen(!isPopoverOpen);

  const ProfileMenu = (
    <EuiPopover
      id="profileMenu"
      button={<EuiAvatar size="l" name="John Doe" onClick={togglePopover} />}
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      anchorPosition="downRight"
      panelPaddingSize="s"
    >
      <div style={{ width: 240 }}>
        <EuiText size="s">
          <p>John Doe</p>
          <p>Email: johndoe@example.com</p>
        </EuiText>
        {/* Add more menu items here */}
      </div>
    </EuiPopover>
  );

  return (
    <EuiHeader>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <EuiImage src={logo} alt="test" height={40} />
          <button onClick={toggleSidebar} style={{ marginLeft: 16 }}>
            <EuiButtonIcon
              iconType={isExpanded ? "menuLeft" : "menuRight"}
              color="text"
              aria-label="Toggle Sidebar"
            />
          </button>
        </div>
        <div style={{ marginLeft: 16 }}>{ProfileMenu}</div>
      </div>
    </EuiHeader>
  );
};

export default SnoopUIHeader;
