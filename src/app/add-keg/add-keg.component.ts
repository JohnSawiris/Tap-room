import { Component, OnInit, Input } from '@angular/core';

import { Keg } from '../app.component';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent implements OnInit {

  @Input() kegs;

  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay() {
    this.display = !this.display;
  }

  add(name, brand, style, price, alcohol, qty){
    const newKeg = new Keg(name, brand, style, price, alcohol, qty);
    this.kegs.push(newKeg)
    this.toggleDisplay();
  }

}
