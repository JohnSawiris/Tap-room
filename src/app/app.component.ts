import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  kegs: Keg[] = [
    new Keg('10 Barrel Baroque Pearl', '10 Barrel Brewing', 'Hazy IPA', 15, 6.4, 124),
    new Keg('Aleson Blending Dubbel', 'Alesong Brewing', 'Belgian-Style Dubbel', 20, 7.1, 124),
    new Keg('Baerlic Primeval', 'Baerlic', 'Brown Ale', 35, 6.8, 124),
    new Keg('Bend Darth Lager', 'Bend Brewing Company', 'Dark Lager', 56, 5.0, 124),
    new Keg('Boneyard Enzymatic', 'Boneyard Beer Company', 'IPA', 90, 7.0, 124),

  ];

  display: boolean = false;

  title: string = 'Tap-Room';

  toggleDisplay() {
    this.display = !this.display;
  }

  saveChanges() {
    this.display = false;
  }

  filterByPrice: number = 0;

  onChange(optionFromMenu) {
    this.filterByPrice = parseInt(optionFromMenu);
  }
}

export class Keg {
  constructor(
    public name: string,
    public brand: string,
    public style: string,
    public price: number,
    public alcoholContent: number,
    public pints: number
  ) { }
}
