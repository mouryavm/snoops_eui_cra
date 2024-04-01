import React from "react";
import SnoopUISideBar from "../SideBar";
import SnoopUIHeader from "../Header";

interface PageLayoutProps extends React.PropsWithChildren {}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <SnoopUIHeader isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <SnoopUISideBar isExpanded={isExpanded} />
      <div
        className="main-content"
        style={{
          marginLeft: isExpanded ? "205px" : "55px",
          marginTop: 5,
          marginRight: 5,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PageLayout;
