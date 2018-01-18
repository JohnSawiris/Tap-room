import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Keg } from '../app.component';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})

export class AddKegComponent implements OnInit {

  @Input() kegs: Keg[];

  display: boolean = false;

  toggle() {
    this.display = !this.display;
  }

  constructor() { }

  ngOnInit() {
  }

  add(name, brand, style, price, alcohol, qty){
    const newKeg: Keg = new Keg(name, brand, style, price, alcohol, qty);
    this.kegs.push(newKeg)
    this.toggle();
  }

}
