// ――――― check for brand image then show academy ――――― //
//if ( $( ".navbar > .navbar-inner > .nav-container > a.brand>img" ).length ) {
//  $( ".navbar > .navbar-inner > .nav-container > a.brand" ).append( "<p id='Academy-nav-div'> Academy &#127963; </p>" );
//}

// ――――― logo-switcheroo ――――― //
$(".navbar > .navbar-inner > .nav-container > a.brand > img").attr("src", "https://cdn.jsdelivr.net/gh/dftm/academy@2860e6d/logo.png");
//$(".navbar > .navbar-inner > .nav-container > a.brand > img").attr("width", "80%");

// ――――― Code Highlights ――――― //
hljs.highlightAll();
