// build time:Sun Apr 21 2019 13:43:21 GMT+0800 (GMT+08:00)
(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var l;if(typeof window!=="undefined"){l=window}else if(typeof global!=="undefined"){l=global}else if(typeof self!=="undefined"){l=self}else{l=this}l.LgFullscreen=e()}})(function(){var e,l,n;return function t(e,l,n){function r(o,s){if(!l[o]){if(!e[o]){var c=typeof require=="function"&&require;if(!s&&c)return c(o,!0);if(u)return u(o,!0);var i=new Error("Cannot find module '"+o+"'");throw i.code="MODULE_NOT_FOUND",i}var f=l[o]={exports:{}};e[o][0].call(f.exports,function(l){var n=e[o][1][l];return r(n?n:l)},f,f.exports,t,e,l,n)}return l[o].exports}var u=typeof require=="function"&&require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(l,n,t){(function(l,n){if(typeof e==="function"&&e.amd){e([],n)}else if(typeof t!=="undefined"){n()}else{var r={exports:{}};n();l.lgFullscreen=r.exports}})(this,function(){"use strict";var e=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n){if(Object.prototype.hasOwnProperty.call(n,t)){e[t]=n[t]}}}return e};var l={fullScreen:true};var n=function t(n){this.el=n;this.core=window.lgData[this.el.getAttribute("lg-uid")];this.core.s=e({},l,this.core.s);this.init();return this};n.prototype.init=function(){var e="";if(this.core.s.fullScreen){if(!document.fullscreenEnabled&&!document.webkitFullscreenEnabled&&!document.mozFullScreenEnabled&&!document.msFullscreenEnabled){return}else{e='<span class="lg-fullscreen lg-icon"></span>';this.core.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",e);this.fullScreen()}}};n.prototype.requestFullscreen=function(){var e=document.documentElement;if(e.requestFullscreen){e.requestFullscreen()}else if(e.msRequestFullscreen){e.msRequestFullscreen()}else if(e.mozRequestFullScreen){e.mozRequestFullScreen()}else if(e.webkitRequestFullscreen){e.webkitRequestFullscreen()}};n.prototype.exitFullscreen=function(){if(document.exitFullscreen){document.exitFullscreen()}else if(document.msExitFullscreen){document.msExitFullscreen()}else if(document.mozCancelFullScreen){document.mozCancelFullScreen()}else if(document.webkitExitFullscreen){document.webkitExitFullscreen()}};n.prototype.fullScreen=function(){var e=this;utils.on(document,"fullscreenchange.lgfullscreen webkitfullscreenchange.lgfullscreen mozfullscreenchange.lgfullscreen MSFullscreenChange.lgfullscreen",function(){if(utils.hasClass(e.core.outer,"lg-fullscreen-on")){utils.removeClass(e.core.outer,"lg-fullscreen-on")}else{utils.addClass(e.core.outer,"lg-fullscreen-on")}});utils.on(this.core.outer.querySelector(".lg-fullscreen"),"click.lg",function(){if(!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement){e.requestFullscreen()}else{e.exitFullscreen()}})};n.prototype.destroy=function(){this.exitFullscreen();utils.off(document,".lgfullscreen")};window.lgModules.fullscreen=n})},{}]},{},[1])(1)});
//rebuild by neat 