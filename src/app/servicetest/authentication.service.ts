import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationResponse } from '../swagger/services/models/authentication-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private rootUrl = 'http://localhost:8090'; // Adjust to your backend URL

  constructor(private http: HttpClient) {}

  authenticateUser(params: { username: string; password: string }, context?: HttpContext): Observable<AuthenticationResponse> {
    const url = `${this.rootUrl}/api/auth/authenticate`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<AuthenticationResponse>(url, params, { headers, context });
  }
}
