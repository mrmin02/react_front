/**
 * 메인페이지
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function MainPage(props){

    return (
        <>
            <div id="main_container">
                <div className="main_visual">
                    <ul id="main_slide" className="slide">
                        <li><img src={require('resources/images/main/main_visual1.jpg')} alt="우도등대 (제주시)"/></li>
                        <li><img src={require('resources/images/main/main_visual2.jpg')} alt="독도의 자연"/></li>
                        <li><img src={require('resources/images/main/main_visual3.jpg')} alt="묵호등대(동해시)"/></li>
                        <li><img src={require('resources/images/main/main_visual4.jpg')} alt="소매물도등대-가는길(열목개-자갈길)"/></li>
                    </ul>
                    <div className="img_name">
                        <ul>
                        <li></li>
                        </ul>
                    </div>
                    <ul className="bullet">

                    </ul>

                    <div className="visual_menu">
                        <div className="visual_wrap">
                            <div className="btn">
                                {/*<a href="javascript:fn_lh_icon_slide_left()" title="왼쪽" className="left"><img*/}
                                {/*    src={require('resources/images/main/icon_arrow2.png')} alt="왼쪽"/></a>*/}
                                {/*<a href="javascript:fn_lh_icon_slide_right()" title="오른쪽" className="right"><img*/}
                                {/*    src={require('resources/images/main/icon_arrow1.png')} alt="오른쪽"/></a>*/}
                            </div>
                            <div className="slide_icon">
                                <ul id="lh_icon_slide">
                                    <li><a href="/html/odongdoLH" title="오동도등대"><p><img
                                        src={require('resources/images/main/main_odon.png')} alt=""/></p>오동도등대</a></li>
                                    <li><a href="/html/youngdoLH" title="영도등대"><p><img
                                        src={require('resources/images/main/main_youngdo.png')} alt=""/></p>영도등대</a></li>
                                    <li><a href="/html/ganjeolgotLH" title="간절곶등대"><p><img
                                        src={require('resources/images/main/main_gan.png')} alt=""/></p>간절곶등대</a></li>
                                    <li><a href="/html/seokchoLH" title="속초등대"><p><img
                                        src={require('resources/images/main/main_soakcho.png')} alt=""/></p>속초등대</a></li>
                                    <li><a href="/html/somaemuldoLH" title="소매물도등대"><p><img
                                        src={require('resources/images/main/main_somee.png')} alt=""/></p>소매물도등대</a></li>
                                    <li><a href="/html/udoLH" title="우도등대"><p><img
                                        src={require('resources/images/main/main_u-do.png')} alt=""/></p>우도등대</a></li>
                                    <li><a href="/html/palmidoLH" title="팔미도등대"><p><img
                                        src={require('resources/images/main/main_palmido.png')} alt=""/></p>팔미도등대</a></li>
                                    <li><a href="/html/woolgiLH" title="울기등대"><p><img
                                        src={require('resources/images/main/main_uk.png')} alt=""/></p>울기등대</a></li>
                                    <li><a href="/html/mookhoLH" title="묵호등대"><p><img
                                        src={require('resources/images/main/main_somee.png')} alt=""/></p>묵호등대</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*section*/}
                <div className="content">
                    <div id="section1">
                        <div className="section_wrap">
                            <div className="block1">
                                <div className="title">
                                    <h1>홍보영상</h1>
                                </div>
                                    <div className="no_video">
                                        <img src={require('resources/images/main/icon_novideo2.png')}/>
                                        <p>동영상 <strong>준비중</strong>입니다.</p>
                                    </div>
                            </div>
                            <div className="block2">
                                <div className="title tab">
                                    <ul>
                                        <li className="on"><a href="#none" title="공지사항">공지사항</a></li>
                                        <li><a title="전시" data-type="exhibition">오픈 갤러리</a></li>
                                        <li><a title="공연" data-type="performance">공연</a></li>
                                        <li className="camp"><a href="#none" title="등대캠프" data-type="camp">등대캠프</a></li>
                                        <li className="dapsa"><a href="#none" title="체험행사" data-type="activity">체험행사</a></li>
                                        <li className="ex"><a href="#none" title="공모" data-type="contest">공모</a></li>
                                    </ul>
                                    <a href="/article/notice/list" className="plus"><img
                                        src={require('resources/images/main/icon_plus.png')} alt="더하기 아이콘"/></a>
                                </div>
                                {/*공지사항*/}
                                <div className="tab_contents_s">
                                    <div>
                                    </div>
                                </div>
                                {/*공지사항*/}
                                {/*완라인 전시관*/}
                                <div className="con picture tab_contents_s" style={{display:"none"}}>
                                </div>
                                {/*완라인 전시관*/}
                                {/*공연*/}
                                <div className="con picture tab_contents_s" style={{display:"none"}}>
                                </div>
                                {/*공연*/}
                                {/*등대캠프*/}
                                <div className="con picture tab_contents_s" style={{display:"none"}}>
                                </div>
                                {/*등대캠프*/}
                                {/*체험행사*/}
                                <div className="con picture tab_contents_s" style={{display:"none"}}>
                                </div>
                                {/*체험행사*/}
                                {/*공모*/}
                                <div className="tab_contents_s" style={{display:"none"}}>
                                </div>
                                {/*공모*/}
                                {/*mobile_plus*/}
                                <p style={{textAlign: "center"  , marginTop:"20px"}}>
                                    <a href="/article/notice/list" className="m_plus">
                                        <span>더보기</span>
                                        <img src={require('resources/images/main/icon_plus.png')} alt="더보기 아이콘"/>
                                    </a>
                                </p>
                                {/*mobile_plus*/}
                            </div>
                        </div>
                        <div className="block3">
                            <div className="con_wrap">
                                <div className="ad">
                                    <h1>등대 숙소 이용 신청하기</h1>
                                    <p>관할 지방해양수산청 예약페이지를 새 창으로 엽니다.</p>
                                    <ul>
                                        <li className="gadok">
                                            <a href="https://www.portbusan.go.kr/content/contentView.do?MENU_ID=M0000130"
                                               title="가덕도등대" target="_blank" rel="external">가덕도등대</a>
                                        </li>
                                        <li className="moondo">
                                            <a href="https://yeosu.mof.go.kr/LighthouseAction.do?id=ins" title="거문도등대"
                                               target="_blank" rel="external">거문도등대</a>
                                        </li>
                                        <li className="gan">
                                            <a href="https://ulsan.mof.go.kr/ko/page.do?menuIdx=844" title="간절곶등대"
                                               target="_blank" rel="external">간절곶등대</a>
                                        </li>
                                        <li className="sookcho">
                                            <a href="https://donghae.mof.go.kr/content/view.do?menuKey=750&c0ntentKey=2298"
                                               title="속초등대" target="_blank" rel="external">속초등대</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*secltion1*/}
                </div>
                {/*section2*/}
                <div id="section2">
                    <div className="banner">
                        <ul id="banner_slide">
                            <li><a href="https://www.sanghun.go.kr" target="_blank" rel="external"><img
                                src={require('resources/images/main/200526_img1.jpg')} alt="external"/></a></li>
                            <li><a href="http://www.pipc.go.kr/cmpn/2020campaign.do" target="_blank" rel="external 캠페인"><img
                                src={require('resources/images/main/200526_img3.jpg')} alt="2020개인정보보호인식주간 캠페인"/></a></li>
                            <li><a href="http://ncov.mohw.go.kr" target="_blank" rel="external"><img
                                src={require('resources/images/main/co.jpg')} alt="신종코로나바이러스"/></a></li>
                            <li><a href="https://www.gov.kr" target="_blank" rel="external"><img
                                src={require('resources/images/main/rel1.jpg')} alt="대한민국정부"/></a></li>
                            <li><a href="http://www.mof.go.kr/index.do" target="_blank" rel="external"><img
                                src={require('resources/images/main/rel2.jpg')} alt="해양수산부"/></a></li>
                            <li><a href="https://www.lighthouse-museum.or.kr/kr" target="_blank" rel="external"><img
                                src={require('resources/images/main/rel3.jpg')} alt="국립등대박물관"/></a></li>
                            <li><a href="http://www.katon.or.kr" target="_blank" rel="external"><img
                                src={require('resources/images/main/rel4.jpg')} alt="한국항로표지기술원"/></a></li>
                            <li><a href="http://www.gov30.go.kr/gov30/index.do" target="_blank" rel="external"><img
                                src={require('resources/images/main/rel5.jpg')} alt="정부3.0"/></a></li>
                            <li><a href="https://www.ilovesea.or.kr/etc/wedday/list.do" target="_blank" rel="external"><img
                                src={require('resources/images/main/rel6.jpg')} alt="수요일엔 바다톡톡"/></a></li>
                        </ul>
                        <div className="btn">
                            <p className="txt">배너모음</p>
                            {/*<a onClick="fn_banner_slide_prev()"><img*/}
                            {/*    src={require('resources/images/main/rel_left.png')} alt="화살표 왼쪽버튼"/></a>*/}
                            {/*<a onClick="fn_banner_slide_action(this)" className="pause" data-status="pause"><img*/}
                            {/*    src={require('resources/images/main/rel_pause.png')} alt="정지버튼"/></a>*/}
                            {/*<a onClick="fn_banner_slide_next()"><img*/}
                            {/*    src={require('resources/images/main/rel_right.png')} alt="화살표 오른쪽버튼"/></a>*/}
                        </div>
                    </div>
                </div>
                {/*section2*/}
            </div>
        </>
    )
}

export default MainPage