import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../../../services/favorites.service';
import { YtItem } from '../../../../interfaces/yt-response';

@Component({
  selector: 'app-user-favs-container',
  templateUrl: './user-favs-container.component.html',
  styleUrls: ['./user-favs-container.component.scss']
})
export class UserFavsContainerComponent implements OnInit {

  items = this.favsService.items;

  constructor(private readonly favsService: FavoritesService) { }

  ngOnInit() {}

  handleRemoveFromFavsClicked(item: YtItem) {
    this.favsService.rmItem(item);
    this.items = this.favsService.items;
  }
}
