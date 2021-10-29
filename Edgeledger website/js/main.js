// Initialize and add the map

function initMap() {
// your location
const loc= { lat: 9.037790, lng: 7.491230 };
// centered map on location

const map = new google.maps.Map(document.querySelector('.map')
,{
    zoom:14
    center:loc
});

// The marker, positioned at location
const marker= new google.maps.Marker({position: loc,map:map});

}

// smoth scrolling
$("#navbar a, .btn").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
     $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
    });
} // End if
});
});