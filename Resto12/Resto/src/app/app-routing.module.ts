import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestroComponent } from './component/add-restro/add-restro.component';
import { ListRestroComponent } from './component/list-restro/list-restro.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UpdateRestroComponent } from './component/update-restro/update-restro.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"add",component:AddRestroComponent},
  {path:"update/:id",component:UpdateRestroComponent},
  {path:"list",component:ListRestroComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
