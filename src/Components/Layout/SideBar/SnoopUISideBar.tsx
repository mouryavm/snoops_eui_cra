import React, { useState } from "react";
import { EuiIcon, EuiListGroupItem } from "@elastic/eui";
import { SideBarNavData } from "./SideBarNavData";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

interface SnoopUISideBarProps {
  isExpanded: boolean;
}

const SnoopUISideBar: React.FC<SnoopUISideBarProps> = ({ isExpanded }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const navigate = useNavigate();

  const toggleItem = (itemId: number) => {
    setOpenItems((prevItems) =>
      prevItems.includes(itemId)
        ? prevItems.filter((id) => id !== itemId)
        : [...prevItems, itemId]
    );
  };

  const renderItem = (item: {
    name: string;
    id: number;
    icon: string;
    path?: string;
    items?: { name: string; id: number; path?: string }[];
  }) => {
    const hasChildren = item.items && item.items.length > 0;
    const isOpen = openItems.includes(item.id);

    return (
      <div key={item.id}>
        <EuiListGroupItem
          size="s"
          iconType={item.icon}
          label={isExpanded ? item.name : ""}
          onClick={() => {
            if (hasChildren) {
              toggleItem(item.id);
            } else if (item.path) {
              navigate(item.path);
            }
          }}
          className={`sidebar-item ${isExpanded && hasChildren ? "with-children" : ""} ${
            isOpen ? "open" : ""
          }`}
        />
        {isExpanded &&
          hasChildren &&
          isOpen &&
          item.items!.map((childItem) => (
            <div key={childItem.id} className="sidebar-child">
              <EuiListGroupItem
                size="s"
                label={childItem.name}
                onClick={() => navigate(childItem.path || "/reports")}
                className="sidebar-item"
              />
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className={`sidebar-container ${isExpanded ? "expanded" : ""}`}>
      <div className="sidebar" style={{ width: isExpanded ? "200px" : "50px" }}>
        <div className="sidebar-content">{SideBarNavData.map(renderItem)}</div>
      </div>
    </div>
  );
};

export default SnoopUISideBar;
