import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { PatrimonioService } from '../patrimonio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patrimonio-graphic',
  templateUrl: './patrimonio-graphic.component.html',
  styleUrls: ['./patrimonio-graphic.component.css']
})
export class PatrimonioGraphicComponent implements OnInit {
 
  @ViewChild("myCanvas", {static: true}) myCanvas!: ElementRef;

  constructor(
    private patrimonioService: PatrimonioService,
    private router: Router
  ){}

  ngOnInit(): void {   
    const canvas = this.myCanvas.nativeElement;
    const ctx = canvas.getContext("2d");

    this.patrimonioService.getPatrimonio().subscribe(patrimonio => {
      const labels = patrimonio.map(dado => `${dado.nomeMes} ${dado.ano}`); 
      const valores = patrimonio.map(dado => Number(dado.valor));

      const chartGraph = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [{
            label: "Acompanhamento Anual",
            lineTension: 0.3,
            backgroundColor: "rgba(2,117,216,0.2)",
            borderColor: "rgba(2,117,216,1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,117,216,1)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,117,216,1)",
            pointHitRadius: 50,
            pointBorderWidth: 2,
            data: valores,
            fill: false
          }]
        },
        options: {
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });

    })

    
  }
}
