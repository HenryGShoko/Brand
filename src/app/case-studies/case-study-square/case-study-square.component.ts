import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-study-square',
  templateUrl: './case-study-square.component.html',
  styleUrls: ['./case-study-square.component.css'], // Add any required styles
})
export class CaseStudySquareComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
