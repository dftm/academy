//check for brand image then show academy
if ( $( ".navbar > .navbar-inner > .nav-container > a.brand>img" ).length ) {
  $( ".navbar > .navbar-inner > .nav-container > a.brand" ).append( "<p id='Academy-nav-div'> Academy &#127963; </p>" );
}
