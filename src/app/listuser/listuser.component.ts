import { Component, OnInit } from '@angular/core';
import { ServiceuserService } from '../services/serviceuser.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrl: './listuser.component.css'
})
export class ListuserComponent implements OnInit{


  listuser:any;
constructor(private user:ServiceuserService) {}

  ngOnInit(): void {
this.get();
  }

  get()
  {
return this.user.getuser().subscribe((data)=>
{
console.log(data);
this.listuser=data;


})
  }


}
