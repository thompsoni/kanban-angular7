import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs/operator/take';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, OnDestroy {
  public bubble: Object[];
  public view: number[];
  public colorScheme: Object;
  public schemeType: string;
  public animations: boolean;
  public showGridLines: boolean;
  public showLegend: boolean;
  public legendTitle: string;
  public showXAxis: boolean;
  public showYAxis: boolean;
  public showXAxisLabel: boolean;
  public showYAxisLabel: boolean;
  public xAxisLabel: string;
  public yAxisLabel: string;
  public autoScale: boolean;
  public xScaleMin: any;
  public xScaleMax: any;
  public yScaleMin: any;
  public yScaleMax: any;
  public roundDomains: boolean;
  public tooltipDisabled: boolean;
  public minRadius: number;
  public maxRadius: number;

  constructor(
    private msgServ: MessagesService,
    private breadServ: BreadcrumbService,
    private auth: AuthService,
  ) {
    this.bubble = [
      {
        name: 'Group: Patria Financial Oyj consolidation to Patria Oyj',
        series: [
          {
            name: 'M',
            x: 750,
            y: 890,
            r: 1300 / 120
          },
        ]
      },
      {
        name: 'Group: Update to corporate responsibility policy',
        series: [
          {
            name: 'S',
            x: 0,
            y: 0,
            r: 700 / 180
          }
        ]
      },
      {
        name: 'Group: Improve facility energy efficiency',
        series: [
          {
            name: 'L',
            x: 1750,
            y: 3800,
            r: 2.5
          }
        ]
      },
      {
        name: 'Aviation: the industrial participation',
        series: [
          {
            name: 'XS',
            x: 750,
            y: 1500,
            r: 1500 / 280
          }
        ]
      },
      {
        name: 'Systems: Establishing a centre of expertise in missile technologies',
        series: [
          {
            name: 'L',
            x: 1400,
            y: 7200,
            r: 14.4
          }
        ]
      },
      {
        name: 'Group: Enhance occupational safety',
        series: [
          {
            name: 'M',
            x: 3200,
            y: 5000,
            r: 5000 / 300
          }
        ]
      },
      {
        name: 'Land: Customer satisfaction measurement',
        series: [
          {
            name: 'S',
            x: 1800,
            y: 2400,
            r: 8
          }
        ]
      },
      {
        name: 'Land: Corrective measures to clarify the international marketing procedures',
        series: [
          {
            name: 'M',
            x: 3500,
            y: 7000,
            r: 7000 / 365
          }
        ]
      },
      {
        name: 'Systems: Cyber security and responding to hybrid threats',
        series: [
          {
            name: 'M',
            x: 7200,
            y: 12000,
            r: 12000 / 960
          }
        ]
      },
      {
        name: 'Group: The Nordic Defence Cooperation, NORDEFCO',
        series: [
          {
            name: 'L',
            x: 1245,
            y: 3600,
            r: 3600 / 300
          }
        ]
      },
      {
        name: 'Group: Implementing Global Reporting Initiative (GRI)',
        series: [
          {
            name: 'S',
            x: 6800,
            y: 10000,
            r: 10000 / 730
          }
        ]
      },
      {
        name: 'Aviation: adopt new core processes and management model',
        series: [
          {
            name: 'L',
            x: 9500,
            y: 20000,
            r: 20000 / 750
          }
        ]
      },
      {
        name: 'Aviation: designing the contents of the fleet maintenance concept',
        series: [
          {
            name: 'XL',
            x: 0,
            y: 0,
            r: 9000 / 900
          }
        ]
      },
      {
        name: 'Systems: Project management competence development',
        series: [
          {
            name: 'L',
            x: 3750,
            y: 9000,
            r: 9000 / 760
          }
        ]
      },
      {
        name: 'Land: ISO14001 reaudit finding corrections',
        series: [
          {
            name: 'M',
            x: 8700,
            y: 17200,
            r: 1700 / 800
          }
        ]
      },
      {
        name: 'Aviation: the industrial participation',
        series: [
          {
            name: '2010',
            x: 750,
            y: 1500,
            r: 1500 / 280
          }
        ]
      },
      {
        name: 'Group: GDPR compliancy',
        series: [
          {
            name: '2010',
            x: 500,
            y: 1500,
            r: 1500 / 90
          }
        ]
      },
      {
        name: 'Land: Managing the environmental impact of test firing exercises',
        series: [
          {
            name: '2010',
            x: 1200,
            y: 2500,
            r: 2500 / 520
          }
        ]
      },
      {
        name: 'Millog: Fair Colleague coaching programme',
        series: [
          {
            name: 'S',
            x: 280,
            y: 1250,
            r: 1200 / 350
          }
        ]
      },
      {
        name: 'Millog: Occupational safety 2018',
        series: [
          {
            name: 'XL',
            x: 2608,
            y: 6000,
            r: 6000 / 720
          }
        ]
      },
      {
        name: 'Millog: AQAP 2110 certification',
        series: [
          {
            name: 'M',
            x: 220,
            y: 1000,
            r: 1000 / 365
          }
        ]
      }
    ];
    this.view = [1000, 500];
    // options
    this.animations = true;
    this.showGridLines = true;
    this.showXAxis = true;
    this.showYAxis = true;
    this.showLegend = true;
    this.legendTitle = 'Epic visualization';
    this.showXAxisLabel = true;
    this.xAxisLabel = 'Cost Estimate';
    this.showYAxisLabel = true;
    this.yAxisLabel = 'Benefits';
    this.autoScale = true;
    this.schemeType = 'ordinal';
    this.roundDomains = false;
    this.tooltipDisabled = false;
    this.minRadius = 3;
    this.maxRadius = 20;

    this.colorScheme = {
      domain: ['#647c8a', '#3f51b5', '#2196f3', '#00b862', '#afdf0a', '#a7b61a', '#f3e562', '#ff9800', '#ff5722', '#ff4514']
    };
   }

  public ngOnInit() {
    this.breadServ.addLevel({
      description: 'Homepage',
      display: true,
      header: 'Dashboard',
      levels: [],
      level: {
        icon: 'home',
        link: ['/'],
        title: 'Home',
      }
    });

  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }

}
