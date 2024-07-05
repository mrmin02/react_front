import $ from "jquery";
// import {CKEDITOR} from 'public/assets/ckeditor/ckeditor';

/**
 * 팝업 오픈
 * @param url
 * @param title
 * @param w
 * @param h
 * @param option
 * @param id
 */
function fn_openPopup(url,title,w,h,option, id){
    var left = (window.screen.width/2-400)-(w/2);
    var top = (window.screen.height/2-190)-(h/2);
    var popId = "";
    if(id  != null && id != '' && id != undefined){
        popId = id;
    }
    if(false == fn_getCookie('idx'+id)){
        var target = window.open(url, 'open'+popId,"width="+w+",height="+h+",top="+top+","+"left="+left+","+option);
    }
}

/**
 * 테이블 모달 출력
 * @param id
 * @param header
 * @param cont
 */
function fn_openTableModal(id, header, cont, sFunc, dFunc, cFunc, px){
    $(id).find('.popup_info02').empty();
    $(id).find('.modalHeader').text('');
    $(id).find('.modalHeader').text(header);
    $(id).find('.popup_info02').append(cont);
    if(px != ''){
        $(id).find('.popup_info02').attr('style','width: '+px+';');
    }
    // 생성/수정
    if(cFunc != undefined && cFunc != ''){
        $(id).find('.btn_layer_blue').show();
        $(id).find('.btn_layer_blue').attr('href', 'javascript:'+cFunc);
    }
    // 닫기
    if(sFunc != undefined && sFunc != ''){
        $(id).find('.btn_layer_gray').show();
        $(id).find('.btn_layer_gray').attr('href', 'javascript:'+sFunc);
    }
    // 삭제
    if(dFunc != undefined && dFunc != ''){
        $(id).find('.btn_layer_red').show();
        $(id).find('.btn_layer_red').attr('href', 'javascript:'+dFunc);
    }
    $(id).show();
}

/**
 * 모달 닫기
 * @param id
 */
function fn_closeModal(id){
    $(id).hide();
}

/**
 * 알림모달 열기
 * @param id
 * @param header
 * @param msg
 */
function fn_openModal(id, header, msg){
    $(id+' .modal-title').text('');
    $(id+' .modal-body p').empty();
    $(id).append('<a class="modalBtn" data-toggle="modal" data-target="'+id+'" style="display: none;"></a>');
    $(id+' .modal-title').text(header);
    $(id+' .modal-body p').append(msg);
    $('.modalBtn').click();
    $('.modalBtn').remove();
}

/**
 * ALERT 모달 닫기 버튼 액션 커스텀가능
 * @param id
 * @param header
 * @param msg
 * @param script
 */
function fn_openCustomModal(id, header, msg, script){
    $(id).find('.modalHeader').text('');
    $(id).find('.icon_warning').text('');
    $(id).find('.modalHeader').text(header);
    $(id).find('.icon_warning').text(msg);
    $(id).find('#custom_lose_btn').attr('href', 'javascript:'+script+';');
    $(id).show();
}

/**
 * Confirm 모달 열기
 * @param id
 * @param header
 * @param msg
 * @param script
 */
function fn_openConfirmModal(id, header, msg, script){
    $(id+' .modal-title').text('');
    $(id+' .modal-body p').empty();
    $(id).append('<a class="modalBtn" data-toggle="modal" data-target="'+id+'" style="display: none;"></a>');
    $(id+' .modal-title').text(header);
    $(id+' .modal-body p').append(msg);
    $(id+' .btn-danger').attr('onclick', script);
    $('.modalBtn').click();
    $('.modalBtn').remove();
}

/**
 * 쿠키 존재유무 확인
 * @param cookieName
 * @returns {boolean}
 */
