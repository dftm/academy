//Nunito font
$('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"/>');

//Def CSS
$('head').append('<link rel="stylesheet" type="text/css"/ href="https://cdn.jsdelivr.net/gh/dftm/academy@0c4c468/def.css">');

//Custom CSS
$('head').append('<link rel="stylesheet" type="text/css"/ href="https://cdn.jsdelivr.net/gh/dftm/academy@a9bc90d/src.css">');

//check for brand image then show academy
if ( $( ".navbar > .navbar-inner > .nav-container > a.brand>img" ).length ) {
  $( ".navbar > .navbar-inner > .nav-container > a.brand" ).append( "<p id='Academy-nav-div'> Academy &#127963; </p>" );
}
