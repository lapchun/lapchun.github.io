// build time:Thu Oct 31 2019 17:04:45 GMT+0800 (GMT+08:00)
(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var t;if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.LgHash=e()}})(function(){var e,t,i;return function o(e,t,i){function n(s,l){if(!t[s]){if(!e[s]){var a=typeof require=="function"&&require;if(!l&&a)return a(s,!0);if(r)return r(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var h=t[s]={exports:{}};e[s][0].call(h.exports,function(t){var i=e[s][1][t];return n(i?i:t)},h,h.exports,o,e,t,i)}return t[s].exports}var r=typeof require=="function"&&require;for(var s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,i,o){(function(t,i){if(typeof e==="function"&&e.amd){e([],i)}else if(typeof o!=="undefined"){i()}else{var n={exports:{}};i();t.lgHash=n.exports}})(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i){if(Object.prototype.hasOwnProperty.call(i,o)){e[o]=i[o]}}}return e};var t={hash:true};var i=function o(i){this.el=i;this.core=window.lgData[this.el.getAttribute("lg-uid")];this.core.s=e({},t,this.core.s);if(this.core.s.hash){this.oldHash=window.location.hash;this.init()}return this};i.prototype.init=function(){var e=this;var t;utils.on(e.core.el,"onAfterSlide.lgtm",function(t){window.location.hash="lg="+e.core.s.galleryId+"&slide="+t.detail.index});utils.on(window,"hashchange.lghash",function(){t=window.location.hash;var i=parseInt(t.split("&slide=")[1],10);if(t.indexOf("lg="+e.core.s.galleryId)>-1){e.core.slide(i,false,false)}else if(e.core.lGalleryOn){e.core.destroy()}})};i.prototype.destroy=function(){if(!this.core.s.hash){return}if(this.oldHash&&this.oldHash.indexOf("lg="+this.core.s.galleryId)<0){window.location.hash=this.oldHash}else{if(history.pushState){history.pushState("",document.title,window.location.pathname+window.location.search)}else{window.location.hash=""}}utils.off(this.core.el,".lghash")};window.lgModules.hash=i})},{}]},{},[1])(1)});
//rebuild by neat 