function fn_getCookie( cookieName ){
    var search = cookieName + "=";
    var cookie = document.cookie;
    if( cookie.length > 0 ) {
        var startIndex = cookie.indexOf( cookieName );
        if( startIndex != -1 ) {
            startIndex += cookieName.length;
            var endIndex = cookie.indexOf( ";", startIndex );
            if( endIndex == -1) endIndex = cookie.length;
            return unescape( cookie.substring( startIndex + 1, endIndex ) );
        } else  {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * 쿠키 저장
 * @param name
 * @param value
 * @param expiredays
 */
function fn_setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires="
        + todayDate.toGMTString() + ";";
}

/**
 * 유효성 검사 함수
 * @param e
 * @param msg
 */
function fn_isEmpty(e, msg) {
    if($('[name='+e+']').val() == "" || $('[name='+e+']').val() == undefined){
        $('[name='+e+']').focus();
        fn_openModal('#alertModal', '알림!', msg);
        return false;
    }else{
        return true;
    }
}

/**
 * 유효성 검사 함수
 * @param e
 * @param msg
 */
function isEmpty(e, msg) {
    if($('[name='+e+']').val() == "" || $('[name='+e+']').val() == undefined){
        $('[name='+e+']').focus();
        alert(msg);
        return false;
    }else{
        return true;
    }
}

/**
 * OnluNumber // onkeydown="return fn_onlyNumber(event)" onkeyup="fn_removeChar(event)"
 * @param event
 * @returns {Boolean}
 */
function fn_onlyNumber(event){
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 9 || keyID == 46 || keyID == 37 || keyID == 39 )
        return;
    else
        return false;
}

/**
 * RemoveChar
 * @param event
 */
function fn_removeChar(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ( keyID == 8 || keyID == 9 || keyID == 46 || keyID == 37 || keyID == 39 )
        return;
    else
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

/**
 * 이메일 입력 검증
 * 사용예 if(fn_checkEmail('emailName'))
 * 일치하면 true 일치하지않으면 false
 * @param e
 * @returns {boolean}
 */
function fn_checkEmail(e){
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test($('[name='+e+']').val());
}

/**
 * 공통코드에서 메일 사용시 도메인 SET..
 * @param e : this
 * @param t : 도메인 입력부분 객체 name
 */
function fn_setDomain(e, t){
    if($(e).val() == 'email_di'){
        $(t).val('');
        $(t).attr('readonly', false);
        $(t).focus();
    }else{
        $(t).val($(e).val());
        $(t).attr('readonly', true);
    }
}

/**
 * 객체 name, value로 라디오버튼을 check한다.
 * @param name
 * @param value
 */
function fn_checkRadioValue(name, value){
    $('input:radio[name='+name+']:input[value="'+value+'"]').prop("checked", true).change();
}

/**
 * 객체 name, value로 SELECT 태그의 값을 지정한다.
 * @param name
 * @param value
 */
function fn_setSelectValue(name, value){
    $('[name='+name+'] option').each(function(){
        if($(this).val()==value){
            $(this).prop("selected",true);
        }else{
            $(this).prop("selected",false);
        }
    });
}

/**
 * 객체 name, value로 CHECKBOX 태그의 값을 지정한다.
 * @param name
 * @param value
 */
function fn_setCheckValue(name, value){
    var param = value;
    var bol = true;
    if(param.indexOf(',') != -1){
        param = param.split(',');
        bol = false;
    }
    $('[name='+name+']').each(function(idx, val){
        if(bol){
            if($(this).val()==param){
                $(this).attr("checked","checked");
            }
        }else{
            param.forEach(function(v, i){
                if($(val).val()==v){
                    $(val).attr("checked","checked");
                }
            });
        }
    });
}

/**
 * 비밀번호 확인
 * @param e
 * @param t
 * @returns {boolean}
 */
function fn_checkPwd(e, t){
    if($('[name='+e+']').val() == $('[name='+t+']').val()){
        return true;
    }else{
        alert('패스워드 확인값이 일치하지 않습니다.');
        $('[name='+t+']').focus();
        return false;
    }
}

/**
 * 비밀번호 확인 (모달)
 * @param e
 * @param t
 * @param id
 * @param msg
 * @returns {boolean}
 */
/*function fn_checkPwd(e, t, id, msg){
    if($('[name='+e+']').val() == $('[name='+t+']').val()){
        return true;
    }else{
        fn_openModal(id, '확인하세요!', msg);
        $('[name='+t+']').focus();
        return false;
    }
}*/

/**
 * 이미지 미리보기
 * @param path
 * @param filename
 * @param idx
 * @param flag : d = 개발, s = 운영
 */
function fn_viewImage(e, path){
    var src = path;
    $('.preview').remove();
    $(e).append("<span class='preview'><img src='"+src+"' width='180%' height='180%'/></span>");
    $('.preview')
        .css('z-index', '9999')
        .css('position', 'absolute')
        .css('border', '0px solid #ccc')
        .css('padding', '1px')
        .css('top', ($(e).pageY - 10) + 'px')
        .css('left', ($(e).pageX + 30) + 'px');
    $(e).attr('onclick', "fn_removePreviewImage(this, '"+path+"');");
}

/**
 * 이미지 미리보기 제거
 * @param src
 * @param idx
 */
function fn_removePreviewImage(e, path){
    $(e).attr('onclick', "fn_viewImage(this, '"+path+"')");
    $('.preview').remove();
}

/**
 * 배너 미리보기 (배너개제위치 URL / BANNER_SEQ / TARGET_ID(새창))
 * @param action
 * @param seq
 * @param targetId
 */
function fn_goPreview(action, seq, targetId){
    var form = $('<form></form>');
    form.attr('action', action);
    form.attr('method', 'post');
    form.attr('target', targetId);
    form.appendTo('body');
    var banner_seq = $('<input value="'+seq+'" name="banner_seq" type="hidden">');
    form.append(banner_seq);
    window.open('', targetId);
    form.submit();
}

/**
 * 달력세팅 (범위지정)
 * @param startDate
 * @param endDate
 */
function fn_setRageDatePicker(startDate,endDate){
    var setRange = 'c-70:c+10';
    $(startDate).datepicker({
        dateFormat: 'yy-mm-dd',
        buttonImageOnly: false,
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        changeMonth: true,
        changeYear: true,
        yearRange: setRange,
        onSelect: function( selectedDate ) {
            $(endDate).datepicker( "option", "minDate", selectedDate );
        }
    });


    $(endDate).datepicker({
        dateFormat: 'yy-mm-dd',
        buttonImageOnly: false,
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        changeMonth: true,
        changeYear: true,
        yearRange: setRange,
        onSelect: function( selectedDate ) {
            $(startDate).datepicker( "option", "maxDate", selectedDate );
        }
    });


}

/**
 * 달력 세팅
 * @param tNm
 * @param range
 * @param noBtn
 * @returns {string}
 */
function fn_setjQDatepicker(tNm, range, noBtn, lang){
    var setRange = 'c-70:c+10';
    if(range != '' && range != null){
        setRange = range;
    }

    var rtnVal = "";

    if(lang == 'ko'){
        if(noBtn == 'Y'){
            rtnVal = $("input[name="+tNm+"]").datepicker({
                dateFormat: 'yy-mm-dd',
                prevText: '이전 달',
                nextText: '다음 달',
                monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                dayNames: ['일','월','화','수','목','금','토'],
                dayNamesShort: ['일','월','화','수','목','금','토'],
                dayNamesMin: ['일','월','화','수','목','금','토'],
                showMonthAfterYear: true,
                yearSuffix: '년',
                changeMonth: true,
                changeYear: true,
                yearRange: setRange,
                onClose: function( selectedDate ) {
                    $("[name=searchDateEnd]").datepicker( "option", "minDate", selectedDate );
                }
            });
        }else{
            rtnVal = $("input[name="+tNm+"]").datepicker({
                dateFormat: 'yy-mm-dd',
                showOn: 'button',
                buttonImage: '/images/sub/cal_btn.gif', //달력 아이콘 이미지 경로
                buttonImageOnly: true,
                buttonText: "달력",
                prevText: '이전 달',
                nextText: '다음 달',
                monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                dayNames: ['일','월','화','수','목','금','토'],
                dayNamesShort: ['일','월','화','수','목','금','토'],
                dayNamesMin: ['일','월','화','수','목','금','토'],
                showMonthAfterYear: true,
                yearSuffix: '년',
                changeMonth: true,
                changeYear: true,
                yearRange: setRange
            });

        }
    }else if(lang == 'en'){
        if(noBtn == 'Y'){
            rtnVal = $("input[name="+tNm+"]").datepicker({
                dateFormat: 'yy-mm-dd',
                prevText: 'previous month',
                nextText: 'next month',
                monthNames: ['Janyary','February','March','April','May','June','July','August','September','October','November','December'],
                monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
                dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
                dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
                showMonthAfterYear: true,
                yearSuffix: '',
                changeMonth: true,
                changeYear: true,
                yearRange: setRange,
                onClose: function( selectedDate ) {
                    $("[name=searchDateEnd]").datepicker( "option", "minDate", selectedDate );
                }
            });
        }else{
            rtnVal = $("input[name="+tNm+"]").datepicker({
                dateFormat: 'yy-mm-dd',
                showOn: 'button',
                buttonImage: '/images/sub/cal_btn.gif', //달력 아이콘 이미지 경로
                buttonImageOnly: true,
                buttonText: "달력",
                prevText: '이전 달',
                nextText: '다음 달',
                monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                dayNames: ['일','월','화','수','목','금','토'],
                dayNamesShort: ['일','월','화','수','목','금','토'],
                dayNamesMin: ['일','월','화','수','목','금','토'],
                showMonthAfterYear: true,
                yearSuffix: '년',
                changeMonth: true,
                changeYear: true,
                yearRange: setRange
            });

        }
    }
    $("input[name="+tNm+"]").attr('readonly', 'readonly');
    //$("input[name="+tNm+"]").css({'width':'90px', 'background':'white'});
    //var tVal = $("input[name="+tNm+"]").val();
    $("input[name="+tNm+"]").val(fn_setDateFormatYYYYMMDD(rtnVal));

    return rtnVal;
}


/**
 * 달력 세팅
 * @param tNm
 * @param range
 * @param noBtn
 * @returns {string}
 */
function fn_setjQDatepicker2(tNm, range, noBtn){
    var setRange = 'c-70:c+10';
    if(range != '' && range != null){
        setRange = range;
    }

    var rtnVal = "";

    if(noBtn == 'Y'){
        rtnVal = $("input[name="+tNm+"]").datepicker({
            dateFormat: 'yy-mm-dd',
            prevText: '이전 달',
            nextText: '다음 달',
            monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            dayNames: ['일','월','화','수','목','금','토'],
            dayNamesShort: ['일','월','화','수','목','금','토'],
            dayNamesMin: ['일','월','화','수','목','금','토'],
            showMonthAfterYear: true,
            yearSuffix: '년',
            changeMonth: true,
            changeYear: true,
            yearRange: setRange,
            onClose: function( selectedDate ) {
                $("[name=searchDateEnd]").datepicker( "option", "minDate", selectedDate );
            }
        });
    }else{
        rtnVal = $("input[name="+tNm+"]").datepicker({
            dateFormat: 'yy-mm-dd',
            showOn: 'button',
            buttonImage: '/images/sub/cal_btn.gif', //달력 아이콘 이미지 경로
            buttonImageOnly: true,
            buttonText: "달력",
            prevText: '이전 달',
            nextText: '다음 달',
            monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            dayNames: ['일','월','화','수','목','금','토'],
            dayNamesShort: ['일','월','화','수','목','금','토'],
            dayNamesMin: ['일','월','화','수','목','금','토'],
            showMonthAfterYear: true,
            yearSuffix: '년',
            changeMonth: true,
            changeYear: true,
            yearRange: setRange
        });

    }

    $("input[name="+tNm+"]").attr('readonly', 'readonly');
    //$("input[name="+tNm+"]").css({'width':'90px', 'background':'white'});
    //var tVal = $("input[name="+tNm+"]").val();
    //$("input[name="+tNm+"]").val(fn_setDateFormatYYYYMMDD(tVal));

    return rtnVal;
}



/**
 * 달력 세팅 (시간)
 * 사용 할 페이지에 아래 script/css import 하셔야 합니다.
 * <script src="/js/jquery-ui-timepicker-addon.js"></script>
 * <link rel="stylesheet" href="/css/jquery/jquery-ui-timepicker-addon.css"/>
 * @param tNm
 * @param range
 * @param minDateYN
 * @param minDate
 * @returns {string}
 */
function fn_setjQDateTimePicker(tNm, range, minDateYN, minDate){
    var setRange = 'c-70:c+10';
    if(range != '' && range != null){
        setRange = range;
    }

    var rtnVal = "";

    if(minDateYN == 'Y'){
        rtnVal = $("input[name="+tNm+"]").datetimepicker({
            dateFormat: 'yy-mm-dd',
            prevText: '이전 달',
            nextText: '다음 달',
            monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            dayNames: ['일','월','화','수','목','금','토'],
            dayNamesShort: ['일','월','화','수','목','금','토'],
            dayNamesMin: ['일','월','화','수','목','금','토'],
            showMonthAfterYear: true,
            yearSuffix: '년',
            changeMonth: true,
            changeYear: true,
            yearRange: setRange,
            minDate: minDate,
            // timepicker 설정
            timeFormat:'HH:mm:ss',
            controlType:'select',
            oneLine:true
        });
    }else{
        rtnVal = $("input[name="+tNm+"]").datetimepicker({
            dateFormat: 'yy-mm-dd',
            prevText: '이전 달',
            nextText: '다음 달',
            monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            dayNames: ['일','월','화','수','목','금','토'],
            dayNamesShort: ['일','월','화','수','목','금','토'],
            dayNamesMin: ['일','월','화','수','목','금','토'],
            showMonthAfterYear: true,
            yearSuffix: '년',
            changeMonth: true,
            changeYear: true,
            yearRange: setRange,
            // timepicker 설정
            timeFormat:'HH:mm:ss',
            controlType:'select',
            oneLine:true
        });

    }

    $("input[name="+tNm+"]").attr('readonly', 'readonly');
    //$("input[name="+tNm+"]").css({'width':'90px', 'background':'white'});
    //var tVal = $("input[name="+tNm+"]").val();
    //console.log(tVal);
    //$("input[name="+tNm+"]").val(fn_setDateFormatYYYYMMDD(tVal));

    return rtnVal;
}

/**
 * 시간설정
 * @param tNm
 * @returns {jQuery}
 */
function fn_setTime(tNm){
    var rtnVal = $('[name='+tNm+']').timepicki({
        show_meridian:false
    });
    return rtnVal;
}

function fn_setDateFormatYYYYMMDD(sDate){
    var sRtnDate = "";
    if(sDate != null && sDate != undefined){
        sDate = sDate.replace(/[^0-9]/g, "");
        if(sDate.toString().length == 8){
            sRtnDate = sDate.substring(0,4)+"-"+sDate.substring(4,6)+"-"+sDate.substring(6,8);
        }
    }

    return sRtnDate;
}

/**
 * file을 객체로 받아 이미지를 SET해준다. 용량 및 확장자 지원
 * isnull : Y / 널허용 : N / 널허용안됨.
 * @param e
 * @param isnull
 * @returns {boolean}
 */
function fn_setImage(e, isnull){
    var fileSize = '10';
    var fileForm = e;
    if(fileForm.files[0] == null){
        return false;
    }else if((fileForm.files[0].size / 1024 / 1024 ) > Number(fileSize)){
        alert('첨부파일 용량을 확인해주세요! 최대 '+fileSize+'MB까지 업로드 가능합니다.');
        $(e).val('');
        return false;
    }else if($(e).val() != ''){
        var file = $(e).val();
        if (file != "") {
            if($(e).val().indexOf(' ') > -1){
                alert('파일명에는 공백이 들어 갈 수 없습니다.');
                $(e).val('');
                return false;
            }
            var fileExt = file.substring(file.lastIndexOf('.') + 1).toLowerCase();
            var reg = 'png,jpg,jpeg,gif,bmp';
            if (reg != '' && reg.indexOf(fileExt) == -1) {
                alert('첨부파일은 ['+reg+'] 확장자만 가능합니다.');
                $(e).val('');
                return false;
            }else{
                var seq = new Date().getTime();
                $(e).parent().children('img').remove();
                var fr = new FileReader();
                fr.readAsDataURL(e.files[0]);
                fr.onload = function(){
                    var fileName = '';
                    if(fn_checkBrowser()){
                        fileName = $(e).val().split('\\')[$(e).val().split('\\').length-1];
                    }else{
                        fileName = $(e).val().split('\\')[2];
                    }
                    $(e).parent().prepend("<a href='#' class='preview"+seq+"' onclick='fn_viewImage(this, \""+fr.result+"\");'>"+fileName+"</a> ");
                };
                if(isnull != undefined || isnull == 'N'){
                    $(e).attr('data-parsley-required', true);
                }
                $(e).parent().find('.btn-file').empty();
                $(e).parent().find('.btn-file').append('수정하기');
                $(e).parent().find('.btn-file').attr('onclick', 'fn_removeImage(this, '+seq+', \''+isnull+'\')');
            }
        }
    }
}

/**
 * setImage를 통해 등록한 이미지를 지우고, 원래의 상태로 되돌린다.
 * @param t
 * @param f
 */
function fn_removeImage(e, seq, isnull){
    $(e).parent().children('.preview'+seq).remove();
    $(e).next().val('');
    $(e).text('등록하기');
    $(e).attr('onclick', 'javascript:$(this).next().click(); void 0');
    if(seq != undefined && seq != '' && seq.length < 12){
        $(e).parent().append('<input type="hidden" name="del_file_seq" value="'+seq+'"/>');
    }
    if($('[name=file]').length > 1){
        $(e).text('등록하기');
        $(e).attr('onclick', 'javascript:$(this).next().click(); void 0');
        $(e).parent().find('input[name=file]').val('');
        $(e).prev().remove();
        //$(e).parent().children().not('[name=del_file_seq]').remove();
    }
    if($('[name=file]').length == 1){
        if(isnull != undefined || isnull == 'N'){
            $(e).parent().find('[name=file]').attr('data-parsley-required', true);
        }
    }
}

/**
 * file tag 파일 이름 GET
 * @param e
 * @returns {*}
 */
function fn_getFileName(e){
    if(fn_checkBrowser()){
        return $(e).val().split('\\')[$(e).val().split('\\').length-1];
    }else{
        return $(e).val().split('\\')[2];
    }
}

/**
 * 파일추가 등록 폼 생성
 * @param target
 */
function fn_setFileForm(target){
    $(target).parent().find('.delBtn').remove();
    $(target).last().after('' +
        '<br/>' +
        '<div class="fileinput">' +
        '    <span class="btn btn-info btn-file" onclick="$(this).next().click(); void 0">' +
        '        등록하기\n' +
        '    </span>\n' +
        '    <input name="file" type="file" onchange="fn_setImage(this, \'N\');"' +
        '\n' +
        '</div>');
    $(target).each(function(i, v){
        if($(v).find('[name=file]').length > 0){
            $(v).after('<span class="delBtn"> <a href="#none" onclick="javascript:fn_delFileForm(this);" class="btn btn-xs btn-danger" title="">x</a></span>');
        }
    });
}

/**
 * 파일추가 등록 폼 삭제
 * @param e
 */
function fn_delFileForm(e, seq, lang, isnull){
    if(seq != undefined && seq != '' && seq.length < 12){
        $(e).parent().prev().append('<input type="hidden" name="del_file_seq" value="'+seq+'"/>');
    }
    $(e).parent().next('br').remove();
    if($('[name=file]').length > 1){
        $(e).parent().prev().children().not('[name=del_file_seq]').remove();
        $(e).parent().remove();
    }else if($('[name=file]').length == 1){
        if(lang === 'en') {
            var text = "file upload";
        }else {
            var text = "등록하기"
        }
        if(isnull != undefined || isnull == 'N'){
            $('[name=file]').attr('data-parsley-required', true);
        }
        $(e).parent().prev().find('span').text(text);
        $(e).parent().prev().find('span').attr('onclick', 'javascript:$(this).next().click(); void 0');
        $(e).parent().prev().find('span').next('input[name=file]').val('');
        $(e).parent().prev().find('span').prev().remove();
        $(e).parent().remove();
    }
}

/**
 * 첨부된 파일을 등록처리한다.
 * @param e
 */
function fn_setFile(e){
    if(fn_changeFile(e)){
        var fileName = '';
        if(fn_checkBrowser()){
            fileName = $(e).val().split('\\')[$(e).val().split('\\').length-1];
        }else{
            fileName = $(e).val().split('\\')[2];
        }
        $(e).next('img').remove();
        $(e).prev('span').append(fileName);
        $('#'+$(e).attr('name')).text('초기화');
        $('#'+$(e).attr('name')).attr('href', 'javascript:fn_removeFile("'+$(e).attr('name')+'"); void 0');
    }
}

/**
 * 첨부된 파일을 등록처리한다.
 * @param e
 */
function fn_setFiles(e){
    if(fn_changeFile(e)){
        var fileName = '';
        if(fn_checkBrowser()){
            fileName = $(e).val().split('\\')[$(e).val().split('\\').length-1];
        }else{
            fileName = $(e).val().split('\\')[2];
        }
        $(e).next('img').remove();
        $(e).prev('span').append(fileName);
        $('#'+$(e).attr('id')).text('초기화');
        $('#'+$(e).attr('id')).attr('href', 'javascript:fn_removeFiles("'+$(e).attr('id')+'"); void 0');
    }
}

/**
 * 첨부된 파일을 삭제한다.
 * @param t
 */
function fn_removeFile(t){
    $('#'+t).next().empty();
    $('#'+t).next().text('');
    $('#'+t).next().next().val('');
    $('#'+t).text('등록하기');
    $('#'+t).attr('href', 'javascript:$("[name='+t+']").click(); void 0');
}

/**
 * 첨부된 파일을 삭제한다.
 * @param t
 */
function fn_removeFiles(t){
    $('#'+t).next().empty();
    $('#'+t).next().text('');
    $('#'+t).next().next().val('');
    $('#'+t).text('등록하기');
    $('#'+t).attr('href', 'javascript:$("[id='+t+']").click(); void 0');
}

/**
 * 파일을 교체한다.
 * @param e
 * @returns {boolean}
 */
function fn_changeFile(e){
    var fileSize = '20';
    var fileForm = e;
    if(fileForm.files[0] == null){
        return false;
    }else if((fileForm.files[0].size / 1024 / 1024 ) > Number(fileSize)){
        alert('첨부파일 용량을 확인해주세요! 최대 '+fileSize+'MB까지 업로드 가능합니다.');
        $(e).val('');
        return false;
    }else if($(e).val() != ''){
        var file = $(e).val();
        if (file != "") {
            if($(e).val().indexOf(' ') > -1){
                alert('파일명에는 공백이 들어 갈 수 없습니다.');
                $(e).val('');
                return false;
            }
            var fileExt = file.substring(file.lastIndexOf('.') + 1).toLowerCase();
            var reg = 'png,jpg,gif,jpeg,GIF,JPG,PNG,JPEG,pdf,PDF,zip,ZIP,xls,XLS,xlsx,XLSX';
            if (reg != '' && reg.indexOf(fileExt) == -1) {
                alert('첨부파일은 ['+reg+'] 확장자만 가능합니다.');
                $(e).val('');
                return false;
            }else{
                return true;
            }
        }
    }
}

/**
 * 엑셀파일 업로드
 * @param e
 * @returns {boolean}
 */
function fn_changeExcel(e){
    var fileSize = '20';
    var fileForm = e;
    if(fileForm.files[0] == null){
        return false;
    }else if((fileForm.files[0].size / 1024 / 1024 ) > Number(fileSize)){
        alert('첨부파일 용량을 확인해주세요! 최대 '+fileSize+'MB까지 업로드 가능합니다.');
        $(e).val('');
        return false;
    }else if($(e).val() != ''){
        var file = $(e).val();
        if (file != "") {
            if($(e).val().indexOf(' ') > -1){
                alert('파일명에는 공백이 들어 갈 수 없습니다.');
                $(e).val('');
                return false;
            }
            var fileExt = file.substring(file.lastIndexOf('.') + 1).toLowerCase();
            var reg = 'xlsx,xlsm,xlsb,xlsb,xltx,xltxm,xls,xlt,xml,xlam';
            if (reg != '' && reg.indexOf(fileExt) == -1) {
                alert('첨부파일은 ['+reg+'] 확장자만 가능합니다.');
                $(e).val('');
                return false;
            }else{
                return true;
            }
        }
    }
}

/**
 * 인터넷 브라우저 확인
 * IE : true , 나머지 : false
 * @returns {boolean}
 */
function fn_checkBrowser(){
    var agent = navigator.userAgent.toLowerCase();
    if((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)){
        return true;
    }else{
        return false;
    }
}

/**
 * 이전 페이지로 이동
 * @param url
 * @param params
 */
function fn_goPrev(url, params){
    window.location.href = url+params;
}

/**
 * 프린트 출력 (e : jquery 객체, title : 문서제목)
 * @param e
 * @param title
 */
function fn_goPrint(e, title){
    $(e).printThis({
        debug: false,
        importCSS: true,
        printContainer: true,
        pageTitle: title,
        removeInline: false
    });
}

/**
 * 다음 우편번호 API
 * @param zipObj : 우편번호 입력 대상 Obj Name
 * @param addrObj : 기본주소 입력 대상 Obj Name
 * @param target : 포커스 Obj Name
 */
/*if (document.location.protocol == 'http:') {
    $('head').append('<script src="//dmaps.daum.net/map_js_init/postcode.v2.js"><\/script>');
}else{
    $('head').append('<script src="https://spi.maps.daum.net/imap/map_js_init/postcode.v2.js"><\/script>');
}*/

// function fn_setPostCode(zipObj, addrObj, target){
//     daum.postcode.load(function(){
//         new daum.Postcode({
//             oncomplete: function(data) {
//
//                 $("[name="+zipObj+"]").val(data.zonecode);
//
//                 var jibun = data.jibunAddress;
//                 var auto_jibun = data.autoJibunAddress;
//                 if(jibun == ""){
//                     $("[name="+addrObj+"]").val(data.autoJibunAddress);
//                 }else{
//                     $("[name="+addrObj+"]").val(data.jibunAddress);
//                 }
//
//                 $('[name='+target+']').focus();
//             }
//         }).open();
//     });
// }

/**
 * 엑셀 다운로드
 * @param url
 * @param e
 */
function fn_goExcel(url, e, formName){
    console.log("엑셀다운로드");
    if($(e).length == 0){
        fn_openModal("#alertModal", "알림!", "엑셀로 출력 할 데이터가 없습니다.");
    }else{
        console.log(formName)
        console.log("--1--");
        var action = $('[name='+formName+']').attr('action');
        $('[name='+formName+']').attr('action', url);
        $('[name='+formName+']').attr('target', '_blank');
        console.log("--22--");
        $('[name='+formName+']').submit();

        console.log("--33--");
        $('[name='+formName+']').attr('action', action);
        $('[name='+formName+']').attr('target', '');
        console.log("--44--");
    }
}

/**
 * 코드를 검색하여 NAME값을 반환
 * @param cd
 * @returns {string}
 */
function fn_getCodeName(cd){
    var rtnVal = '';
    $.ajax({
        url:'/ajax/system/code/text',
        type: 'post',
        data: {code: cd},
        success:function(res){
            if(res == null || res == ''){
                rtnVal = '검색된 코드가 없습니다.';
            }else{
                rtnVal = res;
            }
        }
    });
    return rtnVal;
}

/**
 * javascript 페이징
 * @param type
 * @param href
 * @param pageIndex
 * @param totalCount
 * @param countList
 * @param countPage
 * @returns {string}
 */
function fn_getPaging(type, pageIndex, totalCount, countList, countPage){
    var rtnStr = '';
    var type = type; // 관리자 / 사용자 여부
    var startPage = 0; // 시작페이지
    var endPage = 0; // 끝페이지
    var totalPage = 0; // TEMP
    var pageIndex = pageIndex; // pageIndex 현재 페이지
    var totalCount = totalCount; // totalCount 전체 페이지
    var countList = countList; // countList 한 페이지당 게시물 수
    var countPage = countPage; // countPage 페이징 출력 페이지 수
    var searchParam; // params...
    // 총 페이지 입력.. 전체 게시글 수 / 페이지당 게시글 수
    totalPage = Math.ceil(totalCount / countList);
    // 만약 전체 게시글수가 위에서 나눈값보다 많다면 (정수형이기 때문에 오차발생)
    if (totalCount > countList * totalPage) {
        // +1 보정
        totalPage++;
    }
    // 시작페이지 설정 (페이징 출력 시작 수)
    // 출력페이지와 현재페이지를 나누고, 출력페이지를 곱해준다.
    // 현재페이지가 5, 출력페이지가 10일경우 0이 시작페이지가 된다.
    startPage = Math.floor(((pageIndex - 1) / countPage)) * countPage + 1;
    // 종료페이지 설정 (페이징 출력 종료 수)
    // 현재페이지 15 시작페이지 10 출력페이지가 10일경우 20노출..
    endPage = startPage + countPage - 1;
    // 만약 마지막페이지가 총 페이지수보다 많다면
    if (endPage > totalPage) {
        // 보정
        endPage = totalPage;
    }

    if (type == 'mng') {
        rtnStr += "<div id=\"totalPage\" class=\"pagination\">";
        rtnStr += "<div class=\"paging mgTop30\">";
        if (pageIndex != 1) {
            rtnStr += "<span class=\"btn\"><a href=\"" + "javascript:fn_goSearch(1);" + "\" class=\"first\" title=\"맨처음페이지\">목록 처음으로 이동</a></span>";
        }
        if (pageIndex > 1) {
            rtnStr += "<span class=\"btn\"><a href=\"" + "javascript:fn_goSearch("+(Number(pageIndex) - 1)+");" + "\" class=\"prev\" title=\"맨처음페이지\">이전 페이지로 이동</a></span>";
        }
        for (var i = startPage; i <= endPage; i++) {
            if (i == pageIndex) {
                rtnStr += "<span class=\"num\"><a class=\"on\">" + i + "</a></span>";
            } else {
                rtnStr += "<span class=\"num\"><a href=\"" + "javascript:fn_goSearch("+i+")" + "\">" + i + "</a></span>";
            }
        }
        if (pageIndex < totalPage) {
            rtnStr += "<span class=\"btn\"><a href=\"" + "javascript:fn_goSearch("+(Number(pageIndex)+1)+")" + "\" class=\"next\" title=\"다음리스트\">다음 페이지로 이동</a></span>";
        }
        if (pageIndex != totalPage && totalCount > 0) {
            rtnStr += "<span class=\"btn\"><a href=\"" + "javascript:fn_goSearch("+totalPage+")" + "\" class=\"final\" title=\"맨 끝페이지\">목록 마지막으로 이동</a></span>";
        }
        rtnStr += "</div>";
        rtnStr += "</div>";
    } else if (type == 'site') {

        rtnStr += "<div class=\"board_paging\">";
        rtnStr += "<ul>";
        if (pageIndex != 1) {
            rtnStr += "<li><a href=\""  + "javascript:fn_goSearch(1);" + "\" class=\"first\" title=\"맨처음페이지\">&lt;&lt;</a></li>";
        }
        if (pageIndex > 1) {
            rtnStr += "<li><a href=\"" + "javascript:fn_goSearch("+(Number(pageIndex) - 1)+");" + "\" class=\"prev\" title=\"맨처음페이지\">&lt;</a></span>";
        }

        for (var i = startPage; i <= endPage; i++) {
            if (i == pageIndex) {
                rtnStr += "<li><a class=\"active\">" + i + "</a></li>";
            } else {
                rtnStr += "<li><a href=\"" + "javascript:fn_goSearch("+i+")" + "\">" + i + "</a></li>";
            }
        }

        if (pageIndex < totalPage) {
            rtnStr += "<li><a href=\"" + "javascript:fn_goSearch("+(Number(pageIndex)+1)+")" + "\" title=\"다음리스트\">&gt;</a></li>";
        }

        if (pageIndex != totalPage && totalCount > 0) {
            rtnStr += "<li><a href=\"" + "javascript:fn_goSearch("+totalPage+")" + "\" title=\"맨 끝페이지\">&gt;&gt;</a></li>";
        }
        rtnStr += "</ul>";
        rtnStr += "</div>";
    }
    return rtnStr;
}

var width = 0;
var progress = false;
/**
 * 프로그래스바
 * @param e
 * @param length
 */
function fn_progressMove(e, length) {
    $('.mngProgress').show();
    var per = 100/length;
    if(progress){
        width = width+per;
        $(e).attr('style', 'width: '+width+'%;');
        $(e).text(Math.round(width)+'%');
    }
}

/**
 * 사업자등록번호 CHECK
 * @param bizID
 * @returns {boolean}
 */
function fn_checkBizID(bizID){
    var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
    var tmpBizID, i, chkSum=0, c2, remander;
    bizID = bizID.replace(/-/gi,'');

    for (i=0; i<=7; i++) chkSum += checkID[i] * bizID.charAt(i);
    c2 = "0" + (checkID[8] * bizID.charAt(8));
    c2 = c2.substring(c2.length - 2, c2.length);
    chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));
    remander = (10 - (chkSum % 10)) % 10 ;

    if (Math.floor(bizID.charAt(9)) == remander) return true ;
    return false;
}

