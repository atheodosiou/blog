import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CPanelComponent } from './cPanel.component';
import { RouterModule } from '@angular/router';
import { EditorModule } from 'src/app/shared/components/editor/editor.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: CPanelComponent
    }]),
    EditorModule
  ],
  declarations: [CPanelComponent]
})
export class CPanelModule { }
