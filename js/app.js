let menuOpen = false;

function toggleMenu() {
    if (menuOpen) {  // close
       $('#menu').animate({ 
        right: 0
       }, 300, 'swing');
    } else {   // open
       $('#menu').animate({ 
        right: -420
       }, 300, 'swing');
    }
    menuOpen = !menuOpen;
} // toggle menu open/close