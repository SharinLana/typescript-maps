var $2K9WE$fakerjsfaker = require("@faker-js/faker");


class $294d7bc95a0418ff$export$1f44aaf2ec115b54 {
    constructor(){
        this.username = (0, $2K9WE$fakerjsfaker.faker).internet.userName();
        this.location = {
            lat: parseInt((0, $2K9WE$fakerjsfaker.faker).address.latitude()),
            lng: parseInt((0, $2K9WE$fakerjsfaker.faker).address.longitude())
        };
    }
    markerContent() {
        return `User Name: ${this.username} `;
    }
}



class $7bd410017bbf7f42$export$17f7382901150e2d {
    color = "blue";
    constructor(){
        this.companyName = (0, $2K9WE$fakerjsfaker.faker).company.name();
        this.companyPhrase = (0, $2K9WE$fakerjsfaker.faker).company.catchPhrase();
        this.location = {
            lat: Number((0, $2K9WE$fakerjsfaker.faker).address.latitude()),
            lng: Number((0, $2K9WE$fakerjsfaker.faker).address.longitude())
        };
    }
    markerContent() {
        return `
    <div>
    <h1>Company Name: ${this.companyName},</h1>
    <h3>Catchphrase: ${this.companyPhrase},</h3>
    </div>
    `;
    }
}


class $6835e66ad6466611$export$a40fa15aabaab773 {
    constructor(divId){
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            center: {
                lat: 40.7127,
                lng: -73.9872
            },
            zoom: 1
        });
    }
    addMarker(mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        marker.addListener("click", ()=>{
            const infowindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infowindow.open(this.googleMap, marker);
        });
    }
}


const $882b6d93070905b3$var$user = new (0, $294d7bc95a0418ff$export$1f44aaf2ec115b54)();
const $882b6d93070905b3$var$company = new (0, $7bd410017bbf7f42$export$17f7382901150e2d)();
let $882b6d93070905b3$var$customMap = new (0, $6835e66ad6466611$export$a40fa15aabaab773)("map");
$882b6d93070905b3$var$customMap.addMarker($882b6d93070905b3$var$user);
$882b6d93070905b3$var$customMap.addMarker($882b6d93070905b3$var$company);


//# sourceMappingURL=index.js.map
