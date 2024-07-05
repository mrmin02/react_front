import axios from "axios";
import React, {useEffect, useState} from "react";
import TopMenu from "./menu/TopMenu";
import SubMenu from "./menu/SubMenu";
import MobileSubMenu from "./menu/MobileSubMenu";
import $ from 'jquery';
/**
 * Site Header
 * @returns {JSX.Element}
 * @constructor
 */
function SiteHeader() {

    const ROOT_URL = process.env.REACT_APP_BACKEND_URL;

    // 대메뉴
    const [topMenuList,setTopMenuList] = useState([]);

    // 전체메뉴
    const [menuList,setMenuList] = useState([]);

    useEffect(() => { //React.StrictMode 일 경우, 2번 호출 ( 개발에 편의를 위해서 react 에서 제공하는 .. app.js 참고 )
        getTopMenuList()
    }, []);
    // const test = await axios.get(ROOT_URL + "api/menu");

    async function getTopMenuList(){
        await axios.get(ROOT_URL + "api/menu/list").then(response=>{
            if(response.data.result){
                setTopMenuList(response.data.topMenu); // 대메뉴
                setMenuList(response.data.menu) // 전체 메뉴
            }else{
                console.log("메뉴정보를 가져오는 도중 오류가 발생했습니다.");
            }
        }).catch( error =>{
            // console.log(error.response);
            console.log("메뉴 정보 없음! 네트워크 상태를 확인해주세요.");
        });
    }

    function fn_mobile_menu_control_on() {

        console.log("call on");
        var element = $(".header_on");
        element.slideDown(1000);
        element.show();
        $("#mask").show();
        $("body").css({overflow:'hidden'});
    }
    function fn_mobile_menu_control_off() {
        var element = $(".header_on");
        element.hide();
        $("#mask").hide();
        $("body").css({overflow:'scroll'});
    }

    return (
        <>
            <div id="header">
                <div className="header_in">
                    <h1 className="logo"><a href="/"><img src={require('resources/images/layout/m_logo.png')}
                                                          alt="등대와바다 로고"/></a></h1>
                    <div className="gnb">
                        <ul>
                            <TopMenu topMenuList={topMenuList}/>
                        </ul>
                    </div>
                    <div className="sns">
                        <a href="https://pf.kakao.com/_xizajxj" title="카카오톡" target="_blank"
                           rel="noopener noreferrer"><img src={require('resources/images/layout/icon_kakao.png')}
                                                          alt="카카오톡"/></a>
                        <a href="https://cafe.naver.com/lighthousetour" title="네이버 카페" target="_blank"
                           rel="noopener noreferrer"><img src={require('resources/images/layout/icon_naver_cafe.png')}
                                                          alt="네이버 카페"/></a>
                        <a href="https://www.facebook.com/katon.or.kr" title="페이스북" target="_blank"
                           rel="noopener noreferrer"><img src={require('resources/images/layout/icon_facebook.png')}
                                                          alt="페이스북"/></a>
                        <a href="https://www.youtube.com/@lighthousemuseum" title="유투브" target="_blank"
                           rel="noopener noreferrer"><img src={require('resources/images/layout/icon_youtube.png')}
                                                          alt="유투브"/></a>
                    </div>
                </div>
                {/*헤더 온 됐을때*/}
                <div id="header_on" style={{display: "none"}}>
                    {/*1depth*/}
                    <div className="re_header">
                        <div className="header_in">
                            <h1 className="logo"><a href="/"><img src={require('resources/images/layout/logo.png')}
                                                                  alt="등대와바다 로고"/></a></h1>
                            <div className="gnb">
                                <ul>
                                    <TopMenu topMenuList={topMenuList}/>
                                </ul>
                            </div>
                            <div className="sns">
                                <a href="https://pf.kakao.com/_xizajxj" title="카카오톡" target="_blank"
                                   rel="noopener noreferrer"><img
                                    src={require('resources/images/layout/icon_kakao.png')}
                                    alt="카카오톡"/></a>
                                <a href="https://cafe.naver.com/lighthousetour" title="네이버 카페" target="_blank"
                                   rel="noopener noreferrer"><img
                                    src={require('resources/images/layout/icon_naver_cafe.png')}
                                    alt="네이버 카페"/></a>
                                <a href="https://www.facebook.com/katon.or.kr" target="_blank"
                                   rel="noopener noreferrer"><img
                                    src={require('resources/images/layout/icon_facebook.png')}
                                    alt="페이스북"/></a>
                                <a href="https://www.youtube.com/@lighthousemuseum" target="_blank"
                                   rel="noopener noreferrer"><img
                                    src={require('resources/images/layout/icon_youtube.png')}
                                    alt="유투브"/></a>
                            </div>
                        </div>
                    </div>
                    {/*1depth*/}

                    {/*2depth*/}
                    <div className="overlay_header">
                        <SubMenu menuList={menuList}/>
                    </div>
                    {/*2depth*/}
                </div>
                {/*헤더온됐을때 끝*/}
            </div>

            {/*모바일 헤더*/}
            <div className="header_m m_hidden">
                <div className="header_in">
                    <h1 className="logo"><a href="/sea" title="로고"><img src={require('resources/images/layout/m_logo.png')} /></a>
                    </h1>
                    <div className="menu">
                        <a href="https://pf.kakao.com/_xizajxj" title="카카오톡" target="_blank"
                           rel="noopener noreferrer"><img src={require('resources/images/layout/icon_kakao.png')} alt="카카오톡"/></a>
                        <a href="https://cafe.naver.com/lighthousetour" title="네이버 카페" target="_blank"><img
                            src={require('resources/images/layout/icon_naver_cafe.png')} alt="네이버 카페"/></a>
                        <a href="https://youtube.com/@lighthousemuseum" className="youtube" title="유투브" target="_blank"><img
                            src={require('resources/images/layout/icon_youtube.png')}/></a>
                        <a href="https://www.facebook.com/katon.or.kr" className="facebook" title="페이스북"
                           target="_blank"><img src={require('resources/images/layout/icon_facebook.png')}/></a>
                        <a onClick={() => fn_mobile_menu_control_on()} className="menu" title="메뉴아이콘"><img
                            src={require('resources/images/layout/m_menu.png')}/></a>
                    </div>
                </div>
                {/*mobile header on 됐을때*/}
                <div className="header_on" style={{display:"none"}}>
                    <div className="header_in">
                        <h1 className="logo"><a href="/"><img src={require('resources/images/layout/logo.png')}/></a></h1>
                        <a onClick={() => fn_mobile_menu_control_off()} className="menu close" title="닫기"><img
                            src={require('resources/images/layout/m_x.png')}/></a>
                    </div>
                    <div className="header_wrap">
                        <MobileSubMenu topMenuList={topMenuList} menuList={menuList}/>
                    </div>
                </div>
                {/*mobile header on 됐을때*/}
            </div>
        </>
    )
}

export default SiteHeader;