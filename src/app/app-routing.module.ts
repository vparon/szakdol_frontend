import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";
import {RegisterComponent} from "./auth/components/register/register.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {HomeComponent} from "./auth/components/home/home.component";
import {InvoiceComponent} from "./auth/components/invoice/invoice.component";
import {ContactComponent} from "./auth/components/contact/contact.component";
import {GalleryComponent} from "./auth/components/gallery/gallery.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuardService]},
  {path: 'invoice', component: InvoiceComponent, canActivate: [AuthGuardService]},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
