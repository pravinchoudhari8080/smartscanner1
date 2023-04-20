import { Component, OnInit } from '@angular/core';
import { Image } from '../allinterface';
import { AppServiceService } from '../app-service.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {

  public imagearr: Image[] = [];
  public isWorking: boolean;

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.getdata()
  }

  getdata(){
    this.isWorking = true;
    this.service.getImages().subscribe((res) => {
      this.imagearr = res;
      this.isWorking = false;
    },
    err=>{
      this.isWorking = false
    });
  }
}
