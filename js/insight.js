// build time:Sun Apr 21 2019 01:03:02 GMT+0800 (GMT+08:00)
(function(n,t){var e=n(".ins-search");var r=e.find(".ins-search-input");var a=e.find(".ins-section-wrapper");var i=e.find(".ins-section-container");e.parent().remove(".ins-search");n("body").append(e);function s(t){return n("<section>").addClass("ins-section").append(n("<header>").addClass("ins-section-header").text(t))}function c(e,r,a,i,s){return n("<div>").addClass("ins-selectable").addClass("ins-search-item").append(n("<header>").append(n("<i>").addClass("fa").addClass("fa-"+e)).append(r!=null&&r!=""?r:t.TRANSLATION["UNTITLED"]).append(a?n("<span>").addClass("ins-slug").text(a):null)).append(i?n("<p>").addClass("ins-search-preview").html(i):null).attr("data-url",s)}function o(n,e,r){var a;var i;var o=f(n);if(r.length===0)return null;a=t.TRANSLATION[e];switch(e){case"POSTS":case"PAGES":i=r.map(function(n){var e=n.firstOccur>20?n.firstOccur-20:0;var r="";delete n.firstOccur;o.forEach(function(t){var e=new RegExp(t,"gi");r=n.text.replace(e,'<em class="search-keyword"> '+t+" </em>")});r=r?r.slice(e,e+80):n.text.slice(0,80);return c("file",n.title,null,r,t.ROOT_URL+n.path)});break;case"CATEGORIES":case"TAGS":i=r.map(function(n){return c(e==="CATEGORIES"?"folder":"tag",n.name,n.slug,null,n.permalink)});break;default:return null}return s(a).append(i)}function u(n,t){var e={};var r=n.pages.concat(n.posts);r.forEach(function(n){if(n[t]){n[t].forEach(function(n){e[n.name]=n})}});var a=[];for(var t in e){a.push(e[t])}return a}function f(n){return n.split(" ").filter(function(n){return!!n}).map(function(n){return n.toUpperCase()})}function l(n,t,e){var r=false;var a=f(n);var i=a.filter(function(n){var r=e.filter(function(e){if(!t.hasOwnProperty(e))return false;var r=t[e].toUpperCase().indexOf(n);if(r>-1){if(e=="text")t["firstOccur"]=r;return true}});if(r.length>0)return true;return false});return i.length===a.length}function p(n){return{POST:function(t){return l(n,t,["title","text"])},PAGE:function(t){return l(n,t,["title","text"])},CATEGORY:function(t){return l(n,t,["name","slug"])},TAG:function(t){return l(n,t,["name","slug"])}}}function d(n,t,e,r){var a=0;f(n).forEach(function(n){var i=new RegExp(n,"img");e.forEach(function(n,e){if(t.hasOwnProperty(n)){var s=t[n].match(i);a+=s?s.length*r[e]:0}})});return a}function h(n){return{POST:function(t){return d(n,t,["title","text"],[3,1])},PAGE:function(t){return d(n,t,["title","text"],[3,1])},CATEGORY:function(t){return d(n,t,["name","slug"],[1,1])},TAG:function(t){return d(n,t,["name","slug"],[1,1])}}}function v(n,t){var e=h(t);var r=p(t);var a=n.posts;var i=n.pages;var s=u(n,"tags");var c=u(n,"categories");return{posts:a.filter(r.POST).sort(function(n,t){return e.POST(t)-e.POST(n)}),pages:i.filter(r.PAGE).sort(function(n,t){return e.PAGE(t)-e.PAGE(n)}),categories:c.filter(r.CATEGORY).sort(function(n,t){return e.CATEGORY(t)-e.CATEGORY(n)}),tags:s.filter(r.TAG).sort(function(n,t){return e.TAG(t)-e.TAG(n)})}}function g(n,t){i.empty();for(var e in t){i.append(o(n,e.toUpperCase(),t[e]))}}function T(n){if(n.length===0)return;var t=a[0].clientHeight;var e=n.position().top-a.scrollTop();var r=n[0].clientHeight+n.position().top;if(r>t+a.scrollTop()){a.scrollTop(r-a[0].clientHeight)}if(e<0){a.scrollTop(n.position().top)}}function C(t){var e=n.makeArray(i.find(".ins-selectable"));var r=-1;e.forEach(function(t,e){if(n(t).hasClass("active")){r=e;return}});var a=(e.length+r+t)%e.length;n(e[r]).removeClass("active");n(e[a]).addClass("active");T(n(e[a]))}function O(n){if(n&&n.length){location.href=n.attr("data-url")}}n.getJSON(t.CONTENT_URL,function(t){if(location.hash.trim()==="#ins-search"){e.addClass("show")}r.on("input",function(){var e=n(this).val();g(e,v(t,e))});r.trigger("input")});n(document).on("click focus",".search-form-input",function(){e.addClass("show");e.find(".ins-search-input").focus()}).on("click",".ins-search-item",function(){O(n(this))}).on("click",".ins-close",function(){e.removeClass("show")}).on("keydown",function(n){if(!e.hasClass("show"))return;switch(n.keyCode){case 27:e.removeClass("show");break;case 38:C(-1);break;case 40:C(1);break;case 13:O(i.find(".ins-selectable.active").eq(0));break}})})(jQuery,window.INSIGHT_CONFIG);
//rebuild by neat 