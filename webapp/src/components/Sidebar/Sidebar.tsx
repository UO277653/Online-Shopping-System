import React from "react";
import "./Sidebar.css"
import { SidebarData } from "./SidebarData"

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return <li
                        key={key} 
                        className ="row" 
                        
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={() => (window.location.pathname = val.link)}>
                        {" "}
                        <div id="icon">{val.icon}</div> {" "}
                        
                    </li>
                }
                )}
            </ul>
        </div>

    )

}

export default Sidebar