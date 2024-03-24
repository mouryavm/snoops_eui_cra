import React from "react";
import { EuiHeader, EuiIcon, EuiImage } from "@elastic/eui";
import logo from "../../../assets/Snoops.svg";

interface SnoopUIHeaderProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const SnoopUIHeader: React.FC<SnoopUIHeaderProps> = ({
  isExpanded,
  toggleSidebar,
}) => (
  <EuiHeader>
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* <img src={logo} alt="Logo" style={{ width: 125, marginLeft: 10 }} /> */}
      <EuiImage src={logo}  alt="test"  height={40} />
      <button onClick={toggleSidebar} style={{ marginLeft: 40 }}>
        <EuiIcon type={isExpanded ? "menuLeft" : "menuRight"} color="blue" />
      </button>
    </div>
  </EuiHeader>
);

export default SnoopUIHeader;