/**
 * url과 검색어 이름 name을 받아 자동완성시킨다.
 * @param arr
 * @param name
 */
function fn_setAutocomplete(url, paramName, keywordName) {
    var data = {};
    var param = $('[name=' + paramName + ']').val();
    var keyword = $('[name=' + keywordName + ']').val();
    $('[name=' + keywordName + ']').autocomplete({
        source: function (request, response) {
            if (param != '' && param != undefined) {
                data['searchCondition'] = param;
                data['searchKeyword'] = keyword;
                $.ajax({
                    url: url,
                    type: 'post',
                    data: data,
                    dataType: 'json',
                    success: function (res) {
                        response(res.slice(0, 10));
                    }
                });
            }
        },
        minLength: 0,
        focus: function(event, ui) {
            return false;
        }
    });
}

/**
 * url과 검색어 이름 name을 받아 자동완성시킨다.
 * url, paramName, keywordName
 * @param name
 */
function fn_setAutocompleteInit(url, paramName, keywordName){
    $('[name='+keywordName+']').attr('onkeyup', "fn_setAutocomplete('"+url+"', '"+paramName+"', '"+keywordName+"')");
    $('[name='+keywordName+']').attr('onkeydown', "fn_setAutocomplete('"+url+"', '"+paramName+"', '"+keywordName+"')");
    $('[name='+keywordName+']').attr('onkeypress', "fn_setAutocomplete('"+url+"', '"+paramName+"', '"+keywordName+"')");
}

