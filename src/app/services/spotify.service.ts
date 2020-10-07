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
      'Authorization': 'Bearer BQAAzwcESUq9fTXBwHmrRuJNrbK_Ocfod7Y3ciOUN20aXMPExKbRCYmTenqvqu6GapBC17NYx7o4gvdndxg'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

}