import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import moment from 'moment';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {

  now$ = interval(1000)
    .pipe(
      map(() => moment().format('MMMM Do YYYY, h:mm:ss a'))
    )

}