/**
 * DateTimePicker 세팅
 * @param start_date_name
 * @param end_date_name
 * @param range (arr)
 */
function fn_setDateTimePicker(start_date_name, end_date_name, range, value){
    $(function() {
        "use strict";
        $('#daterangepicker-time').daterangepicker({
            timePicker: true,
            timePickerIncrement: 15,
            format: 'YYYY-MM-DD hh:mm',
            start_date_name: start_date_name,
            end_date_name: end_date_name,
            dateLimit: range,
            timePicker12Hour: false
        });
    });
}

/**
 * DateRangePicker 세팅
 * @param start_date_name
 * @param end_date_name
 * @param range (arr)
 */
function fn_setDateRangePicker(start_date_name, end_date_name, range, value){
    $(function() {
        "use strict";
        $('#daterangepicker').daterangepicker({
            timePicker: false,
            format: 'YYYY-MM-DD',
            start_date_name: start_date_name,
            end_date_name: end_date_name,
            dateLimit: range
        });
    });
}

/**
 * DatePicker 세팅
 * @param e
 */
function fn_setDatePicker(e){
    $(function(){
       "use strict";
       $('[name='+e+']').bsdatepicker({
           format: 'yyyy-mm-dd'
       });
    });
}

/**
 * 인라인에디터 세팅
 */
