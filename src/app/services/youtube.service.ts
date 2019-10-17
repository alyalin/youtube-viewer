import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { YtItem, YtResponse } from '../interfaces/yt-response';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor(private http: HttpClient) { }

  mostPopular(pageToken?): Observable<YtResponse> {
    let params;
    if (pageToken) {
      params = new HttpParams()
        .set('part', 'snippet')
        .set('chart', 'mostPopular')
        .set('key', environment.ytApiKey)
        .set('regionCode', 'RU')
        .set('pageToken', pageToken);
    } else {
      params = new HttpParams()
        .set('part', 'snippet')
        .set('chart', 'mostPopular')
        .set('regionCode', 'RU')
        .set('key', environment.ytApiKey);
    }
    return this.http.get<YtResponse>(`${environment.ytEndpoint}/videos`, { params });
  }
}
