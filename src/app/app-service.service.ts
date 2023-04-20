import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public apiURL_: string='';

  constructor(private http: HttpClient,
    ) { this.apiURL_ = environment.API_URL}


  postImages(data: any){
    return this.http.post<any>(this.apiURL_+"core/images/", data)
  }
  saveImages(data: any){
    return this.http.post<any>(this.apiURL_+"core/documents/", data)
  }
  putImages(id: any, statusid: any){
    return this.http.patch<any>(this.apiURL_+"core/documents/"+id+"/", statusid)
  }
  getDocuments(){
    return this.http.get<any>(this.apiURL_+"core/documents/")
  }
  getroles(){
    return this.http.get<any>(this.apiURL_+"auth/roles/")
  }
  postuser(data:any){
    return this.http.post<any>(this.apiURL_+"auth/users/", data)
  }
  getImages(){
    return this.http.get<any>(this.apiURL_+"core/images/")
  }
  login(data:any){
    return this.http.post<any>(this.apiURL_+"auth/token", data)
  }
}
