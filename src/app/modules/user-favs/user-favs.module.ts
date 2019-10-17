import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFavsContainerComponent } from './container/user-favs-container/user-favs-container.component';
import { RouterModule } from '@angular/router';
import { USER_FAVS_ROUTES } from './user-favs.routes';
import { ListViewModule } from '../list-view/list-view.module';

@NgModule({
  declarations: [UserFavsContainerComponent],
  imports: [
    CommonModule,
    ListViewModule,
    RouterModule.forChild(USER_FAVS_ROUTES)
  ]
})
export class UserFavsModule { }
