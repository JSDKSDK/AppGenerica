import { Injectable } from '@angular/core';
import { HttpClient as Http, HttpResponse } from '@angular/common/http';
import { ConfigService } from 'src/config/config.service';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  headers: any;
  headerurlencoded: any = { 'Content-Type': 'application/x-www-form-urlencoded' };

  constructor(private http: Http, private config: ConfigService) {
    this.config.headers.subscribe((headers) => {
      if (headers) {
        this.headers = headers;
      }
    });
  } 

  get(url: string) {
    return this.http.get(url, { headers: this.config.getHeaders, observe: "response" });
  }

  post(url: string, data: any) {
    return this.http.post(url, data, { headers: this.config.getHeaders, observe: "response" });
  }

  put(url: string, data: any) {
    return this.http.put(url, data, { headers: this.config.getHeaders, observe: "response" });
  }

  delete(url: string) {
    return this.http.delete(url, { headers: this.config.getHeaders });

  }
  posturlencoded(url: string, data: any) {
    return this.http.post(url, data, { headers: this.headerurlencoded, observe: "response" });
  }


}

