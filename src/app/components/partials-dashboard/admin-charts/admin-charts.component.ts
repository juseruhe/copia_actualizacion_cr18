import { Component, Input, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartPoint, ChartType, RadialChartOptions } from 'chart.js';

/* Intefaces */
import { IMatrixGraphData } from '@interface/IMatrixGraphData';

@Component({
  selector: 'app-admin-charts',
  templateUrl: './admin-charts.component.html',
  styleUrls: ['./admin-charts.component.css']
})
export class AdminChartsComponent implements OnInit {

  @Input() data: {
    maturityList: IMatrixGraphData[],
    capacityList: IMatrixGraphData[],
    scaleList: IMatrixGraphData[],
  } = {
    maturityList: [],
    capacityList: [],
    scaleList: []
  };

  activeTab = "tab1"
  public radarChartType: ChartType = 'radar';
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    scale: {
      ticks: {
        suggestedMin: 0,
        suggestedMax: 40,
        stepSize: 10,
      }
    }
  };

  public maturityChartLabels: Label[] = [];
  public maturityChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Matriz'
    },
  ];
  
  public capacityChartType: ChartType = 'doughnut';
  public capacityChartLabels: Label[] = [];
  public capacityChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Capacidad'
    },
  ];

  public scaleChartType: ChartType = 'bar';
  public scaleChartLabels: Label[] = [];
  public scaleChartOptions: ChartOptions = {
    responsive: true
  };
  public scaleChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Escala',
      barPercentage: 0.7,
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.prepareAllGraph();
  }

  private prepareAllGraph(): void {
    this.prepareMaturityGraph();
    this.prepareCapacityGraph();
    this.prepareScaleGraph();
  }

  private prepareMaturityGraph(): void {
    for (const record of this.data.maturityList) {
      this.maturityChartLabels.push(record.matrixDimensionName);
      this.maturityChartData[0].data.push(record.total);
    }
  }

  private prepareCapacityGraph(): void {
    let total = 0;
    for (const record of this.data.capacityList) {
      this.capacityChartLabels.push(`${record.matrixDimensionName} %`);
      this.capacityChartData[0].data.push(record.total);
      total += +record.total;
    }
    this.capacityChartData[0].data = (this.capacityChartData[0].data as []).map((item) => Math.floor((item/total)*100));
  }

  private prepareScaleGraph(): void {
    for (const record of this.data.scaleList) {
      this.scaleChartLabels.push(record.matrixDimensionName);
      this.scaleChartData[0].data.push(record.total);
    }
  }

}
