import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hotel, Reserva, ReservasService, Vuelo } from './servicioReservas';

@Component({
  selector: 'app-root',
  templateUrl: './app.hoteles.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'a10-cliente-agencia-viajes';
  hoteles:Hotel[];
  vuelos:Vuelo[];
  plazas:number;
  constructor(private service:ReservasService){}

  ngOnInit() {
    this.listado();
  }
  listado(){
   this.service.getHoteles().subscribe(data=>this.hoteles=data);
  }
  getVuelos(plazas:number){
    this.service.getVuelos(plazas).subscribe(data=>this.vuelos=data);
  }

}
