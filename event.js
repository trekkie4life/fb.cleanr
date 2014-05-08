chrome.runtime.sendMessage(
  { tabs_host: document.URL },
  function(response) { if (response === true) { Cleanr.clean() } }
);

var Cleanr = {
  clean: function() {
    rightCol        = document.getElementById('rightCol');
    groupsNav       = document.getElementById('groupsNav');
    appsNav         = document.getElementById('appsNav');
    interestsNav    = document.getElementById('interestsNav');
    pagesNav        = document.getElementById('pagesNav');
    sideAds         = document.getElementById('pagelet_side_ads');

    if (rightCol) { rightCol.style.display = "none" };
    if (groupsNav) { groupsNav.style.display = "none" };
    if (appsNav) { appsNav.style.display = "none" };
    if (interestsNav) { interestsNav.style.display = "none" };
    if (pagesNav) { pagesNav.style.display = "none" };
    if (sideAds) { sideAds.style.display = "none" };
  }
}