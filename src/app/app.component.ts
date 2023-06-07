import { Component } from '@angular/core';
import { CounterStateService } from './pages/_states/counter-state.service';

export class QueryStringMaskHelper {
  public static Mask(value: any) {
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        const element = value[key];
      }
    }
    return value;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  /**
   *
   */


  constructor(public cs: CounterStateService) {


  }

  queryString = QueryStringMaskHelper.Mask({ id: 1, name: 'test' });

  title = 'SiemensApp3';
}
