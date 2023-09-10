import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudiesComponent } from './case-studies.component';
import { CaseStudySquareComponent } from './case-study-square/case-study-square.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, ButtonModule, CarouselModule],
  declarations: [CaseStudiesComponent, CaseStudySquareComponent],
  exports: [CaseStudiesComponent],
})
export class CaseStudiesModule {}
