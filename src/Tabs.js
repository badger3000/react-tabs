import React, { useState } from 'react';
import './Tabs.css'; // Import the CSS for styling

function Tabs({ tabs }) {
  // State to keep track of the active tab index, default to the first tab (index 0)
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Handle tab click: update the active tab index
  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  // Ensure tabs array exists and is not empty
  if (!tabs || tabs.length === 0) {
    return <div>No tabs to display.</div>;
  }

  return (
    <div className="tabs-container">
      {/* Tab Buttons */}
      <div className="tab-list">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTabIndex ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
            {tab.image && (
              <div className="tab-icon-wrapper">
                <img src={tab.image} alt="" className="tab-icon" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Panel Content */}
      <div className="tab-panel">
        {/* Display the content of the currently active tab */}
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
