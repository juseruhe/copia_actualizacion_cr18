import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

/* API */
import { MatrixResponseService } from '@api/matrix-response/matrix-response.service';

/* Interfaces */
import { IMatrixGraphData } from '@interface/IMatrixGraphData';

@Component({
  selector: 'app-result-matrix-chart',
  templateUrl: './result-matrix-chart.component.html',
  styleUrls: ['./result-matrix-chart.component.scss']
})
export class ResultMatrixChartComponent implements OnInit {

  resolution: number = window.innerWidth;
  fontSize: number = 0

  public resolutionSize(){
  if(this.resolution > 767){
    return this.fontSize = 15
  }else{
   return this.fontSize = 9
  }
  }

  newData: IMatrixGraphData[] =[]
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    scale: {
    
      ticks: {
        suggestedMin: 0,
        suggestedMax: 40,
        stepSize: 10,
        
      },
      pointLabels: {
        fontSize: this.resolutionSize(), // Cambia este valor al tamaño de fuente deseado
        fontColor: "#0a0a0a",
        fontStyle: "bold",
        lineHeight: null,
      
    },
    
    }, 
   
    legend: {
      display: false
    }
  };


  public radarChartLabels: Label[] = [];

  public radarChartData: ChartDataSets[] = [
    { data: [], label: ""}
  ];


  public radarChartType: ChartType = 'radar';

  data: IMatrixGraphData[] = [];
  ordenDimension = ["Software", "Hardware","Red interna","Actividades & Flujos de trabajo",
 "Modelos y usos BIM","Liderazgo & Gestión","Entrenamiento","Estandares","Contractual (Mandatos)",
]
  loader = true;

  @Output() dataEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private matrixResponseService: MatrixResponseService
  ) { }

  ngOnInit(): void {
    this.getGraphResult();
  }

  private async getGraphResult(): Promise<void> {
    try {
      const response = await this.matrixResponseService.getGraphResult();
      this.data = response.data.matrixResponseList;

      this.ordenDimension.forEach(dimension => {
        this.data.forEach(objeto => {
          if(objeto.matrixDimensionName === dimension) {
            this.newData.push(objeto);
          }
        })
      })

      console.log(this.newData)

      this.dataEvent.emit(this.data)
      this.prepareGraph();
      this.loader = false;
    } catch (error) {
      console.warn('Error@ResultMatrixChartComponent@getGraphResult:', error);
    }
    this.loader = false;
  }

  private prepareGraph(): void {

    for (const record of this.data) {
      
      if(record.matrixDimensionName == "Equipos de Proyecto" || 
        record.matrixDimensionName == "Mercados" || 
        record.matrixDimensionName == "Organizaciones" || 
        record.matrixDimensionName == "Colaboración basada en el Modelo" ||
        record.matrixDimensionName == "Integración basada en la red" ||
        record.matrixDimensionName == "Modelo basado en objetos"
        ){
      }else if(record.matrixDimensionName == "Contractual (Mandatos)"){
        this.radarChartLabels.push("Contractual");
      this.radarChartData[0].data.push(record.total);

      }else{
      this.radarChartLabels.push(record.matrixDimensionName);
      this.radarChartData[0].data.push(record.total);
      }
    }
    
    
  }
}
