import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }



  public get currentYear() {
    return new Date().getFullYear();
  }// CurrentYear

  public get currentVersion() {
    return '1.0.0-Demo';
  }// CurrentVersion

}// FooterComponent
