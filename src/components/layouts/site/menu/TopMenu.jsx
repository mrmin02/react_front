import React, {useEffect} from "react";

/**
 * render site Top Menu
 * @param props
 * @returns {Element}
 * @constructor
 */
function TopMenu(props){
    return (
        <>
            {props.topMenuList && props.topMenuList.map( (item,idx) => {
                return (
                    <li key={idx}>
                        <a href={item.menu_link} target={item.menu_link_type} rel="next">{item.menu_title}</a>
                    </li>
                )
            })}
        </>
    )
}

export default TopMenu