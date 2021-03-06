var navigationActiveLink = require('./navigationActiveLink.js');
var initPageScrollLinks = require('./pageScrollLinks.js');
var initMainNavMobile = require('./mainNavMobile.js');
var initAnimatedProgressBar = require('./animatedProgressBar.js');
var initSliderTransition = require('./sliderTransition.js');
var hideMobileNavClickOutside = require('./hideMobileNavClickOutside.js');
var initFormValidator = require('./initFormValidator.js');
var initOpenInNewTab = require('./openInNewTab.js');
var initRemoveCloseLightbox = require('./removeCloseLightbox.js');

$(document).ready(function(){

    // Page scroll anchors init
    initPageScrollLinks();

    // Mobile menu init on click
    initMainNavMobile();

    // Init animated progress bar
    initAnimatedProgressBar();

    // Init slider transition
    initSliderTransition();

    // Init hide mobile nav on click outside container
    hideMobileNavClickOutside();

    // Init form validator
    initFormValidator();

    // Open social contact in a new tab
    initOpenInNewTab();

    // Remove close button from lightbox
    initRemoveCloseLightbox();


});

$(window).load(function() {

    // Change active menu link on scroll
    navigationActiveLink();

});