
document.getElementById('text').addEventListener('mouseover', function() {
    this.style.color = '#663300'; // マウスオーバー時の色
  });
  
  document.getElementById('text').addEventListener('mouseout', function() {
    this.style.color = 'white'; // マウスが離れた時の色
  });



  document.getElementById('life').addEventListener('mouseover', function() {
    this.style.color = '#663300'; // マウスオーバー時の色
  });
  
  document.getElementById('life').addEventListener('mouseout', function() {
    this.style.color = 'white'; // マウスが離れた時の色
  });




  document.getElementById('like').addEventListener('mouseover', function() {
    this.style.color = '#663300'; // マウスオーバー時の色
  });
  
  document.getElementById('like').addEventListener('mouseout', function() {
    this.style.color = 'white'; // マウスが離れた時の色
  });




  function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200){
        $('#page-top').removeClass('RightMove');
        $('#page-top').addClass('LeftMove');
    }else{
        if(
            $('#page-top').hasClass('LeftMove')){
            $('#page-top').removeClass('LeftMove');
            $('#page-top').addClass('RightMove');
        }
    }
}

$(window).scroll(function () {
	PageTopAnime();
});

$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});