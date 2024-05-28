import { Provider } from './../provider';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceprovidersService {

  constructor(private http : HttpClient) { }

  getprovider()
  {
    return this.http.get("");
  }
  addprovider(provider:Provider){
    return this.http.post<Provider[]>(environment.BaseUrl+"/providers",provider);
  }
  deletprovider(provider:Provider){
    return this.http.delete<Provider[]>(environment.BaseUrl+"/providers"+provider.id);
  }

  updateprovider(idprovider:number,provider:Provider)
  {
    return this.http.put<Provider[]>(environment.BaseUrl+"/providers"+idprovider,provider);
  }
  getproviderbyid(idprovider:number){
    return this.http.get<Provider[]>(environment.BaseUrl+"/providers/"+idprovider);
  }

}
