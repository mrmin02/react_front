import {useEffect} from "react";

/**
 * render site Sub Menu
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function SubMenu(props){
    return(
        <>
            <div className="header_wrap spinner">
                {
                    props.menuList && props.menuList.map( (menuList,idx) => {
                        return(
                            <ul className={"gnb con" + (idx+1)} key={idx}>
                                {
                                    menuList.map( (item, iidx) =>{
                                        if(item.menu_depth != "2"){
                                            return(
                                                <li key={iidx}><a href={item.menu_link} target={item.menu_link_type}>{item.menu_title}</a></li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SubMenu