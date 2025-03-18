import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hosting } from '../models/HostingModel';

@Injectable({
  providedIn: 'root',
})
export class HostingService {
  readonly apiUrl = 'https://7bapf7fj1j.execute-api.us-east-1.amazonaws.com/prod/hosting'; // URL de la API


  constructor(private http: HttpClient) {
  }

  // Obtener todos los hostings 
  getHostings(): Observable<Hosting[]> {
    return this.http.get<Hosting[]>(this.apiUrl)
  }

  // Obtener un hosting  por ID (el ID es el índice en la base de datos)
  getHosting(id: string): Observable<Hosting>{
    return this.http.get<Hosting>(`${this.apiUrl}/${id}`);
  }

   // Crear un nuevo alojamiento
   createHosting(hosting: Hosting) {
    return this.http.post<Hosting>(this.apiUrl, hosting);
  }

  // Actualizar un alojamiento existente
  updateHosting(id: string, hosting: Hosting) {
    return this.http.put<Hosting>(`${this.apiUrl}/${id}`, hosting);
  }

  // Eliminar un alojamiento
  deleteHosting(id: string){
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}