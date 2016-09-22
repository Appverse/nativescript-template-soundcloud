import { Component, OnInit } from '@angular/core';
import {Page} from 'ui/page';
import {SoundcloudService, Track} from '../../services/soundcloud.service';

@Component({
  moduleId: module.id,
  selector: 'sc-tracks-page',
  templateUrl: 'tracks.page.html',
  styleUrls: ['tracks.page.css']
})
export class TracksPage implements OnInit {

  progressValue: number = 0;
  intervalId: number;
  tracks: Track[];

  constructor(private soundcloudService: SoundcloudService, page: Page) {
    page.actionBar.title = 'API';
  }

  searchTrack(text) {
    this.soundcloudService.listTracks(text).subscribe(tracks => this.tracks = tracks);
  }

  ngOnInit() {
    this.intervalId = setInterval(() => this.progressValue += 4, 50);
  }
}
