import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private apiUrl = 'http://localhost/Basedatos/backend';

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listar_vehiculos.php`);
  }

  createVehiculo(vehiculo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear_vehiculo.php`, vehiculo);
  }

}
