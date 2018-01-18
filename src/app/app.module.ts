import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { PriceFilterPipe } from './price-filter.pipe';
import { EditKegComponent } from './edit-keg/edit-keg.component';



@NgModule({
  declarations: [
    AppComponent,
    AddKegComponent,
    PriceFilterPipe,
    EditKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
