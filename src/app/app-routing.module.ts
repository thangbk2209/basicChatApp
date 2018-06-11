import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component'
import {FooterComponent} from './footer/footer.component'
import {LoginComponent} from './pages/login/login.component'
import {SignupComponent} from './pages/signup/signup.component'
import {HomeComponent} from './pages/home/home.component'
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
