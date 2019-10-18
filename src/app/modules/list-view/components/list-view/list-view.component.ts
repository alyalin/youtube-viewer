import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { YtItem } from '../../../../interfaces/yt-response';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() items: YtItem[];
  @Input() pageToken: string;
  @Input() showLoadMoreButton = false;

  @Output() loadMoreClicked = new EventEmitter<string>();
  @Output() addToFavsClicked = new EventEmitter<YtItem>();
  @Output() removeFromFavsClicked = new EventEmitter<YtItem>();

  searchForm = this.fb.group({
    search: ''
  });

  private triggerPipe;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
  }

  loadMore(pageToken: string) {
    this.loadMoreClicked.emit(pageToken);
  }

  addToFavs(item: YtItem) {
    this.addToFavsClicked.emit(item);
    this.updatePipe();
  }

  removeFromFavs(item: YtItem) {
    this.removeFromFavsClicked.emit(item);
    this.updatePipe();
  }

  trackByFn(index: number, item: YtItem): string {
    return item.id;
  }

  updatePipe() {
    this.triggerPipe = new Date();
  }
}
