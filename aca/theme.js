// ――――― Nunito font ――――― //
$('head').append('<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"/>');

// ――――― Def CSS ――――― //
$('head').append('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/dftm/deepop@latest/aca/def.css">');
// ――――― Custom CSS ――――― //
$('head').append('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/dftm/deepop@latest/aca/src.css">');
// ――――― Custom JS ――――― // 
$.getScript('//cdn.jsdelivr.net/gh/dftm/deepop@latest/aca/src.js', function() {
    //future-code here
});

// ――――― Replace Homepage ――――― //
if(window.location.href.includes('test')) {
  $("body > div.container > div.row > div > div > div > div > div > div > div:nth-child(2)").load('//cdn.jsdelivr.net/gh/dftm/deepop@latest/aca/hp/hp.html');
  $('head').append('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/dftm/deepop@latest/aca/hp/hp.css">');
  $.getScript('//cdn.jsdelivr.net/gh/dftm/deepop@latest/aca/hp/hp.js', function() {
    //future-code here
  });
}

// ――――― Replace Footer ――――― //
//if(window.location.href.includes('test')) {
//  $("body > div.container > div.row > div > div > div > div > div > div > div:nth-child(7)").load('//cdn.jsdelivr.net/gh/dftm/deepop@latest/gen/footer.htm');
//}
// ――――― Append Footer Alt Method ――――― //
if(window.location.href.includes('test')) {
	$('body > div.container > div.row > div > div').append($('<div>').load('//cdn.jsdelivr.net/gh/dftm/deepop@latest/gen/footer.htm'));
}
// ――――― Prepend Header Alt Method ――――― //
if(window.location.href.includes('test')) {
	$('#navbar-cms').prepend($('<div>').load('//cdn.jsdelivr.net/gh/dftm/deepop@latest/gen/header.htm'));
}

// ――――― Replace Logo ――――― //
$(".navbar > .navbar-inner > .nav-container > a.brand > img").attr("src", "//cdn.jsdelivr.net/gh/dftm/deepop@latest/aca/logo.png");

// ――――― Highlight JS ――――― // 
//$.getScript('//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/highlight.min.js', function() {
    //future-code here
//});
// ――――― Highlight CSS ――――― //
//$('head').append('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/default.min.css">');