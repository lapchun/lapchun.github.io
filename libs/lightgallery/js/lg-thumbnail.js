// build time:Tue May 21 2019 13:10:10 GMT+0800 (GMT+08:00)
(function(t){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=t()}else if(typeof define==="function"&&define.amd){define([],t)}else{var e;if(typeof window!=="undefined"){e=window}else if(typeof global!=="undefined"){e=global}else if(typeof self!=="undefined"){e=self}else{e=this}e.LgThumbnail=t()}})(function(){var t,e,i;return function r(t,e,i){function o(s,l){if(!e[s]){if(!t[s]){var h=typeof require=="function"&&require;if(!l&&h)return h(s,!0);if(u)return u(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var n=e[s]={exports:{}};t[s][0].call(n.exports,function(e){var i=t[s][1][e];return o(i?i:e)},n,n.exports,r,t,e,i)}return e[s].exports}var u=typeof require=="function"&&require;for(var s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,i,r){(function(e,i){if(typeof t==="function"&&t.amd){t([],i)}else if(typeof r!=="undefined"){i()}else{var o={exports:{}};i();e.lgThumbnail=o.exports}})(this,function(){"use strict";var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i){if(Object.prototype.hasOwnProperty.call(i,r)){t[r]=i[r]}}}return t};var e={thumbnail:true,animateThumb:true,currentPagerPosition:"middle",thumbWidth:100,thumbContHeight:100,thumbMargin:5,exThumbImage:false,showThumbByDefault:true,toggleThumb:true,pullCaptionUp:true,enableThumbDrag:true,enableThumbSwipe:true,swipeThreshold:50,loadYoutubeThumbnail:true,youtubeThumbSize:1,loadVimeoThumbnail:true,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:true};var i=function r(i){this.el=i;this.core=window.lgData[this.el.getAttribute("lg-uid")];this.core.s=t({},e,this.core.s);this.thumbOuter=null;this.thumbOuterWidth=0;this.thumbTotalWidth=this.core.items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin);this.thumbIndex=this.core.index;this.left=0;this.init();return this};i.prototype.init=function(){var t=this;if(this.core.s.thumbnail&&this.core.items.length>1){if(this.core.s.showThumbByDefault){setTimeout(function(){utils.addClass(t.core.outer,"lg-thumb-open")},700)}if(this.core.s.pullCaptionUp){utils.addClass(this.core.outer,"lg-pull-caption-up")}this.build();if(this.core.s.animateThumb){if(this.core.s.enableThumbDrag&&!this.core.isTouch&&this.core.doCss()){this.enableThumbDrag()}if(this.core.s.enableThumbSwipe&&this.core.isTouch&&this.core.doCss()){this.enableThumbSwipe()}this.thumbClickable=false}else{this.thumbClickable=true}this.toggle();this.thumbkeyPress()}};i.prototype.build=function(){var t=this;var e="";var i="";var r;var o='<div class="lg-thumb-outer">'+'<div class="lg-thumb group">'+"</div>"+"</div>";switch(this.core.s.vimeoThumbSize){case"thumbnail_large":i="640";break;case"thumbnail_medium":i="200x150";break;case"thumbnail_small":i="100x75"}utils.addClass(t.core.outer,"lg-has-thumb");t.core.outer.querySelector(".lg").insertAdjacentHTML("beforeend",o);t.thumbOuter=t.core.outer.querySelector(".lg-thumb-outer");t.thumbOuterWidth=t.thumbOuter.offsetWidth;if(t.core.s.animateThumb){t.core.outer.querySelector(".lg-thumb").style.width=t.thumbTotalWidth+"px";t.core.outer.querySelector(".lg-thumb").style.position="relative"}if(this.core.s.animateThumb){t.thumbOuter.style.height=t.core.s.thumbContHeight+"px"}function u(r,o,u){var s=t.core.isVideo(r,u)||{};var l;var h="";if(s.youtube||s.vimeo||s.dailymotion){if(s.youtube){if(t.core.s.loadYoutubeThumbnail){l="//img.youtube.com/vi/"+s.youtube[1]+"/"+t.core.s.youtubeThumbSize+".jpg"}else{l=o}}else if(s.vimeo){if(t.core.s.loadVimeoThumbnail){l="//i.vimeocdn.com/video/error_"+i+".jpg";h=s.vimeo[1]}else{l=o}}else if(s.dailymotion){if(t.core.s.loadDailymotionThumbnail){l="//www.dailymotion.com/thumbnail/video/"+s.dailymotion[1]}else{l=o}}}else{l=o}e+='<div data-vimeo-id="'+h+'" class="lg-thumb-item" style="width:'+t.core.s.thumbWidth+"px; margin-right: "+t.core.s.thumbMargin+'px"><img src="'+l+'" /></div>';h=""}if(t.core.s.dynamic){for(var s=0;s<t.core.s.dynamicEl.length;s++){u(t.core.s.dynamicEl[s].src,t.core.s.dynamicEl[s].thumb,s)}}else{for(var l=0;l<t.core.items.length;l++){if(!t.core.s.exThumbImage){u(t.core.items[l].getAttribute("href")||t.core.items[l].getAttribute("data-src"),t.core.items[l].querySelector("img").getAttribute("src"),l)}else{u(t.core.items[l].getAttribute("href")||t.core.items[l].getAttribute("data-src"),t.core.items[l].getAttribute(t.core.s.exThumbImage),l)}}}t.core.outer.querySelector(".lg-thumb").innerHTML=e;r=t.core.outer.querySelectorAll(".lg-thumb-item");for(var h=0;h<r.length;h++){(function(e){var i=r[e];var o=i.getAttribute("data-vimeo-id");if(o){window["lgJsonP"+t.el.getAttribute("lg-uid")+""+h]=function(e){i.querySelector("img").setAttribute("src",e[0][t.core.s.vimeoThumbSize])};var u=document.createElement("script");u.className="lg-script";u.src="//www.vimeo.com/api/v2/video/"+o+".json?callback=lgJsonP"+t.el.getAttribute("lg-uid")+""+h;document.body.appendChild(u)}})(h)}utils.addClass(r[t.core.index],"active");utils.on(t.core.el,"onBeforeSlide.lgtm",function(){for(var e=0;e<r.length;e++){utils.removeClass(r[e],"active")}utils.addClass(r[t.core.index],"active")});for(var a=0;a<r.length;a++){(function(e){utils.on(r[e],"click.lg touchend.lg",function(){setTimeout(function(){if(t.thumbClickable&&!t.core.lgBusy||!t.core.doCss()){t.core.index=e;t.core.slide(t.core.index,false,true)}},50)})})(a)}utils.on(t.core.el,"onBeforeSlide.lgtm",function(){t.animateThumb(t.core.index)});utils.on(window,"resize.lgthumb orientationchange.lgthumb",function(){setTimeout(function(){t.animateThumb(t.core.index);t.thumbOuterWidth=t.thumbOuter.offsetWidth},200)})};i.prototype.setTranslate=function(t){utils.setVendor(this.core.outer.querySelector(".lg-thumb"),"Transform","translate3d(-"+t+"px, 0px, 0px)")};i.prototype.animateThumb=function(t){var e=this.core.outer.querySelector(".lg-thumb");if(this.core.s.animateThumb){var i;switch(this.core.s.currentPagerPosition){case"left":i=0;break;case"middle":i=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":i=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*t-1-i;if(this.left>this.thumbTotalWidth-this.thumbOuterWidth){this.left=this.thumbTotalWidth-this.thumbOuterWidth}if(this.left<0){this.left=0}if(this.core.lGalleryOn){if(!utils.hasClass(e,"on")){utils.setVendor(this.core.outer.querySelector(".lg-thumb"),"TransitionDuration",this.core.s.speed+"ms")}if(!this.core.doCss()){e.style.left=-this.left+"px"}}else{if(!this.core.doCss()){e.style.left=-this.left+"px"}}this.setTranslate(this.left)}};i.prototype.enableThumbDrag=function(){var t=this;var e=0;var i=0;var r=false;var o=false;var u=0;utils.addClass(t.thumbOuter,"lg-grab");utils.on(t.core.outer.querySelector(".lg-thumb"),"mousedown.lgthumb",function(i){if(t.thumbTotalWidth>t.thumbOuterWidth){i.preventDefault();e=i.pageX;r=true;t.core.outer.scrollLeft+=1;t.core.outer.scrollLeft-=1;t.thumbClickable=false;utils.removeClass(t.thumbOuter,"lg-grab");utils.addClass(t.thumbOuter,"lg-grabbing")}});utils.on(window,"mousemove.lgthumb",function(s){if(r){u=t.left;o=true;i=s.pageX;utils.addClass(t.thumbOuter,"lg-dragging");u=u-(i-e);if(u>t.thumbTotalWidth-t.thumbOuterWidth){u=t.thumbTotalWidth-t.thumbOuterWidth}if(u<0){u=0}t.setTranslate(u)}});utils.on(window,"mouseup.lgthumb",function(){if(o){o=false;utils.removeClass(t.thumbOuter,"lg-dragging");t.left=u;if(Math.abs(i-e)<t.core.s.swipeThreshold){t.thumbClickable=true}}else{t.thumbClickable=true}if(r){r=false;utils.removeClass(t.thumbOuter,"lg-grabbing");utils.addClass(t.thumbOuter,"lg-grab")}})};i.prototype.enableThumbSwipe=function(){var t=this;var e=0;var i=0;var r=false;var o=0;utils.on(t.core.outer.querySelector(".lg-thumb"),"touchstart.lg",function(i){if(t.thumbTotalWidth>t.thumbOuterWidth){i.preventDefault();e=i.targetTouches[0].pageX;t.thumbClickable=false}});utils.on(t.core.outer.querySelector(".lg-thumb"),"touchmove.lg",function(u){if(t.thumbTotalWidth>t.thumbOuterWidth){u.preventDefault();i=u.targetTouches[0].pageX;r=true;utils.addClass(t.thumbOuter,"lg-dragging");o=t.left;o=o-(i-e);if(o>t.thumbTotalWidth-t.thumbOuterWidth){o=t.thumbTotalWidth-t.thumbOuterWidth}if(o<0){o=0}t.setTranslate(o)}});utils.on(t.core.outer.querySelector(".lg-thumb"),"touchend.lg",function(){if(t.thumbTotalWidth>t.thumbOuterWidth){if(r){r=false;utils.removeClass(t.thumbOuter,"lg-dragging");if(Math.abs(i-e)<t.core.s.swipeThreshold){t.thumbClickable=true}t.left=o}else{t.thumbClickable=true}}else{t.thumbClickable=true}})};i.prototype.toggle=function(){var t=this;if(t.core.s.toggleThumb){utils.addClass(t.core.outer,"lg-can-toggle");t.thumbOuter.insertAdjacentHTML("beforeend",'<span class="lg-toggle-thumb lg-icon"></span>');utils.on(t.core.outer.querySelector(".lg-toggle-thumb"),"click.lg",function(){if(utils.hasClass(t.core.outer,"lg-thumb-open")){utils.removeClass(t.core.outer,"lg-thumb-open")}else{utils.addClass(t.core.outer,"lg-thumb-open")}})}};i.prototype.thumbkeyPress=function(){var t=this;utils.on(window,"keydown.lgthumb",function(e){if(e.keyCode===38){e.preventDefault();utils.addClass(t.core.outer,"lg-thumb-open")}else if(e.keyCode===40){e.preventDefault();utils.removeClass(t.core.outer,"lg-thumb-open")}})};i.prototype.destroy=function(){if(this.core.s.thumbnail&&this.core.items.length>1){utils.off(window,".lgthumb");this.thumbOuter.parentNode.removeChild(this.thumbOuter);utils.removeClass(this.core.outer,"lg-has-thumb");var t=document.getElementsByClassName("lg-script");while(t[0]){t[0].parentNode.removeChild(t[0])}}};window.lgModules.thumbnail=i})},{}]},{},[1])(1)});
//rebuild by neat 