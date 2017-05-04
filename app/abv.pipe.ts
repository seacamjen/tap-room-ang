import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "abv",
  pure: false
})

export class AbvPipe implements PipeTransform {
  transform(input: Keg[], desiredAbv) {
    var output: Keg[] = [];
    if(desiredAbv === "lowAbv"){
      for(var i = 0; i < input.length; i ++) {
        if (input[i].alcoholContent < 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAbv === "highAbv") {
      for(var i = 0; i < input.length; i ++) {
        if (input[i].alcoholContent >= 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
