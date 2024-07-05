import $ from 'jquery';
import axios from "axios";
import {useEffect, useState} from "react";

/**
 * Site Sub Visual
 * @returns {JSX.Element}
 * @constructor
 */
function SiteSubVisual() {

    const ROOT_URL = process.env.REACT_APP_BACKEND_URL;

    const [menuTopTree, setMenuTopTree] = useState([]);
    const [menuDownTree, setMenuDownTree] = useState([]);
    console.log("topTree : "+menuTopTree);
    console.log("DownTree : "+menuDownTree);
    useEffect( () =>{
        console.log("call useEffect");
        makeLeftMenuOrSubVisual();
    },[]);

    function makeLeftMenuOrSubVisual(){
        /**
         * Left 메뉴 생성
         */
        const split_url = ($(window.location).attr('protocol')+"//"+$(window.location).attr('host')+""+$(window.location).attr('pathname')).split("/");
        let menu_type = "";
        let menu_link = split_url[4];
        switch (split_url[3]) {
            case "html":        menu_type = "MNT_001"; menu_link = menu_link.startsWith('korea') ? "/html/koreaLH" : $(window.location).attr('pathname'); break;
            case "guide":       menu_type = "MNT_001"; menu_link = $(window.location).attr('pathname'); break;
            case "reservation": menu_type = "MNT_001"; menu_link = menu_link === "list" ? "/reservation/confirm" : $(window.location).attr('pathname'); break;
            case "info":        menu_type = "MNT_001"; menu_link = "/info/" + split_url[4] + "/list"; break;
            case "contest":     menu_type = "MNT_001"; menu_link = "/contest/list" ; break;
            case "article":     menu_type = "MNT_002"; break;
            case "honor" :  	menu_type = "MNT_001"; menu_link = "/honor/info";break;
            case "passport":
                //메뉴 3depth 대신 추가하는 if 문. ( 하드코딩.. )
                menu_type = "MNT_001";
                if(split_url[4] === "butInfo" || split_url[4] === "hisInfo" || split_url[4] === "funInfo" || split_url[4] === "richInfo" || split_url[4] === "healInfo"){
                    menu_link = "/passport";
                }else if(split_url[4] === "but" || split_url[4] === "his" || split_url[4] === "fun" || split_url[4] === "rich" || split_url[4] === "heal"){
                    menu_link = "/passport/"+split_url[5]+"/list";
                }else if(split_url[5] === "edit"){
                    menu_link = "/passport/giftForm/detail";
                }else{
                    menu_link = split_url[5]==="complete" ? menu_link === "apply" ? "/passport/apply" : "/passport/giftForm"  : $(window.location).attr('pathname');
                    break;
                }
        }
        if(split_url.reverse()[0] != 'main') {
            const data = {"menu_type": menu_type, "menu_link": menu_link};
            getMenuTopTree(data);
        }
    }


    async function getMenuTopTree(data){
            await axios.post(ROOT_URL+"api/menuUpTree",null,{params:data})
            .then((response)=>{
                if(response.data.result){
                    setMenuTopTree(response.data.list);
                    if($(window).width() > 768){
                        getMenuDownTree(response.data.list)
                    }else{
                        // 관련 status 값 두고 render 하기 [ 로케이션, 서브 타이틀, lnb 타이틀 삽입... ]
                    }
                }else{
                    // 데이터 get 실패
                }
            }).catch((error)=>{
                // 통신 오류 발생
            });
    }
    async function getMenuDownTree(topTreeList){
        await axios.post(ROOT_URL+"api/menuDownTree",{
            data: {"menu_seq": topTreeList[0].menu_seq}
        }).then((response)=>{
            if(response.data.result){
                setMenuDownTree(response.data.list);
            }
        }).catch((error)=>{
            // 통신 오류 발생
        });
    }

    return (
        <>
            {/* 서브 페이지 visual */}
            <div className="sub_visual">

            </div>
            {/* left 메뉴 */}
            <div className="lnb">
                <h2>
                    <p>

                    </p>
                    <img src={require('resources/images/sub/lnb_lighthouse.png')}/>
                </h2>
            </div>
        </>
    )
}

export default SiteSubVisual;