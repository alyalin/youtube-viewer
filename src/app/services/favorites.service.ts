import { Injectable } from '@angular/core';
import { YtItem } from '../interfaces/yt-response';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private savedItems: YtItem[] = localStorage.getItem('YtFavs') ? JSON.parse(localStorage.getItem('YtFavs')) : [];

  get items(): YtItem[] {
    return JSON.parse(localStorage.getItem('YtFavs'));
  }

  constructor() { }

  addItem(item: YtItem) {
    this.savedItems = [
      ...this.savedItems,
      item
    ];
    localStorage.setItem('YtFavs', JSON.stringify(this.savedItems));
  }

  rmItem(item: YtItem) {
    this.savedItems = this.savedItems.filter((savedItem: YtItem) => savedItem.id !== item.id);
    localStorage.setItem('YtFavs', JSON.stringify(this.savedItems));
  }
}
