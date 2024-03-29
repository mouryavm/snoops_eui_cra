import React, { useState } from "react";
import { EuiIcon, EuiListGroup, EuiListGroupItem } from "@elastic/eui";
import { SideBarNavData } from "./SideBarNavData";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

interface SnoopUISideBarProps {
  isExpanded: boolean;
}

const SnoopUISideBar: React.FC<SnoopUISideBarProps> = ({ isExpanded }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleItem = (itemId: number) => {
    if (itemId === -1) {
      setIsSettingsOpen((prevState) => !prevState);
    } else {
      setOpenItems((prevItems) =>
        prevItems.includes(itemId)
          ? prevItems.filter((id) => id !== itemId)
          : [...prevItems, itemId]
      );
    }
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
          icon={<EuiIcon type={item.icon} color="primary" />}
          label={item.name}
          color="primary"
          size="s"
        
          onClick={() => {
            if (item.id === -1) {
              toggleItem(-1); // Toggle settings item
            } else {
              toggleItem(item.id); // Toggle other items
            }
            if (!hasChildren && item.path) {
              navigate(item.path);
            }
          }}
          className={`sidebar-item ${isExpanded && hasChildren ? "with-children" : ""} ${
            isOpen ? "open" : ""
          } ${item.id === -1 ? "settings" : ""}`}
        />
        {isExpanded && hasChildren && isOpen && renderChildItems(item.items)}
      </div>
    );
  };

  const renderChildItems = (items?: { name: string; id: number; path?: string }[]) => {
    return (
      <EuiListGroup flush>
        {items?.map((childItem) => (
          <EuiListGroupItem
            key={childItem.id}
            color="primary"
            size="s"
            label={childItem.name}
            onClick={() => navigate(childItem.path || "/reports")}
            className="sidebar-item"
          />
        ))}
      </EuiListGroup>
    );
  };

  return (
    <div className={`sidebar-container ${isExpanded ? "expanded" : ""}`}>
      <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
        <div className="sidebar-content">
          <EuiListGroup flush>
            {SideBarNavData.map(renderItem)}
            {isExpanded && isSettingsOpen && renderChildItems([
              { name: "Profile", id: 1, path: "/profile" },
              { name: "Preferences", id: 2, path: "/preferences" }
            ])}
          </EuiListGroup>
        </div>
      </div>
    </div>
  );
};

export default SnoopUISideBar;
