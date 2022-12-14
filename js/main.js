
new fullpage('#fullpage', {
	
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar:true,
    navigation: true,
	navigationPosition: 'right',
    navigationTooltips: ['GAH소개','제다큐어','연구개발','본사위치','연구소위치'], 
    easing: 'easeInOutCubic',
    anchors: ['1st', 'second', '3rd', '4th', '5th'],
    menu: '.gnb_list',
    normalScrollElements: '#s2',
    responsiveHeight: 450,       
});

//햄버거 버튼 클릭 
$('.btn_total').click(function(){
    $('.total_menu_z').addClass('active');
});

//메뉴 팝업 닫기버튼
$('.btn_totalClose').click(function(){
    $('.total_menu_z').removeClass('active');
});

var myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    //scrollbars: true
});

$('.totalMitem').click(function(){
    if( $(this).hasClass('active') ){ 
        $(this).removeClass('active'); 
    } else {
        $('.totalMitem').removeClass('active'); 
        $(this).addClass('active');
    }
});

//오른쪽 아래 고정되어 있는 섹션 위아래 이동버튼
document.querySelector('.prevA').addEventListener('click',function(e){
    e.preventDefault();
    fullpage_api.moveSectionUp();
}); 

document.querySelector('.nextA').addEventListener('click',function(e){
    e.preventDefault();
    fullpage_api.moveSectionDown();
}); 


