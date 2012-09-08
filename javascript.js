/*
This is a dummy Javascript file for the Secrest Barn website.  It should demonstrate all the basic Javascript functions
as a primer.  For instance, this is an example of a MULTILINE COMMENT.  Everything between the "forward slash + star"
and "star + forward slash" will not be executed by the computer.
*/

// This is a single line comment

var testMessage = "Hello, Coders!"

/*
http://atomicrobotdesign.com/blog/htmlcss/using-html5-geolocation-and-the-google-maps-api/
From Google Maps navigation to barn:
'..41.613533,-91.370416'
*/

function initialize() {
    var secrestBarn = new google.maps.LatLng(41.613533,-91.370416);
    var myOptions = {
        zoom: 15,
        center: secrestBarn,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var mapDiv = document.getElementById("mapDiv");
    var map = new google.maps.Map(mapDiv, myOptions);
    var marker = new google.maps.Marker({
        position: secrestBarn,
        map: map,
        title: "Secrest 1883 Octagonal Barn"
    });
}
