/**
 * 모바일 서브메뉴
 *
 * require  menuList , topMenuList
 * @param props
 * @constructor
 */
function MobileSubMenu(props) {
    return (
        <ul className="gnb">
            {
                props.topMenuList && props.topMenuList.map((topMenu, idx) => {
                    {
                        return (
                            <li key={idx}>
                                <a>{topMenu.menu_title}</a>
                                <ul className="depth2">
                                    {
                                        props.menuList[idx].map((twoDepth, iidx) => {
                                            return (
                                                <li key={iidx}>
                                                    <a href={twoDepth.menu_link} target={twoDepth.menu_link_type}
                                                       rel="next">{twoDepth.menu_title}</a>
                                                    {
                                                        twoDepth.sub_menu_list && twoDepth.sub_menu_list.map((threeDepth, iiidx) => {
                                                            return (
                                                                <div className="depth3" style={{display: "block"}} key={iiidx}>
                                                                    <a href={threeDepth.menu_link}
                                                                       target={threeDepth.menu_link_type}
                                                                       rel="next">{threeDepth.menu_title}</a>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    }
                })
            }
        </ul>
    )
}

export default MobileSubMenu