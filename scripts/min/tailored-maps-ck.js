jQuery(document).ready(function(e){function n(){e(".tailored-maps").parent().width()>400?e(".tailored-maps").parent().removeClass("narrow").addClass("wide"):e(".tailored-maps").parent().removeClass("wide").addClass("narrow")}function t(){e(".tailored-maps").each(function(n,t){var a,o=new google.maps.LatLng(0,0),r=new google.maps.Geocoder,i=new google.maps.LatLngBounds,c=128,s=0,p=!0,l=e(t).attr("data-maps"),m=e(t).next().find("button.pan-up"),u=e(t).next().find("button.pan-bottom"),g=e(t).next().find("button.pan-left"),f=e(t).next().find("button.pan-right"),d=e(t).next().find("button.center"),k=e(t).next().find("button.zoom-in"),y=e(t).next().find("button.zoom-out"),v=e(t).next().find("button.next-marker");$controlsPrev=e(t).next().find("button.prev-marker"),m.click(function(e){e.preventDefault(),a.panBy(0,-c)}),u.click(function(e){e.preventDefault(),a.panBy(0,c)}),g.click(function(e){e.preventDefault(),a.panBy(-c,0)}),f.click(function(e){e.preventDefault(),a.panBy(c,0)}),d.click(function(e){e.preventDefault(),a.panTo(i.getCenter())}),k.click(function(e){e.preventDefault(),a.setZoom(a.getZoom()+1)}),y.click(function(e){e.preventDefault(),a.setZoom(a.getZoom()-1)}),v.click(function(e){e.preventDefault(),s++,p===!0?(s=0,p=!1):s>marker_array.length-1&&(s=0),a.panTo(marker_array[s].getPosition()),a.setCenter(marker_array[s].getPosition()),google.maps.event.trigger(marker_array[s],"click")}),$controlsPrev.click(function(e){e.preventDefault(),s--,0>s&&(s=marker_array.length-1),a.panTo(marker_array[s].getPosition()),a.setCenter(marker_array[s].getPosition()),google.maps.event.trigger(marker_array[s],"click")}),l=jQuery.parseJSON(l),marker_array=[],a=new google.maps.Map(t,{disableDefaultUI:!0,disableDoubleClickZoom:!0,scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP});var b=new google.maps.InfoWindow;e.each(l,function(e,n){marker=new google.maps.Marker({position:new google.maps.LatLng(l[e].lat,l[e].long),map:a,icon:l[e].image}),i.extend(marker.position),google.maps.event.addListener(marker,"click",function(e,n){return function(){b.setContent(l[n].markup),b.open(a,e)}}(marker,e)),marker_array.push(marker)}),a.setCenter(i.getCenter()),a.fitBounds(i),e(this).attr("tabIndex",0),e(this).keydown(function(e){if(-1!=[37,38,39,40,109,189,219,107,187,221].indexOf(e.keyCode))switch(e.preventDefault(),e.stopPropagation(),e.keyCode){case 37:a.panBy(-c,0);break;case 38:a.panBy(0,-c);break;case 39:a.panBy(c,0);break;case 40:a.panBy(0,c);break;case 109:case 189:case 219:a.setZoom(a.getZoom()-1);break;case 107:case 187:case 221:a.setZoom(a.getZoom()+1)}})})}e(window).on("resize",function(){n()}),n(),t()});