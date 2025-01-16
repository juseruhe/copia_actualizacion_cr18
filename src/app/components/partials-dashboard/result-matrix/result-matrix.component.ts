import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* API */
import { MatrixResponseService } from '@api/matrix-response/matrix-response.service';

/* Intefaces */
import { IMatrixResponseData } from '@interface/IMatrixResponseData';
import { HtmlToImageService } from '@service/htmt-to-image/html-to-image.service';

@Component({
  selector: 'app-result-matrix',
  templateUrl: './result-matrix.component.html',
  styleUrls: ['./result-matrix.component.scss']
})
export class ResultMatrixComponent implements OnInit {

  recordList: IMatrixResponseData[] = [];
  page = 1;
  limit = 10;

  loader = true;
  prepare = false;
  
  tecnologiaData : any[] = []
  procesosData : any[] = []
  politicasData : any[] = []
  escalaData : any[] = []
  capacidadBIMData : any[] = []

// categorias de dimension de tecnología
sumaHardware: number = 0
sumaRedInterna: number = 0
sumaSoftware: number = 0

//Promedio de dimension de tecnología
promedioHardware: number = 0
promedioRedInterna: number = 0
promedioSoftware: number = 0

//Contador de dimension de tecnologia
contadorHardware: number = 0
contadorRedInterna: number = 0
contadorSoftware: number = 0

// categorias de dimension de procesos
sumaAFT: number = 0
sumaLG: number = 0
sumaMU: number = 0

//Promedio de dimension de procesos
promedioAFT: number = 0
promedioLG: number = 0
promedioMU: number = 0

//Contador de dimension de procesos
contadorAFT: number = 0
contadorLG: number = 0
contadorMU: number = 0

// categorias de dimension de politicas
sumaContractual: number = 0
sumaEntrenamiento: number = 0
sumaEstandares: number = 0

//Promedio de dimension de politicas
promedioContractual: number = 0
promedioEntrenamiento: number = 0
promedioEstandares: number = 0

//Contador de dimension de politicas
contadorContractual: number = 0
contadorEntrenamiento: number = 0
contadorEstandares: number = 0

// categorias de dimension de escala
sumaEquiposProyecto: number = 0
sumaMercados: number = 0
sumaOrganizaciones: number = 0

//Promedio de dimension de escala
promedioEquiposProyecto: number = 0
promedioMercados: number = 0
promedioOrganizaciones: number = 0

//Contador de dimension de escala
contadorEquiposProyecto: number = 0
contadorMercados: number = 0
contadorOrganizaciones: number = 0

// categorias de dimension de capacidad BIM
sumaCBM: number = 0
sumaIBR: number = 0
sumaMBO: number = 0

//Promedio de dimension de capacidad BIM
promedioCBM: number = 0
promedioIBR: number = 0
promedioMBO: number = 0

//Contador de dimension de capacidad BIM
contadorCBM: number = 0
contadorIBR: number = 0
contadorMBO: number = 0


// categorias de tema
 tecnologiaCategory = new Set<string>();
 procesosCategory =  new Set<string>();
 politicasCategory =  new Set<string>();
 escalaCategory = new Set<string>();
 capacidadBIMCategory = new Set<string>();

 resolution: number = window.innerWidth

