import { Component, OnInit } from '@angular/core';
import { Document } from '../allinterface';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.sass']
})
export class ApproveComponent implements OnInit {
  public imagearr: Document[] = [];
  public isWorking: boolean;

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.getdata()
  }

  getdata(){
    this.isWorking = true;
    this.service.getDocuments().subscribe((res) => {
      this.imagearr = res;
      this.imagearr = this.imagearr.filter(suc=> suc.status == 1)
      this.isWorking = false;
    },
    err=>{
      this.isWorking = false
    });
  }
  submit(obj: Document){
    obj.status = 2
    this.service.putImages(obj.id,obj).subscribe((res)=>{
      console.log(res)
    },
    (err)=>{
      console.log(err)
    })
  }
  reject(obj: Document){
    obj.status = 3
    this.service.putImages(obj.id, obj).subscribe((res)=>{
      console.log(res)
    },
    (err)=>{
      console.log(err)
    })
  }
}
