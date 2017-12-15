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
    var c3ChartDefaults = c3.generate({
  
     donutData = {
      type : 'donut',
      colors: {
        'Apache2.0' : $.pfPaletteColors.blue,
        'EPL1.0' : $.pfPaletteColors.orange,
        'MIT Liscense' : $.pfPaletteColors.green,
      },
      columns: [
        ['EPL 1.0', 2],
        ['MIT Liscense', 3],
        ['Apache 2.0', 1]
      ],
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
      title: "3 Liscences"
    }
  });
    // Small Donut Chart
    var donutChartSmallConfig = c3ChartDefaults.getDefaultDonutConfig('8');
    donutChartSmallConfig.bindto = '#donut-chart-7';
    donutChartSmallConfig.tooltip = {show: true};
    donutChartSmallConfig.data = donutData;
    donutChartSmallConfig.legend = {
      show: true,
      position: 'right'
    };
    donutChartSmallConfig.size = {
      width: 250,
      height: 115
    };
    donutChartSmallConfig.tooltip = {
      contents: $().pfDonutTooltipContents
    };
  
    var donutChartSmall = c3.generate(donutChartSmallConfig);
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
