import React, { useState } from 'react';
import StikoPopup from './StikoPopup';

/**
 * @param element to display
 * @param immunisation data for popup to compare with stiko data
 * @param colors the color to spawn the cell with
 * @returns a td-element containing the immunizaition degree, 
 * some of which are clickable to view the stiko popup
 */
const SrTableCell = ({ element, immunisation, colors }) => {
    const [showPopUp, setShowPopUp] = useState(false);
    const switchPopUp = () => {
      setShowPopUp(s => !s);
    };

    return <td
        colSpan={element.t_end - element.t_start}
        className={"bg-" + colors}  >
        <button className="btn px-0" onClick={switchPopUp} >{element.name}</button>
        <span className="comment"> {element.desc}</span>
        {showPopUp
            ? <StikoPopup showPopUp={showPopUp} switchPopUp={switchPopUp} infos={immunisation} colors={colors} element={element} />
            : null}

    </td>;
}

export default SrTableCell;