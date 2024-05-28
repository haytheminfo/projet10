import { Provider } from './../provider';
import { Component, OnInit } from '@angular/core';
import { ServiceprovidersService } from '../services/serviceproviders.service';

@Component({
  selector: 'app-listproviders',
  templateUrl: './listproviders.component.html',
  styleUrl: './listproviders.component.css'
})
export class ListprovidersComponent implements OnInit{


listprovider:any;
  constructor(private provider:ServiceprovidersService) {}
  ngOnInit(): void {
this.refrech();
  }

refrech()
{
return this.provider.getprovider().subscribe((data)=>
{
console.log(data);
this.listprovider=data;

})
}




}
