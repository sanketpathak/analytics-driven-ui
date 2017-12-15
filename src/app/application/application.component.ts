import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.less']
})
export class ApplicationComponent implements OnInit {
  public showtd: boolean = false;
  public symbol: string = 'fa fa-angle-right';
  public trial: any;
  constructor() { }

  ngOnInit() {
  }
  private toggle_td() {
    this.showtd = !this.showtd;
    if (this.showtd === true) {
        this.symbol = 'fa fa-angle-down';
    }
    else {
        this.symbol = 'fa fa-angle-right';
    }
  }
}
