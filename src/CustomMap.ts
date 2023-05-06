import { User } from "./User";
import { Company } from "./Company";

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        center: { lat: 40.7127, lng: -73.9872 },
        zoom: 1,
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });

    marker.addListener("click", () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infowindow.open(this.googleMap, marker);
    });
  }
}
