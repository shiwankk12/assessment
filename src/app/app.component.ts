import { Component, OnInit } from '@angular/core';
import {DataService} from  './data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'job workex!';
  data : any = [];



  constructor(private dataService:DataService)
  {
      // let resp = this.http.get("https://apis.workex.xyz/api/workexnow/v1/public/jobs");
      // resp.subscribe((data)=>console.log(data));

      this.dataService.getJobs().subscribe((resp:any)=>{
        this.data=resp.data.jobs
        console.log(this.data)
      })
      //  console.log(resp);
     
      
  }

  }

  
 

