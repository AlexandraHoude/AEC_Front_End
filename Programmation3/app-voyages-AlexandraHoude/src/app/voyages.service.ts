import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {
  voyagesUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';

  constructor(private http: HttpClient) { }

  getForfait(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.voyagesUrl + 'da/1996358');
  }
  addForfait(forfait: Forfait): Observable<Forfait> {
    console.log(forfait);
    return this.http.post<Forfait>(this.voyagesUrl, forfait, httpOptions);
  }
  /** PUT: mise à jour du voyage */
  updateForfait(forfait: Forfait): Observable<any> {
    const id = forfait._id;
    return this.http.put<Forfait>(this.voyagesUrl + id, forfait, httpOptions);
  }
  /** DELETE: suppression du voyage */
  deleteForfait(id: number): Observable<Forfait> {
    return this.http.delete<Forfait>(this.voyagesUrl + id, httpOptions);
  }
}

