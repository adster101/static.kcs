  // Setup basic kcs object
  var kcs = kcs || {};

  // same functions as above
  kcs.nav = (function() {
    function mobileMenu() {
      document.getElementById('menu-toggle').addEventListener('click', function(e) {

        // Get the main menu element...
        var menu = document.getElementById('main-menu');

        // Check the style property
        if(menu.style.display == 'none' || menu.style.display == '')
        {
          menu.style.display = 'block';
        } else {
          menu.style.display = 'none';
        }
      })
    }
    return {
      mobileMenu: mobileMenu
    };
  })();

  // listen for the DOMContentLoaded event, then bind our function
  kcs.nav.mobileMenu();
