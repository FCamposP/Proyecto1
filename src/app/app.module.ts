import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Route,RouterModule}from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarprodComponent } from './agregarprod/agregarprod.component';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { ActualizarCuentaComponent } from './actualizar-cuenta/actualizar-cuenta.component';
import { UpdateNombreComponent } from './update-nombre/update-nombre.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateCorreoComponent } from './update-correo/update-correo.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateCiudadComponent } from './update-ciudad/update-ciudad.component';
import { UpdateTelefonoComponent } from './update-telefono/update-telefono.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IdentificarseComponent } from './components/identificarse/identificarse.component';
import { ProductoComponent } from './components/producto/producto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FooterComponent } from './components/footer/footer.component';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { LateralComponent } from './live-chat/lateral/lateral.component';
import { CuerpoComponent } from './live-chat/cuerpo/cuerpo.component';
const routes:Route[]=[
{path:'createAccount',component:CreateAccountComponent},
{path:'iniciar',component:IniciarComponent},
{path:'deleteaccount',component:DeleteaccountComponent},
{path:'actualizarCuenta',component:ActualizarCuentaComponent},
{path:'updateNombre',component:UpdateNombreComponent},
{path:'updateCorreo',component:UpdateCorreoComponent},
{path:'updatePassword',component:UpdatePasswordComponent},
{path:'updateUser',component:UpdateUserComponent},
{path:'updateCiudad',component:UpdateCiudadComponent},
{path:'updateTelefono',component:UpdateTelefonoComponent},
{path: 'login', component: LoginComponent},
{path: 'password', component: PasswordComponent},
{path: '', component: HomeComponent},
{path: 'agregarprod', component: AgregarprodComponent},
{path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    DeleteaccountComponent,
    IniciarComponent,
    ActualizarCuentaComponent,
    UpdateNombreComponent,
    UpdateUserComponent,
    UpdateCorreoComponent,
    UpdatePasswordComponent,
    UpdateCiudadComponent,
    UpdateTelefonoComponent,
    LoginComponent,
    PasswordComponent,
    NavbarComponent,
    ContactoComponent,
    IdentificarseComponent,
    ProductoComponent,
    NosotrosComponent,
    UsuarioComponent,
    FooterComponent,
    AgregarprodComponent,
    HomeComponent,
    LiveChatComponent,
    LateralComponent,
    CuerpoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
