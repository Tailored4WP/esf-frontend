$(document).ready(function(){$(".skip-links a").click(function(t){var n="#"+this.href.split("#")[1];$(n).attr("tabindex",-1).on("blur focusout",function(){$(this).removeAttr("tabindex")}).focus()}),$("body").addClass("js");var t=$("#page-nav"),n=$(".menu-link");n.click(function(){return n.toggleClass("is-active"),t.toggleClass("is-opened"),!1});var i=$(".tab-nav .is-active a");i.click(function(){return $(this).parent().parent().toggleClass("is-opened"),!1});var o=0,e=0,s=new Array,r,c=0;$(".hero-content .card").each(function(){if(r=$(this),topPostion=r.position().top,e!=topPostion){for(currentDiv=0;currentDiv<s.length;currentDiv++)s[currentDiv].height(o);s.length=0,e=topPostion,o=r.height(),s.push(r)}else s.push(r),o=o<r.height()?r.height():o;for(currentDiv=0;currentDiv<s.length;currentDiv++)s[currentDiv].height(o);$(window).resize(function(){columnConform()})}),$(".primary-nav a").focus(function(){$(this).closest(".dropdown").addClass("is-focused")}).focusout(function(){$(this).closest(".dropdown").removeClass("is-focused")})});