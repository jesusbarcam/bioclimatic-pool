import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'bioh-wallpaper',
  templateUrl: './bioh-wallpaper.component.html',
  styleUrls: ['./bioh-wallpaper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiohWallpaperComponent implements OnInit {

  @Input()
  public url: string;

  constructor() {
  }// Constructor


  ngOnInit() {
  }// NgOnInit


}// BiohWallpaperComponents
