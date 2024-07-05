import $ from 'jquery';

/**
 * Site Footer
 * @returns {JSX.Element}
 * @constructor
 */
function SiteFooter() {

    /**
     * 해당 요소로 시점 이동 (e : 셀렉터, s : 속도)
     * @param e
     * @param s
     */
    function fn_goFocus(e, s){
        $('html, body').animate({scrollTop : $(e).offset().top}, s);
    }

    return (
        <>
            <div id="footer">
                <div className="footer_wrap">
                    <h1><a href="/"><img src={require('resources/images/layout/footer_logo.png')} alt="푸터로고"/></a></h1>
                    <div className="con">
                        <ul className="mb20">
                            <li><a href="/html/use" title="이용안내">이용안내</a></li>
                            <li className="on"><a href="/html/privacyPolicy" title="개인정보처리방침">개인정보처리방침</a></li>
                            <li><a href="/html/copyright" title="저작권 정책">저작권 정책</a></li>
                            <li><a href="/html/email" title="이메일 무단수집 거부">이메일 무단수집 거부</a></li>
                        </ul>
                        <p><span>주소 :</span> 경북 포항시 남구 호미곶면 해맞이로 150번길 20 국립등대박물관 (우)37928</p>
                        <p className="tel"><span>TEL :</span> 054 ) 284 - 4857</p>
                        <p className="copyright mt5">Copyright ⓒKorea Association of Aids to Navigation. All right
                            reserved.</p>
                    </div>
                    <a onClick={()=>fn_goFocus($('#wrap'), 300)} className="top">
                        <p><img src={require('resources/images/main/icon_top.png')} alt="top 아이콘"/></p>
                        <p>TOP</p>
                    </a>
                </div>
            </div>
            <div id="mask"></div>
        </>
    )
}

export default SiteFooter;