import { Component } from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css'],
})
export class CaseStudiesComponent {
  cards = [
    {
      imageUrl: 'assets/img/1280x960-2.png',
      altText: '1280x960',
      title: 'The Olympian',
      description:
        'The only athlete in the world to do her Olympic routine in 2020.',
    },
    {
      imageUrl: 'assets/img/1280x960-1.png',
      altText: '1280x960',
      title: 'The Savings Jar',
      description: 'Grow your savings treasure and grow your dragon.',
    },
    {
      imageUrl: 'assets/img/1280x960.png',
      altText: '1280x960',
      title: 'Skhokho seMali',
      description:
        'Helping South Africans become #CashCleva with Skhokho and TymeBank.',
    },
    {
      imageUrl: 'assets/img/1280x960-2.png',
      altText: '1280x960',
      title: 'The Olympian',
      description:
        'The only athlete in the world to do her Olympic routine in 2020.',
    },
    {
      imageUrl: 'assets/img/1280x960-1.png',
      altText: '1280x960',
      title: 'The Savings Jar',
      description: 'Grow your savings treasure and grow your dragon.',
    },
    {
      imageUrl: 'assets/img/1280x960.png',
      altText: '1280x960',
      title: 'Skhokho seMali',
      description:
        'Helping South Africans become #CashCleva with Skhokho and TymeBank.',
    },
  ];

  constructor(private productService: ProductService) {}

  ngOnInit() {}
}
