import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('spotify Service listo');
  }

  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC6gd3Y6j5Icv8f-hC33U21TkfPWdw_0w4k-LItSMij0pXFmU2JJgiJJSqE6tf5bKCNBA2m5tSPcJTCeOg'
    });

    return this.http.get(url, {headers});

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map(data => data['albums'].items  ));
  }

  getArtista( termino: string){

    return this.getQuery(`search?q=${{ termino }}&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items) );
  }
}