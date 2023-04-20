import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private chatservice: ChatService, private route: Router, private mensajeservice: MensajesService) { }

  messageInput = new FormControl('');
  ngOnInit() {
  }
  signOut(): void {
    this.chatservice.signOut().then(()=>
    this.route.navigate(['/login']));
  }
  sendMessage(): void {
    // this.messageInput = this.mensajeservice.mensajesDB.push;
  }
}
