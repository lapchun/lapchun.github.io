// build time:Tue May 21 2019 13:20:56 GMT+0800 (GMT+08:00)
(function(t){var e=t("#sidebar").height()-t(window).height()+60;t(".article-entry").each(function(e){t(this).find("img").each(function(){if(this.alt&&!(!!t.prototype.justifiedGallery&&t(this).parent(".justified-gallery").length)){t(this).after('<span class="caption">'+this.alt+"</span>")}if(t(this).parent().prop("tagName")!=="A"){t(this).wrap('<a href="'+this.src+'" title="'+this.alt+'" class="gallery-item"></a>')}})});if(lightGallery){var i={selector:".gallery-item"};t(".article-entry").each(function(t,e){lightGallery(e,i)});lightGallery(t(".article-gallery")[0],i)}if(!!t.prototype.justifiedGallery){var i={rowHeight:140,margins:4,lastRow:"justify"};t(".justified-gallery").justifiedGallery(i)}t(document).on("click",function(){t("#profile").removeClass("card")}).on("click","#profile-anchor",function(e){e.stopPropagation();t("#profile").toggleClass("card")}).on("click",".profile-inner",function(t){t.stopPropagation()});if(t("#sidebar").length){t(document).on("scroll",function(){if(t(document).width()>=800){if(t(this).scrollTop()>e&&t(this).scrollTop()>0){t("#toTop").fadeIn();t("#toTop").css("left",t("#sidebar").offset().left)}else{t("#toTop").fadeOut()}}else{t("#toTop").fadeOut()}}).on("click","#toTop",function(){t("body, html").animate({scrollTop:0},600)})}t("ul > li").each(function(){var e={field:this.textContent.substring(0,2),check:function(t){var e=new RegExp(t);return this.field.match(e)}};var i=["[ ]",["[x]","checked"]];var l=e.check(i[1][0]);var a=e.check(i[0]);var o=t(this);function c(t,e){var i=["disabled",""];o.html(o.html().replace(t,"<input type='checkbox' "+e+" "+i[1]+" >"))}if(l||a){this.classList.add("task-list");if(l){c(i[1][0],i[1][1]);this.classList.add("check")}else{c(i[0],"")}}});t(document).on("click",'input[type="checkbox"]',function(t){t.preventDefault()})})(jQuery);
//rebuild by neat 