  settings = {
    attr: {
      class: 'table table-striped table-bordered table-responsive-md'
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {

      matrixSubgroupName: {
        title: 'Tema'
      },
    
      matrixDimensionName: {
        title: 'Dimensiones',
      
      },
      matrixTopicName: {
        title: 'Temas a tratar'
      },
      matrixQuestionName: {
        title: 'Descripción'
      },
      score: {
        title: 'Resultado',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return `<strong>${cell}</strong>`;
        }
      },
      total: {
        title: 'Total',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return `<strong>${cell}</strong>`;
        }
      }
    },
  };

  constructor(
    private matrixResponseService: MatrixResponseService,
    private htmlToImageService: HtmlToImageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getResult();
    
  }

  pageChange(event) {
    this.page = event;
  }

  private async getResult(): Promise<void> {
    try {
      const response = await this.matrixResponseService.getResult();
      this.recordList = response.data.matrixResponseList;

      // Dividir por Categorias
     this.recordList.forEach(record =>{
      if(record["matrixSubgroupName"] == "Capacidad BIM"){
        this.capacidadBIMData.push(record)
      }else if(record["matrixSubgroupName"] == "Procesos"){
        this.procesosData.push(record)
      }else if(record["matrixSubgroupName"] == "Políticas"){
        this.politicasData.push(record)
      }else if(record["matrixSubgroupName"] == "Escala"){
        this.escalaData.push(record)
      }else if(record["matrixSubgroupName"] == "Tecnología"){
        this.tecnologiaData.push(record)
      }
     })
    
     // Dividir por dimensiones cada categoria
     this.capacidadBIMData.forEach(record => {
      this.capacidadBIMCategoria(record["matrixDimensionName"])
     })

     this.procesosCategoria()
     this.politicasCategoria()

     this.escalaData.forEach(record => {
      this.escalaCategoria(record["matrixDimensionName"])
     })


     this.tecnologiaCategoria()


     // sacar promedio de dimension de tecnologias
   this.promedioDimensionTecnologia()
   this.promedioDimensionProcesos()
   this.promedioDimensionPoliticas()
   this.promedioDimensionEscala()
   this.promedioDimensionCapacidadBIM()

    
    } catch (error) {
      
      console.warn('Error@ResultMatrixComponent@getResult:', error);
      
    }
    this.loader = false;
  }

   //Clasificación de Categorias
  capacidadBIMCategoria(dimension: string): boolean {
    if (!this.capacidadBIMCategory.has(dimension)) {
      
      this.capacidadBIMCategory.add(dimension);
      return true;
    }
    return false;
  }

procesosCategoria(){
  this.procesosCategory.add("Actividades & Flujos de trabajo")
  this.procesosCategory.add("Modelos y usos BIM")
  this.procesosCategory.add("Liderazgo & Gestión")
}

  /*politicasCategoria(dimension: string): boolean {
    if (!this.politicasCategory.has(dimension)) {
      this.politicasCategory.add(dimension);
      return true;
    }
    return false;
  }*/

  politicasCategoria(){
    this.politicasCategory.add("Entrenamiento")
    this.politicasCategory.add("Estandares")
    this.politicasCategory.add("Contractual (Mandatos)")
  }
  

  escalaCategoria(dimension: string): boolean {
    if (!this.escalaCategory.has(dimension)) {
      this.escalaCategory.add(dimension);
      return true;
    }
    return false;
  }


tecnologiaCategoria(){
  this.tecnologiaCategory.add("Software")
  this.tecnologiaCategory.add("Hardware")
  this.tecnologiaCategory.add("Red interna")
}

// reemplazar & por y
reemplazarPorY(texto: string): string | null{
const textoY = texto.replace(/&/g, 'y');
return textoY.includes('y') ? textoY : null
}

/* reemplazar palabra dentro parentésis pero w es cualquier palabra 
para palabra específica reemplaza w por cualquier palabra*/
reemplazarMandatos(texto: string): string | null{
  if(texto == "Estandares"){
let textoEstandares = texto.replace(/\(\w+\)/g, '')
  textoEstandares = "Estándares"
  return textoEstandares
  }
  const textoMandatos = texto.replace(/\(\w+\)/g, '');
  return textoMandatos
}

  // Sumar los datos y contador de la cantidad de datos para sacar el promedio según de la dimension
  promedioDimensionTecnologia(){
  for(let i =0 ; i < this.tecnologiaData.length; i++){
    if(this.tecnologiaData[i]["matrixDimensionName"] == "Hardware"){
     this.sumaHardware += this.tecnologiaData[i]["score"]
     this.contadorHardware += 1
    }else if(this.tecnologiaData[i]["matrixDimensionName"] == "Red interna"){
     this.sumaRedInterna = this.sumaRedInterna + this.tecnologiaData[i]["score"]
     this.contadorRedInterna += 1
    }else if(this.tecnologiaData[i]["matrixDimensionName"] == "Software"){
     this.sumaSoftware = this.sumaSoftware+ this.tecnologiaData[i]["score"]
     this.contadorSoftware += 1
    }
  }

  this.promedioHardware = Math.round(this.sumaHardware / this.contadorHardware)
  this.promedioRedInterna = Math.round(this.sumaRedInterna / this.contadorRedInterna)
  this.promedioSoftware = Math.round(this.sumaSoftware / this.contadorSoftware)

}