function fn_setInlineEditor(){
    // return CKEDITOR.on( 'instanceCreated', function( event ) {
    //     var editor = event.editor,
    //         element = editor.element;
    //     if (element.is('div')) {
    //         editor.on( 'configLoaded', function() {
    //             editor.config.removePlugins = 'colorbutton,find,flash,font,' +
    //                 'forms,iframe,image,newpage,removeformat,' +
    //                 'smiley,specialchar,stylescombo,templates';
    //             editor.config.toolbarGroups = [
    //                 { name: 'editing',		groups: [ 'basicstyles', 'links' ] },
    //                 { name: 'undo' },
    //                 { name: 'clipboard',	groups: [ 'selection', 'clipboard' ] },
    //                 { name: 'about' }
    //             ];
    //         });
    //     }
    // });
}

/**
 * 요일 반환
 * @param date
 * @returns {string}
 */
function fn_get_dayOfWeek(date) {
	var week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
	return week[date.getDay()];
}

/**
 * 콘솔로그 코드 단순화
 * @param obj
 */
function log(obj) {
	console.log(obj);
}

function table(obj) {
    if(console.table) {
        console.table(obj);
    }else {
        console.log(obj);
    }
}

/**
 * queryString json형태로 가져오기
 * @returns {json}
 */
function getUrlParams() {
	var params = {};
	window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
	return params;
}

