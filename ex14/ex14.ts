import { Component } from '@angular/core';
import { Catalogserviceervice } from '../catalogserviceervice';

@Component({
  selector: 'app-ex14',
  standalone: false,
  templateUrl: './ex14.html',
  styleUrl: './ex14.css',
})
export class Ex14 {
public categories:any

  constructor(cateService: Catalogserviceervice) {
    this.categories = cateService.getCategories()
  }
}
