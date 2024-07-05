import { Routes, Route } from 'react-router-dom';
import URL from "../constants/url";
import MainPage from "../pages/site/MainPage";
import MngBbsList from "../pages/mng/bbs/MngBbsList";
import SiteHeader from "../components/layouts/site/SiteHeader";
import SiteMobileHeader from "../components/layouts/site/SiteMobileHeader";
import SiteSubVisual from "../components/layouts/site/SiteSubVisual";
import SiteLnb from "../components/layouts/site/SiteLnb";
import SiteFooter from "../components/layouts/site/SiteFooter";
import ArticleList from "../pages/site/article/ArticleList";


/**
 * App.js 에서 사용..
 * 최상단 검사 및 세팅
 * @constructor
 */
const RootRoutes = () => {

    const requestPath = window.location.pathname;
    // 메인페이지
    let mainPage = false;
    // 사용자 페이지
    let sitePage = false;
    // 관리자 페이지
    let mngPage = false;

    if(requestPath === "/" || requestPath === "/main"){
        mainPage = true;
    }else if(requestPath.includes("/mng")){
        mngPage = true;
    }else{
        sitePage = true;
    }

    // 메인페이지
    if(mainPage){
        console.log("route MainPage");
        return(
            <Routes>
                <Route path="*" element={<MainRoutes/>} />
            </Routes>
        )
    }else if(sitePage){
        console.log("route UserPage");
        // 사용자 페이지
        return(
            <Routes>
                <Route path="*" element={<SiteRoutes/>} />
            </Routes>
        )
    }else if(mngPage){
        console.log("route AdminPage");
        // 관리자 페이지
        return(
            <Routes>
                <Route path="*" element={<MngRoutes/>} />
            </Routes>
        )
    }else{
        // 메인페이지로 이동
        window.location.href = "/main";
    }
}

/**
 * MainPage Router
 * @returns {JSX.Element}
 * @constructor
 */
const MainRoutes = () =>{
    return (
        <>
            <SiteHeader/>
            <SiteMobileHeader/>
            <Routes>
                <Route path="*" element={<MainPage />}/>
            </Routes>
            <SiteFooter/>
        </>
    )
}

/**
 * Site Router
 */
const SiteRoutes = () => {

    return (
        <>
            <SiteHeader/>
            <SiteMobileHeader/>
            <SiteSubVisual/>
            <div id="container">
                <SiteLnb/>
                <Routes>
                    {/* 게시판 리스트 */}
                    <Route path={URL.ARTICLE_LIST} element={<ArticleList />}/>
                </Routes>
            </div>
            <SiteFooter/>
        </>
    )
}

/**
 * Mng Router
 * @returns {JSX.Element}
 * @constructor
 */
const MngRoutes = () => {
    return (
        <>
            {/*<MngHeader />*/}
            <Routes>
                <Route path={URL.MNG_MAIN} element={<MngBbsList/>}/>
            </Routes>
            {/*<MngFooter />*/}
        </>
    )
}

export default RootRoutes