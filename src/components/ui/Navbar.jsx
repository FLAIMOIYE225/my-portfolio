import "./Navbar.css";
// import { useState } from "react";
import tabs from "../../constants/tabs";
import { useTranslation } from 'react-i18next';

const Navbar = ({activeTab, setActiveTab, setIsModalOpen}) => {
  const { t } = useTranslation();
  for (let tab of tabs) {
    if (tab.id == "contact") {
      tab.onClick = () => setIsModalOpen(true)
    }
  }

  return (
    <nav className="navbar">
      <ul className="tab-container">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={(e) => {
              setActiveTab(tab.id);
              e.currentTarget.querySelector("a").click()
              if (tab.onClick) {
                tab.onClick()
                console.log("DEBUG")
              }
            }}
          >
            <a 
              href={`#${tab.id}`}
            >
              {t(`navigation.${tab.translationKey}`)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
