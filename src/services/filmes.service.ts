import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filme } from '../model/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  
  private readonly API = 'https://swapi.co/api/films';

  constructor(private http: HttpClient) { }

  listar(){
  	return this.http.get<Filme[]>(this.API);
  }
}
