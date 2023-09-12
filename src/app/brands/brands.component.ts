import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  brands: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://localhost:7215/api/Brands?sort=name')
      .subscribe(
        (data) => {
          this.brands = data;
        },
        (error) => {
          console.error('There was an error fetching the brands!', error);
        }
      );
  }
}
