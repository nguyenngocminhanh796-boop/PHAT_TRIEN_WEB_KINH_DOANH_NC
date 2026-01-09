import { Component } from '@angular/core';
import { LunarYear } from '../lunaryear';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.css',
})
export class Ex10 {
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  years: number[] = Array.from({ length: 100 }, (_, i) => 1950 + i);

  selectedDay = 15;
  selectedMonth = 5;
  selectedYear = 1986;

  result: any;

  convert() {
  const lunar = new LunarYear();
  this.result = lunar.convert(
    Number(this.selectedDay),
    Number(this.selectedMonth),
    Number(this.selectedYear)
  );
}

}
