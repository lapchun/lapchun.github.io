// build time:Thu May 14 2020 10:59:08 GMT+0800 (GMT+08:00)
var searchFunc=function(t,e,a){"use strict";var i=document.getElementById(e);var r=document.getElementById(a);r.innerHTML='<div class="m-auto text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div><br/>Loading...</div>';$.ajax({url:t,dataType:"xml",success:function(t){var e=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();r.innerHTML="";i.addEventListener("input",function(){var t="";var a=this.value.trim().toLowerCase().split(/[\s-]+/);r.innerHTML="";if(this.value.trim().length<=0){return}e.forEach(function(e){var i=true;if(!e.title||e.title.trim()===""){e.title="Untitled"}var r=e.title.trim();var n=r.toLowerCase();var s=e.content.trim().replace(/<[^>]+>/g,"");var l=s.toLowerCase();var c=e.url;var o=-1;var v=-1;var u=-1;if(l!==""){a.forEach(function(t,e){o=n.indexOf(t);v=l.indexOf(t);if(o<0&&v<0){i=false}else{if(v<0){v=0}if(e===0){u=v}}})}else{i=false}if(i){t+="<a href='"+c+"' class='list-group-item list-group-item-action font-weight-bolder search-list-title'>"+r+"</a>";var d=s;if(u>=0){var f=u-20;var h=u+80;if(f<0){f=0}if(f===0){h=100}if(h>d.length){h=d.length}var m=d.substring(f,h);a.forEach(function(t){var e=new RegExp(t,"gi");m=m.replace(e,"<span class='pink-text'>"+t+"</span>")});t+="<p class='search-list-content'>"+m+"...</p>"}}});const i=$("#local-search-input");if(t.indexOf("list-group-item")===-1){return i.addClass("invalid").removeClass("valid")}i.addClass("valid").removeClass("invalid");r.innerHTML=t})}});$(document).on("click","#local-search-close",function(){$("#local-search-input").val("").removeClass("invalid").removeClass("valid");$("#local-search-result").html("")})};
//rebuild by neat 