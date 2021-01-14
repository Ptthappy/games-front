
import React, { ReactElement, useState } from "react"
import TabTitle from "./TabTitle"
import '../App.css';


const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="div-tab">
      <ul className="ul-tab">
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  )
}

export default Tabs