import $ from "jquery";

var contest = false;
var camp = false;
var activity = false;
var exhibition = false;
var performance = false;

$(document).ready(function () {

	// 탑메뉴 show & hide
	$(document).on('mouseover', '.gnb ul li a', function() {
		$('#header_on').fadeIn(300);
		$(".overlay_header .gnb").removeAttr("style");
		var i = $(this).parent().index() + 1;
		$(".con" + i).css({"background-color": "#f3f5f7", "transition": "0.5s"});
	});
	$(document).on('mouseleave', '#header_on', function() { $('#header_on').fadeOut(300); });
	$(document).on('mouseover', '.header_wrap ul', function() {
		$(".overlay_header .gnb").removeAttr("style");
		$('.re_header .gnb ul li').eq($(this).index()).find('a').css("color", "#06569e");
	});
	$(document).on('mouseleave', '.header_wrap ul', function() {
		$('.re_header .gnb ul li a').css("color", "");
	});

	// 헤더메뉴 href="#" 제거
	$(".re_header .gnb ul li a").each(function (i, v) {
		if($(v).attr("href") == "#") {
			$(v).removeAttr("href");
		}
	});

	$(".img_name ul li").text($('#main_slide img').eq(0).attr("alt"));
	// 메인 슬라이드
	// $("#main_slide").slick({
	// 	infinite: true,
	// 	autoplay: true,
	// 	fade: true,
	// 	cssEase: 'linear',
	// 	arrows: false,
	// 	dots: true,
	// 	appendDots: $(".bullet"),
	// 	customPaging: function (slide, i) {
	// 		return '<a></a>';
	// 	},
	// 	pauseOnHover: false,
	// 	pauseOnFocus: false,
	// 	zIndex: 1
	// });
	//
	// // 메인슬라이드 변화 감지
	// $('#main_slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 	$(".img_name ul li").text($('#main_slide img').eq(nextSlide).attr("alt"));
	// });
	//
	// // 메인슬라이드 정지 버튼 append
	// $(".slick-dots").append('<li class="pause"><a onclick="fn_main_slide_action(this);">정지</a></li>');
	//
	// // 등대 아이콘 슬라이드
	// $('#lh_icon_slide').slick({
	// 	infinite: true,
	// 	autoplay: true,
	// 	arrows: false,
	// 	dots: false,
	// 	pauseOnHover: false,
	// 	pauseOnFocus: false,
	// 	slidesToShow: 8,
	// 	slidesToScroll: 1,
	// 	responsive: [{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 2
	// 		}
	// 	}]
	// });
	//
	// // 등대 배너 슬라이드
	// $('#banner_slide').slick({
	// 	infinite: true,
	// 	autoplay: true,
	// 	arrows: false,
	// 	dots: false,
	// 	pauseOnHover: false,
	// 	pauseOnFocus: false,
	// 	slidesToShow: 5,
	// 	slidesToScroll: 1,
	// 	responsive: [{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 2
	// 		}
	// 	}]
	// });
	//
	// $('.ellipsis').ellipsis();


	// 모바일 2뎁스 메뉴 slideDown & slideUp
	$(document).on("click", ".header_m .gnb > li a", function () {
		console.log("click a tag")
		$(this).parent().find("ul").slideToggle(300);
	});

	// 모바일 3뎁스 메뉴 slideDown & slideUp
	$(document).on("click", ".header_m .gnb .depth2 a", function () {
		$(this).siblings(".depth3").slideToggle(300);
	});

	$(document).ready(function () {
		// 마스크(검은화면) 클릭시에 메뉴 hide
		$("#mask").on('click', function () {
			$(".header_on").hide();
			$("#mask").hide();
			$("body").css({overflow:'scroll'});
		});
	});

});

// function fn_banner_slide_prev(){ $('#banner_slide').slick('slickPrev'); }
// function fn_banner_slide_next() { $('#banner_slide').slick('slickNext'); }


// 메인 슬라이드 일시정지&시작 버튼
// function fn_main_slide_action(e) {
// 	var status = $(e).parent().attr("class");
//
// 	if(status ==='pause') {
// 		$('#main_slide').slick('slickPause');
// 		$(e).parent().attr("class", "stop");
// 	}else {
// 		$('#main_slide').slick('slickPlay');
// 		$(e).parent().attr("class", "pause");
// 	}
// }

// 배너 슬라이드 일시정지&시작 버튼
// function fn_banner_slide_action(e) {
// 	var status = $(e).data("status");
//
// 	if(status === 'pause') {
// 		$(e).data("status", "play");
// 		$(e).find("img").attr("src", "/sea/resources/images/main/rel_play.png");
// 		$(e).find("img").attr("alt", "재생버튼");
//         $('#banner_slide').slick("slickPause");
// 	}else {
// 		$(e).data("status", "pause");
// 		$(e).find("img").attr("src", "/sea/resources/images/main/rel_pause.png");
// 		$(e).find("img").attr("alt", "정지버튼");
//         $('#banner_slide').slick("slickPlay");
// 	}
// }

// 메인 탭메뉴
$(document).on('click','.tab li a', function () {
	$(this).parent().parent().find('li').removeClass('on');
	$(this).parent().addClass('on');
	$('.tab_contents_s').hide();
	$('.tab_contents_s:eq('+ $(this).parent().index() +')').show();

	var type = $(this).data("type");
	if(!type) {
		$(".plus, .m_plus").attr("href", "/sea/article/notice/list");
	}else if(type == "contest") {
		$(".plus, .m_plus").attr("href", "/sea/contest/list");
	}else {
		$(".plus, .m_plus").attr("href", "/sea/info/" + type + "/list");
	}
	fn_set_main_board(type, $(this).parent().index(), $(this).text());
});

