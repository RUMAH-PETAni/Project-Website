/*************************************************************************
 * For loading the menu.
 * The menu will not work if you open the file directly rather than on a web server.
 *************************************************************************/

(function () {
  "use strict";

  $(function () {
    $(".custom-menu-container").load("menu.html");
  });
})();