import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import * as Rx from 'rxjs';

@Injectable()
export class SoundcloudService {

  private clientIdParam$: Rx.Observable<URLSearchParams>;

  constructor(private http: Http) {}

  listTracks(track: string): Rx.Observable<Track[]> {
    return this.getClientIdParam()
      .flatMap(searchParams => {
        if (track) {
          searchParams.set('q', track);
        }
        return this.http.get('https://api.soundcloud.com/tracks', {
          search: searchParams
        });
      })
      .map(response => response.json() as Track[]);
  }

  private getClientIdParam(): Rx.Observable<URLSearchParams> {
    if (!this.clientIdParam$) {
      this.clientIdParam$ = this.http.get(`~/secrets.json`)
        .map(result => result.json())
        .map(apiKeys => new URLSearchParams(`client_id=${apiKeys.client_id}`))
        .first().cache();
    }
    return this.clientIdParam$;
  }
}

export interface Track {
  title: string;
  artwork_url: string;
  genre: string;
}
