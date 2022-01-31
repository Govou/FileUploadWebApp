import { HttpClient } from '@angular/common/http';
//import { CONFIG } from 'src/app/config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UploadService {
  //  private apiUrl: string;

    constructor(private http: HttpClient) {
     //   this.apiUrl = CONFIG.coreAPIUrl;
    }

    // public uploadFile(file: FormData): Observable {
    //     const url = `${this.apiUrl}/${CONFIG.apiEndpoints.encode.fileToBase64}`;
    //     return this.http.post(url, file);
    // }
}