promedioDimensionProcesos(){
  for(let i =0 ; i < this.procesosData.length; i++){
    if(this.procesosData[i]["matrixDimensionName"] == "Actividades & Flujos de trabajo"){
     this.sumaAFT += this.procesosData[i]["score"]
     this.contadorAFT += 1
    }else if(this.procesosData[i]["matrixDimensionName"] == "Liderazgo & Gestión"){
     this.sumaLG += this.procesosData[i]["score"]
     this.contadorLG += 1
    }else if(this.procesosData[i]["matrixDimensionName"] == "Modelos y usos BIM"){
     this.sumaMU+=this.procesosData[i]["score"]
     this.contadorMU+= 1
    }
  }

  this.promedioAFT = Math.round(this.sumaAFT / this.contadorAFT)
  this.promedioLG = Math.round(this.sumaLG / this.contadorLG)
  this.promedioMU = Math.round(this.sumaMU / this.contadorMU)

}

promedioDimensionPoliticas(){
  for(let i =0 ; i < this.politicasData.length; i++){
    if(this.politicasData[i]["matrixDimensionName"] == "Contractual (Mandatos)"){
     this.sumaContractual += this.politicasData[i]["score"]
     this.contadorContractual += 1
    }else if(this.politicasData[i]["matrixDimensionName"] == "Entrenamiento"){
     this.sumaEntrenamiento += this.politicasData[i]["score"]
     this.contadorEntrenamiento += 1
    }else if(this.politicasData[i]["matrixDimensionName"] == "Estandares"){
     this.sumaEstandares+=this.politicasData[i]["score"]
     this.contadorEstandares+= 1
    }
  }

  this.promedioContractual = Math.round(this.sumaContractual / this.contadorContractual)
  this.promedioEntrenamiento = Math.round(this.sumaEntrenamiento / this.contadorEntrenamiento)
  this.promedioEstandares = Math.round(this.sumaEstandares / this.contadorEstandares)

}

promedioDimensionEscala(){
  for(let i =0 ; i < this.escalaData.length; i++){
    if(this.escalaData[i]["matrixDimensionName"] == "Equipos de Proyecto"){
     this.sumaEquiposProyecto += this.escalaData[i]["score"]
     this.contadorEquiposProyecto += 1
    }else if(this.escalaData[i]["matrixDimensionName"] == "Mercados"){
     this.sumaMercados += this.escalaData[i]["score"]
     this.contadorMercados += 1
    }else if(this.escalaData[i]["matrixDimensionName"] == "Organizaciones"){
     this.sumaOrganizaciones+=this.escalaData[i]["score"]
     this.contadorOrganizaciones+= 1
    }
  }

  this.promedioEquiposProyecto = Math.round(this.sumaEquiposProyecto / this.contadorEquiposProyecto)
  this.promedioMercados = Math.round(this.sumaMercados / this.contadorMercados)
  this.promedioOrganizaciones = Math.round(this.sumaOrganizaciones / this.contadorOrganizaciones)

}

promedioDimensionCapacidadBIM(){
  for(let i =0 ; i < this.capacidadBIMData.length; i++){
    if(this.capacidadBIMData[i]["matrixDimensionName"] == "Colaboración basada en el Modelo"){
     this.sumaCBM += this.capacidadBIMData[i]["score"]
     this.contadorCBM += 1
    }else if(this.capacidadBIMData[i]["matrixDimensionName"] == "Integración basada en la red"){
     this.sumaIBR += this.capacidadBIMData[i]["score"]
     this.contadorIBR += 1
    }else if(this.capacidadBIMData[i]["matrixDimensionName"] == "Modelo basado en objetos"){
     this.sumaMBO+=this.capacidadBIMData[i]["score"]
     this.contadorMBO+= 1
    }
  }

  this.promedioCBM = Math.round(this.sumaCBM / this.contadorCBM)
  this.promedioIBR = Math.round(this.sumaIBR / this.contadorIBR)
  this.promedioMBO = Math.round(this.sumaMBO / this.contadorMBO)

}
  


  async donwload() {
    try {
      this.loader = true;
      this.prepare = false;
      const bimCard = await this.htmlToImageService.getPng('#bim-card');
      const capacityCard = await this.htmlToImageService.getPng('#capacity-card');
      const chartCard = await this.htmlToImageService.getPng('#chart-card')
      this.prepare = true;
      await this.matrixResponseService.getResultReport(bimCard, capacityCard, chartCard,this.resolution);
    } catch (error) {
      console.warn('Error@ResultMatrixComponent@donwload:', error);
    }
    this.loader = false;
  }
}
