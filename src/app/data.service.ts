import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getJobs(){
  const apiUrl = 'https://apis.workex.xyz/api/workexnow/v1/public/jobs';

    return this.http.post(apiUrl,{
      "categories":[],
      "pageNo":0,
      "pageSize":15,
      "q":"",
        "lat":"12.7555",
        "lng":"77.3324"
    });
  }
}
