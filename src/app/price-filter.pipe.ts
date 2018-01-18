import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './app.component';

@Pipe({
  name: 'priceFilter',
  pure: false
})

export class PriceFilterPipe implements PipeTransform {
  transform(input: Keg[], filter) {
    var output: Keg[] = [];
    if(filter === 0) {
      return input;
    } else if(filter < 21) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price < 21) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(filter < 36) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price < 36) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(filter < 61) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price < 61) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(filter < 91) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price < 91) {
          output.push(input[i]);
        }
      }
      return output;
    }

  }

}
//
// import { Pipe, PipeTransform } from '@angular/core';
//
// import { Keg } from './app.component';
//
// @Pipe({
//   name: 'priceFilter',
//   pure: false
// })
// export class PriceFilterPipe implements PipeTransform {
//
//   transform(input: Keg[]) {
//     const output: Keg[] = [];
//     for(let i = 0; i < input.length; i++) {
//       if(input[i].price < 20) {
//         output.push(input[i]);
//       } else if(input[i].price < 35) {
//         output.push(input[i]);
//       } else if(input[i].price < 60) {
//         output.push(input[i]);
//       } else if(input[i].price < 100){
//         output.push(input[i]);
//       } else if(input[i].price < 250) {
//         output.push(input[i]);
//       } else {
//         return input;
//       }
//     }
//     return output;
//   }
//
// }
