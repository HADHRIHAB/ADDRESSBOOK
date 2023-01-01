import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './home/add/add.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './home/list/list.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { AuthentificationGuard } from './services/authentification.guard';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path:'home', canActivate:[AuthentificationGuard] ,component:HomeComponent, children:[
    
    {path:'', redirectTo:'list', pathMatch:'full'},
    {path:'list', component:ListComponent},
    {path:'add', component:AddComponent},
    
  ] },

  {path:'login', component:LoginComponent },
  {path:'register', component:RegisterComponent },
  {path:'**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
