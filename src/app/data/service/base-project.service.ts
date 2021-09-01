import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseProjectService {

  BASE_URL = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  concatURL(subURL: string): string {
    return this.BASE_URL + subURL;
  }

  makePostRequest(
    URL: string,
    data: any,
    headers = this.httpOptions
  ): Observable<any> {
    return this.http.post(URL, data, headers);
  }

  makeGetRequest(URL: string, headers = this.httpOptions): Observable<any> {
    return this.http.get(URL, headers);
  }

  makeDelRequest(URL: string, headers = this.httpOptions): Observable<any> {
    return this.http.delete(URL, headers);
  }

  makePutRequest(
    URL: string,
    data: any,
    headers = this.httpOptions
  ): Observable<any> {
    return this.http.put(URL, data, headers);
  }

  //* Provincias

  getAllProvinces(): Observable<any[]> {
    const PATH = this.concatURL('/provincias');
    return this.makeGetRequest(PATH);
  }
  getProvinceById(id: number): Observable<any[]> {
    const PATH = this.concatURL(`/provincia/${id}`);
    return this.makeGetRequest(PATH);
  }

   //* Combustibles

   getAllFuels(): Observable<any[]> {
    const PATH = this.concatURL('/combustibles');
    return this.makeGetRequest(PATH);
  }
  getFuelById(id: number): Observable<any[]> {
    const PATH = this.concatURL(`/combustibles/${id}`);
    return this.makeGetRequest(PATH);
  }

  createFuel(combustible: string): Observable<any[]> {
    const fuel: any = {
      combustible,
    }
    const PATH = this.concatURL(`/combustibles`);
    return this.makePostRequest(PATH, fuel);
  }

  updateFuel(combustible: string): Observable<any[]> {
    const fuel: any = {
      combustible,
    }
    const PATH = this.concatURL(`/combustibles`);
    return this.makePutRequest(PATH, fuel);
  }

  deleteFuelById(id: number): Observable<any[]> {
    const PATH = this.concatURL(`/combustibles/${id}`);
    return this.makeDelRequest(PATH);
  }
   //* Entidades

   getAllEntities(): Observable<any[]> {
    const PATH = this.concatURL('/entidades');
    return this.makeGetRequest(PATH);
  }
  getEntitieById(id: number): Observable<any[]> {
    const PATH = this.concatURL(`/entidades/${id}`);
    return this.makeGetRequest(PATH);
  }

  createEntitie(entidad: string): Observable<any[]> {
    const entitie: any = {
      entidad,
    }
    const PATH = this.concatURL(`/entidades`);
    return this.makePostRequest(PATH, entitie);
  }

  updateEntitie(combustible: string): Observable<any[]> {
    const fuel: any = {
      combustible,
    }
    const PATH = this.concatURL(`/entidades`);
    return this.makePutRequest(PATH, fuel);
  }

  deleteEntitieById(id: number): Observable<any[]> {
    const PATH = this.concatURL(`/entidades/${id}`);
    return this.makeDelRequest(PATH);
  }
   //* Proyectos

   getAllProjects(): Observable<any[]> {
    const PATH = this.concatURL('/proyectos');
    return this.makeGetRequest(PATH);
  }
  getProjectById(id: number): Observable<any[]> {
    const PATH = this.concatURL(`/proyectos/${id}`);
    return this.makeGetRequest(PATH);
  }

  createProject(combustible: string): Observable<any[]> {
    const fuel: any = {
      combustible,
    }
    const PATH = this.concatURL(`/proyectos`);
    return this.makePostRequest(PATH, fuel);
  }

  updateProject(proyecto: string): Observable<any[]> {
    const project: any = {
      proyecto,
    }
    const PATH = this.concatURL(`/proyectos`);
    return this.makePutRequest(PATH, project);
  }

  deleteProjectById(id: number): Observable<any[]> {
    const PATH = this.concatURL(`/proyectos/${id}`);
    return this.makeDelRequest(PATH);
  }
}
