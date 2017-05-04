import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "fullness",
  pure: false
})

export class FullnessPipe implements PipeTransform {
  transform(input: Keg[], desiredFullness) {
    var output: Keg[] = [];
    if(desiredFullness === "full") {
      for(var i = 0; i < input.length; i ++) {
        if (input[i].pints > 110) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFullness === "half") {
      for(var i = 0; i < input.length; i ++) {
        if (input[i].pints <= 110 && input[i].pints > 62) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFullness === "low") {
      for(var i = 0; i < input.length; i ++) {
        if (input[i].pints <= 62 && input[i].pints > 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFullness === "empty") {
      for(var i = 0; i < input.length; i ++) {
        if (input[i].pints <= 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
