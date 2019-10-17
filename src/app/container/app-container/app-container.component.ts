import { Component, OnDestroy, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { YtItem } from '../../interfaces/yt-response';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit, OnDestroy {
  nextPageToken: string;
  items = [];

  private readonly destroyed$ = new ReplaySubject(1);

  private readonly pageToken = new BehaviorSubject<string>(null);
  set addPageToken(token) {
    this.pageToken.next(token);
  }
  get pageToken$() {
    return this.pageToken.asObservable();
  }

  constructor(private readonly ytService: YoutubeService, private readonly favsService: FavoritesService) { }

  ngOnInit() {
    this.getMostPopularFromYt();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getMostPopularFromYt() {
    this.pageToken$.pipe(
      takeUntil(this.destroyed$),
      distinctUntilChanged(),
      switchMap(token => this.ytService.mostPopular(token))
    ).subscribe(response => {
      this.items = [...this.items, ...response.items];
      this.nextPageToken = response.nextPageToken;
    });
  }

  handleLoadMoreClicked(pageToken: string) {
    this.addPageToken = pageToken;
  }

  handleAddToFavs(item: YtItem) {
    this.favsService.addItem(item);
  }

  handleRemoveFromFavsClicked(item: YtItem) {
    this.favsService.rmItem(item);
  }
}
