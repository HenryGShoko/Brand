import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudiesComponent } from './case-studies.component';
import { CaseStudySquareComponent } from './case-study-square/case-study-square.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CaseStudiesComponent, CaseStudySquareComponent],
  exports: [CaseStudiesComponent],
})
export class CaseStudiesModule {}
