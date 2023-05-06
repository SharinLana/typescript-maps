import { faker } from "@faker-js/faker";

export class User {
  username: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.username = faker.internet.userName();
    this.location = {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.username} `;
  }
}
