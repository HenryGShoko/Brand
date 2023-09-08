import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './service-card/service-card.component';
import { WhatWeDoComponent } from './what-we-do.component';

@NgModule({
  declarations: [ServiceCardComponent, WhatWeDoComponent],
  imports: [CommonModule],
  exports: [WhatWeDoComponent],
})
export class WhatWeDoModule {}
