import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('spotify Service listo');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBNH7y0diXEsN3lBaTCiGeqxwBogaGUC06gfxUwssScvbGR0R7waNqFDYj1Sno9eKGoY4Iq4WfGJ4C6Tnw'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

  getArtista( termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBNH7y0diXEsN3lBaTCiGeqxwBogaGUC06gfxUwssScvbGR0R7waNqFDYj1Sno9eKGoY4Iq4WfGJ4C6Tnw'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${{ termino }}&type=artist&limit=15`, { headers });
  }

}