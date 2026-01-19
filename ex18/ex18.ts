import { Component, OnInit } from '@angular/core';
import { Customerex18Service } from '../customerex18-service';
import { ICustomerType } from '../interface/customertypeex18';

@Component({
  selector: 'app-ex18',
  standalone: false,
  templateUrl: './ex18.html',
})
export class Ex18 implements OnInit {
 groups: ICustomerType[] = [];

  constructor(private _service: Customerex18Service) {}

  ngOnInit(): void {
    this._service.getCustomerGroups().subscribe({
      next: (data) => {
        this.groups = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  
}