import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import '../cssFiles/navbar.css';


function EditableBlocks(prop) {

    return (

        <div className="collapse-wrapper">
            {/* <div className="block-overlay">Add</div> */}
            <div >
                {/* <FontAwesomeIcon icon={faCaretDown} className="collapse-icon" size="lg"/> */}
                {prop.data.role + ", " + prop.data.name}
            </div>
            <section  className="sidebar-text collapse-text">
                <div>{prop.data.start_date} - {prop.data.end_date}</div>
            </section>
        </div>
    );
}

export default EditableBlocks;