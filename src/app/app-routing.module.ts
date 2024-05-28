import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { ListprovidersComponent } from './listproviders/listproviders.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [

{path :'listuser',component:ListuserComponent,canActivate: [AuthGaurdService]},
{path :'listprovider',component:ListprovidersComponent,canActivate: [AuthGaurdService]},
{path :'login',component:LoginComponent},
{path :'logout',component:LogoutComponent,canActivate: [AuthGaurdService]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