// 메인 게시판 셋팅
function fn_set_main_board(type, seq, str) {
	if(type) {
		switch (type) {
			case "contest":
				if(eval(type)) return false;    // ajax 요청한적이 있다면 ajax 요청 다시 안함
				$.ajax({
					url:"/sea/api/contest/list",
					type: "post",
					dataType: 'json',
					beforeSend: function () {
						$(".tab_contents_s").eq(seq).html($('<div>', {class: "spinner"}).append($('<img>', {src: "/sea/resources/images/layout/Spinner.gif"})));
					},
					success: function (res) {
						var html = '';
						if(res.length) {
							html += '<div>';
							res.forEach(function (v, i) {
								if(i === 0) {
									html += '<div class="con notice">';
									html += '    <span class="date">';
									html += '       <h2>'+ v.inpt_date.split(".").reverse()[0] +'</h2>';
									html += '       <p>'+ v.inpt_date.substring(0, v.inpt_date.lastIndexOf(".")) +'</p>';
									html += '   </span>';
									html += '   <a href="/sea/contest/detail/'+ v.contest_seq +'" class="sm_title">';
									html += '       <h2>'+ v.contest_title +'</h2>';
									html += '       <p class="ellipsis" data-ellipsis="2">'+ v.contest_contents +'</p>'
									html += '   </a>';
									html += '</div>';
								}
							});

							html += '<ul class="list">';
							res.forEach(function (v, i) {
								if(i !== 0) {
									html += '<li>';
									html += '   <a href="/sea/contest/detail/'+ v.contest_seq +'" title="'+ v.contest_title +'">'+ v.contest_title +'</a>';
									html += '   <span>'+ v.inpt_date +'</span>';
									html += '</li>';
								}
							});
							html += '</ul>';
							html += '</div>';
						}else {
							html += '<div class="no_images">';
							html += '   <div class="con images">';
							html += '       <img src="/sea/resources/images/main/no_image.png" alt="등록된 이미지가 없을때 나오는 아이콘">';
							html += '       <p>진행중인 '+ str +' 정보가 없습니다.</p>';
							html += '   </div>';
							html += '</div>';
						}

						$(".tab_contents_s").eq(seq).html(html);
						$('.ellipsis').ellipsis();
						contest = true;     // ajax 요청 다시 안하기위해서 플래그 설정
					},
					error: function (err) {
						console.log(str + " 정보 불러오는 중: " + err);
						alert("네트워크가 불안정합니다. 잠시 후 다시 시도해주십시오.");
					}
				});

				break;
			case "camp":
			case "activity":
			// case "exhibition": // 온라인 전시관
			case "performance":
				if(eval(type)) return false;    // ajax 요청한적이 있다면 ajax 요청 다시 안함

				$.ajax({
					url:"/sea/api/exhibition/list",
					type: "post",
					data: {"exhibition_type": type},
					dataType: 'json',
					beforeSend: function () {
						$(".tab_contents_s").eq(seq).html($('<div>', {class: "spinner"}).append($('<img>', {src: "/sea/resources/images/layout/Spinner.gif"})));
					},
					success: function (res) {
						var html = '';
						if(res.length) {
							html += '<ul class="exhibit">';
							res.forEach(function (v, i) {
								if(v.img_tag != 'noTag') {
									html += '<li>';
									html += '   <a href="/sea/info/'+ type +'/detail/'+ v.exhibition_seq +'" title="'+ v.exhibition_title +'">';
									html += v.img_tag;
									html += '       <p>'+ v.exhibition_title +'</p>';
									html += '   </a>'
									html += '</li>';
								}else {
									html += '<li class="no_file" onclick="location.href=\'/sea/info/'+ type +'/detail/'+ v.exhibition_seq +'\'">';
									html += '   <span>';
									html += '       <img src="/sea/resources/images/main/icon_noimage.png" alt="no_img">';
									html += '       <p>이미지 준비중입니다.</p>';
									html += '   </span>';
									html += '   <a>';
									html += '       <p title="'+ v.exhibition_title +'">'+ v.exhibition_title +'</p>';
									html += '   </a>';
									html += '</li>';
								}
							});
							html += '</ul>';
						}else {
							html += '<div class="no_images">';
							html += '   <div class="con images">';
							html += '       <img src="/sea/resources/images/main/no_image.png" alt="등록된 이미지가 없을때 나오는 아이콘">';
							html += '       <p>진행중인 '+ str +' 정보가 없습니다.</p>';
							html += '   </div>';
							html += '</div>';
						}

						$(".tab_contents_s").eq(seq).html(html);
						var no_img = $(window).width() > 768 ? "noimage_227x310.png" : "noimage_174x265.jpg";
						$('.tab_contents_s img').attr("onerror", "this.src='/sea/resources/images/common/"+ no_img +"'");

						// ajax 요청 다시 안하기위해서 플래그 설정
						switch (type) {
							case "camp": camp = true; break;
							case "activity": activity = true; break;
							case "exhibition": exhibition = true; break;
							case "performance": performance = true; break;
						}
					},
					error: function (err) {
						console.log(str + " 정보 불러오는 중: " + err);
						alert("네트워크가 불안정합니다. 잠시 후 다시 시도해주십시오.");
					}
				});
				break;

			default: return false;

		}
	}
}