/**
 * 날짜객체를 받아서 yyyy-mm-dd 형식으로 반환
 * @param date
 * @returns {string}
 */
function formatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2)
		month = '0' + month;
	if (day.length < 2)
		day = '0' + day;

	return [year, month, day].join('-');
}

/**
 * id : DatePicker 나오는 더미 태그
 *  name : 데이터 세팅
 * @param id
 * @param name
 */
// function fn_setOneDatePicker(id, name) {
//     var setRange = 'c-70:c+10';
//     $("#"+id).datepicker({
//         dateFormat: 'yy-mm-dd',
//         buttonImageOnly: false,
//         prevText: '이전 달',
//         nextText: '다음 달',
//         monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//         monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//         dayNames: ['일', '월', '화', '수', '목', '금', '토'],
//         dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
//         dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
//         showMonthAfterYear: true,
//         yearSuffix: '년',
//         changeMonth: true,
//         changeYear: true,
//         // yearRange: setRange,
//         onSelect: function (selectedDate) {
//             $("[name="+name+"]").val(selectedDate)
//         }
//     });
// }
/**
 *  daterpicker 사용자단 날짜선택 기능
 *  YYYY-MM-DD
 *  https://www.daterangepicker.com/#config
 *
 */
function fn_setDatepickerForUser(name, start_date){

    $('input[name='+name+']').daterangepicker({//캘린더 날짜 및 시간 선택 세팅
        "singleDatePicker": true,
        autoUpdateInput: false,
        locale: {
            format: 'YYYY-MM-DD',
            "separator": " ~ ",
            "applyLabel": "확인",
            "cancelLabel": "취소",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
            "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        },


    }, function (start) {
         console.log('New date range selected: ' + start.format('YYYY-MM-DD'));
        $("input[name="+start_date+"]").val(start.format('YYYY-MM-DD'));


    });

    $('input[name='+name+']').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('YYYY-MM-DD'));
    });

    $('input[name='+name+']').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        $("input[name="+start_date+"]").val('');
    });

}