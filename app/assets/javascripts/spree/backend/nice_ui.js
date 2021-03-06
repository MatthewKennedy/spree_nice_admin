// BODY SCROLL LOCK START
  !function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var o={};t(o),e.bodyScrollLock=o}}(this,function(exports){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0});var l=!1;if("undefined"!=typeof window){var e={get passive(){l=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}var d="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),c=[],u=!1,a=-1,s=void 0,v=void 0,f=function(t){return c.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))})},m=function(e){var t=e||window.event;return!!f(t.target)||(1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1))},o=function(){setTimeout(function(){void 0!==v&&(document.body.style.paddingRight=v,v=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0)})};exports.disableBodyScroll=function(i,e){if(d){if(!i)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(i&&!c.some(function(e){return e.targetElement===i})){var t={targetElement:i,options:e||{}};c=[].concat(r(c),[t]),i.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY)},i.ontouchmove=function(e){var t,o,n,r;1===e.targetTouches.length&&(o=i,r=(t=e).targetTouches[0].clientY-a,!f(t.target)&&(o&&0===o.scrollTop&&0<r?m(t):(n=o)&&n.scrollHeight-n.scrollTop<=n.clientHeight&&r<0?m(t):t.stopPropagation()))},u||(document.addEventListener("touchmove",m,l?{passive:!1}:void 0),u=!0)}}else{n=e,setTimeout(function(){if(void 0===v){var e=!!n&&!0===n.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(v=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")});var o={targetElement:i,options:e||{}};c=[].concat(r(c),[o])}var n},exports.clearAllBodyScrollLocks=function(){d?(c.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),u&&(document.removeEventListener("touchmove",m,l?{passive:!1}:void 0),u=!1),c=[],a=-1):(o(),c=[])},exports.enableBodyScroll=function(t){if(d){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,c=c.filter(function(e){return e.targetElement!==t}),u&&0===c.length&&(document.removeEventListener("touchmove",m,l?{passive:!1}:void 0),u=!1)}else 1===c.length&&c[0].targetElement===t?(o(),c=[]):c=c.filter(function(e){return e.targetElement!==t})}});
// BODY SCROLL LOCK END


//#### EVERYTHING BUT UP AGAINST LINE 0 CAN BE REMOVED IF PORTED INTO SPREE
jQuery(function ($) {

// Onpageload remove some unnecessary classes that get added from the default Spree js
// IF PORTED INTO MAIN SPREE PROJECT STOP THIS OCCURING IN MAIN SPREE JS FILES AND REMOVE THESE CLASSES FROM ERB FILES THEN DELETE BERTWEEN THESE LINES
$('#main-sidebar').removeClass('hidden-xs col-xs-3 col-md-2 sidebar')
$('#main-part').removeClass('main col-xs-12 sidebar-collapsed col-xs-9 col-xs-offset-3 col-md-10 col-md-offset-2')
$('#wrapper').removeClass('sidebar-minimized')
// IF PORTED INTO MAIN SPREE PROJECT STOP THIS OCCURING IN MAIN SPREE JS FILES AND REMOVE THESE CLASSES FROM ERB FILES THEN DELETE BERTWEEN THESE LINES

      $('#sidebar-toggle').on('click', function () {
        // 1. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
          var targetElement = document.querySelector("#main-sidebar");
          $('body').toggleClass('sidebar-opened')
           sideMenu = $('#main-sidebar')
          if ($('body').hasClass('sidebar-opened')) {
              bodyScrollLock.disableBodyScroll(targetElement);
            }
          else {
              bodyScrollLock.enableBodyScroll(targetElement);
          }

// Blocks (removeClass) of the default Spree classes from toggling on and off.
// IF PORTED INTO MAIN SPREE PROJECT STOP THIS OCCURING IN MAIN SPREE JS FILES AND REMOVE THESE CLASSES FROM ERB FILES THEN DELETE BERTWEEN THESE LINES
$('#main-sidebar').removeClass('hidden-xs')
$('#wrapper').removeClass('sidebar-minimized main col-xs-12 sidebar-collapsed col-xs-9 col-xs-offset-3 col-md-10 col-md-offset-2')
$('#main-part').removeClass('col-xs-9 col-xs-offset-3 col-md-10 col-md-offset-2 col-xs-12 sidebar-collapsed')
// IF PORTED INTO MAIN SPREE PROJECT STOP THIS OCCURING IN MAIN SPREE JS FILES AND REMOVE THESE CLASSES FROM ERB FILES THEN DELETE BERTWEEN THESE LINES

      })

})

// Remove body scroll lock if window is resized to avoid ui locked up if the mobile menu is opened and then the screen widened.
window.addEventListener("resize", removeLock);
function removeLock() {
bodyScrollLock.clearAllBodyScrollLocks();
}
