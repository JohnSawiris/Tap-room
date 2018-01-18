import { Component, OnInit, Input, Output } from '@angular/core';

import { Keg } from '../app.component';
@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {

  @Input() childKegs: Keg[];
  @Input() childDisplay: boolean;
  @Input() filter: number;

  selectedKeg: Keg = null;

  constructor() { }

  ngOnInit() {
  }

  pour(clickedKeg, amt) {
    clickedKeg.pints -= amt;
  }

  toggle() {
    this.childDisplay = !this.childDisplay;
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    this.childDisplay = true;
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

  highABV(currentKeg) {
    if (currentKeg.alcoholContent >= 7) {
      return "red text-card";
    } else {
      return "text-card";
    }
  }

  alert(currentKeg) {
    if (currentKeg.pints < 10) {
      return "bg-danger";
    } else {
      return "";
    }
  }
}
