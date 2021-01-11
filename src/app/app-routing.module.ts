import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IdentificarseComponent } from './components/identificarse/identificarse.component';
import {PerfilComponent} from './perfil/perfil.component';

const routes: Routes = [
  //{path: 'product', component: ProductoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user/:id', component: UsuarioComponent},
  {path: 'about', component: NosotrosComponent},
  {path: 'contact', component: ContactoComponent},
    {path: 'perfil', component: PerfilComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: ProductoComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
