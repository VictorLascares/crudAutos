import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autos } from '../Dominio/Autos';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(private http: HttpClient) { }

  urlListar = 'http://localhost:9000/AutoWebService/listar';
  urlEliminar = 'http://localhost:9000/AutoWebService/eliminar';
  urlGuardar = 'http://localhost:9000/AutoWebService/guardar';
  urlBuscar = 'http://localhost:9000/AutoWebService/buscar';
  urlEditar = 'http://localhost:9000/AutoWebService/editar';


  listarA() {
    return this.http.get<Autos[]>(this.urlListar)
  }



  eliminarA(auto: Autos) {
    return this.http.get<Autos>(this.urlEliminar.concat(`/${auto.id}`))
  }

  guardarA(auto: Autos) {
    return this.http.post<Autos>(this.urlGuardar, auto);
  }
            
  buscarA(auto: Autos) {
    return this.http.post<Autos>(this.urlBuscar, auto);
  }

  editarA(auto: Autos) {
    return this.http.post<Autos>(this.urlEditar, auto);
  }
}
