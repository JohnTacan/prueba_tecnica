import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  private apiUrl = 'http://localhost/Basedatos/backend';

  constructor(private http: HttpClient) { }

  getOrdenes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listar_ordenes.php`);
  }

  createOrden(ordenservicio: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear_orden.php`, ordenservicio);
  }

  editOrden(ordenservicio: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/editar_orden.php`, ordenservicio);
  }

 
  deleteItemOrden(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminar_item_orden.php`, { body: { id } });
  }
}
