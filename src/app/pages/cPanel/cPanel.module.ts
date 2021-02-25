import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CPanelComponent } from './cPanel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: CPanelComponent
    }])
  ],
  declarations: [CPanelComponent]
})
export class CPanelModule { }
