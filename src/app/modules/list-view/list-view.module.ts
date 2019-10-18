import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule, MatTooltipModule
} from '@angular/material';

import { ListViewComponent } from './components/list-view/list-view.component';
import { VerifyInFavsPipe } from '../../pipes/verify-in-favs.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListViewComponent, VerifyInFavsPipe, FilterPipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  exports: [ ListViewComponent ]
})
export class ListViewModule { }
