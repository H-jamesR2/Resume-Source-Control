import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useCollapse } from 'react-collapsed';
import '../cssFiles/navbar.css';


function SidebarCollapseInfo(prop) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div {...getToggleProps()} className="collapse-wrapper">
            <div className="collapse-close">
                <FontAwesomeIcon icon={faCaretDown} className="collapse-icon" size="lg"/>
                {prop.data.position + ", " + prop.data.company}
            </div>
            <section {...getCollapseProps()} className="sidebar-text collapse-text">
                <div>Date Applied: {prop.data.submissionDate}</div>
                <div>Status: {prop.data.status}</div>
            </section>
        </div>
    );
}

export default SidebarCollapseInfo;