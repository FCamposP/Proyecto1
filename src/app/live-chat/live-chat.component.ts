import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})

export class LiveChatComponent implements OnInit {
  usuarioActual = 'usuario actual';
  usuarioAlmacenado = 'usuario almacenado';
  usuarioLocal = 'Usuario Local';
  mensajeUsuarioActual = 'Mensaje de usuario actual';
  mensajeUsuarioAlmacenado = 'Mensaje de usuario almacenado';
  mensajeUsuarioLocal = 'Mensaje de usuario local';
  fotoUsuarioActual = 'assets/user.png';
  fotoAlmacenado = 'assets/user.png';
  fotoUsuarioAlmacenado = 'assets/user.png';
  horaUsuarioActual = '00:00';
  horaUsuarioAlmacenado = '00:02';
  horaUsuarioLocal = '00:03';


  constructor() {

    }

  ngOnInit() {
  }

}
