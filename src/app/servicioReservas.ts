
import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Reserva {
  idreserva: number;
	nombre: String;
	dni: String;
	hotel: number;
	vuelo: number;
}

export class Hotel {
  idHotel:number;
  nombre:String;
  categoria:String;
  precio:number;
  disponible:number;
}

export class Vuelo {
  idVuelo:number;
  company:String;
  fecha:String;
  precio:number;
  plazas:number;
}

@Injectable()
export class ReservasService{
    private urlReservas="http://localhost:7009/";
    private urlHoteles="http://localhost:7007/";
    private urlVuelos="http://localhost:7008/";



    constructor (private http: HttpClient) {}
  public getHoteles() {
      return this.http.get<Hotel[]>(this.urlHoteles+"hoteles");
    //     return this.hs;
    // return this.http.get<Hotel[]>(this.urlHoteles+"hoteles");
  }
  public getVuelos(plazas:number){
    return this.http.get<Vuelo[]>(this.urlVuelos+"vuelos/"+plazas);
  }
}

