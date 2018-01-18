import { Component } from '@angular/core';

// import { AddKegComponent } from './add-keg/add-keg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap-Room';

  display: boolean = false;

  kegs: Keg[] = [
    new Keg('10 Barrel Baroque Pearl', '10 Barrel Brewing', 'Hazy IPA', 15, 6.4, 124),
    new Keg('Aleson Blending Dubbel', 'Alesong Brewing', 'Belgian-Style Dubbel', 20, 7.1, 124),
    new Keg('Baerlic Primeval', 'Baerlic', 'Brown Ale', 35, 6.8, 124),
    new Keg('Bend Darth Lager', 'Bend Brewing Company', 'Dark Lager', 56, 5.0, 124),
    new Keg('Boneyard Enzymatic', 'Boneyard Beer Company', 'IPA', 90, 7.0, 124),
    new Keg('Firestone Walker 805', 'Firestone Walker Brewing Company', 'Blonde Ale', 200, 4.7, 124)
  ];
  selectedKeg: Keg = this.kegs[0];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    this.display = true;
  }

  toggleDisplay() {
    this.display = !this.display;
  }

  pour(clickedKeg, amt) {
    clickedKeg.pints -= amt;
  }

  priceCode(currentKeg) {
    if(currentKeg.price > 0 && currentKeg.price <= 19) {
      return "bg-primary card col-lg-4 text-white mb-1";
    } else if(currentKeg.price >= 20 && currentKeg.price < 40) {
      return "bg-success card col-lg-4 text-white mb-1";
    } else if(currentKeg.price >= 40 && currentKeg.price < 90) {
      return "bg-info card col-lg-4 text-white mb-1";
    } else if(currentKeg.price > 90) {
      return "bg-secondary card text-white col-lg-4 mb-1";
    } else {
      return "card col-lg-4 text-white bg-dark mb-1";
    }
  }

  alert(currentKeg) {
    if (currentKeg.pints < 10) {
      return "bg-danger";
    } else {
      return "";
    }
  }

  highABV(currentKeg) {
    if (currentKeg.alcoholContent >= 7) {
      return "red text-card";
    } else {
      return "text-card";
    }
  }

  saveChanges() {
    this.display = false;
  }

  filterByPrice: number = 0;

  onChange(optionFromMenu) {
    this.filterByPrice = parseInt(optionFromMenu);
    console.log(this.filterByPrice);
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
