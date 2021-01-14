import React, { useCallback } from 'react';

const TabTitle = ({ title, setSelectedTab, selectedTab, index }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <li className="li-tab">
      <button className="btn-tab" style={selectedTab === index ? { 'backgroundColor': '#1c1c1c', 'fontWeight': 600 } : {}} onClick={onClick}>{title}</button>
    </li>
  )
}

export default TabTitle