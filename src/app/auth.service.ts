// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { Usuario } from './login/usuario';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   apiURL: string = environment.apiURLBase + "/api/usuarios";
//   tokenURL: string = environment.apiURLBase + environment.obeterTokenUrl;
//   clientID: string = environment.clientId;
//   clientSecret: string = environment.clientSecret;

//   constructor(
//     private http: HttpClient
//   ) { }

//   obterToken(): string | null {
//     const tokenString = localStorage.getItem('access_token');
//     if (tokenString) {
//       const token = JSON.parse(tokenString).access_token;
//       return token;
//     }
//     return null;
//   }

//   encerrarSessao(): void {
//     localStorage.removeItem('access_token');
//   }

//   salvar(usuario: Usuario): Observable<any> {
//     return this.http.post<any>(this.apiURL, usuario);
//   }

//   tentarLogar(username: string, password: string): Observable<any> {
//     const params = new HttpParams()
//       .set('username', username)
//       .set('password', password)
//       .set('grant_type', 'password');

//     const headers = new HttpHeaders({
//       'Authorization': `Basic ${btoa(`${this.clientID}:${this.clientSecret}`)}`,
//       'Content-Type': 'application/x-www-form-urlencoded'
//     });

//     return this.http.post(this.tokenURL, params.toString(), { headers });
//   }
// }
