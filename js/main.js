!function(){var e={927:function(){!function(){"use strict";var e,n,t;n=document.querySelector("header"),t=window.pageYOffset,window.addEventListener("scroll",(function(){
    // Отключаем логику скрытия хедера
    return false;
    /* Закомментированный оригинальный код
    var r=function(){return n.classList.contains("hidden")};
    (e=window.pageYOffset)>t && !r() && n.classList.add("hidden"),
    e<t && r() && n.classList.remove("hidden"),
    t=e
    */
})),document.querySelectorAll(".object-wrapper").forEach((function(e){e.querySelectorAll(".object").forEach((function(n){n.classList.remove("object-animation"),new IntersectionObserver((function(e){e.forEach((function(e){("function"!=typeof getCurrentAnimationPreference||getCurrentAnimationPreference())&&(e.isIntersecting?n.classList.add("object-animation"):n.classList.remove("object-animation"))}))})).observe(e)}))}))}()}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){"use strict";t(927)}()}();
