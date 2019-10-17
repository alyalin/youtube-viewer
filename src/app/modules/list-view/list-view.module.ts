import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatDividerModule } from '@angular/material';

import { ListViewComponent } from './components/list-view/list-view.component';


@NgModule({
  declarations: [ListViewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [ ListViewComponent ]
})
export class ListViewModule { }
