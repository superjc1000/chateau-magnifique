import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Mensaje } from 'src/app/services/mensajes.service';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  
  form: FormGroup;
  messages: Mensaje[];
  User: string;
  auth = getAuth();
  auxauth = this.auth.currentUser;
  
constructor(private chatservice: ChatService, private route: Router, private fb: FormBuilder, private mensajeservice: MensajesService) 
{ console.log(this.mensajeservice);  this.mensajeservice.getMensajes().subscribe(m => this.messages = m);}

    
  Today = Date.now();

  
  ngOnInit() {
    this.initForm();
  }

initForm(){
  this.form = this.fb.group({ messageBody: ['', Validators.required]})
}

  signOut(): void {
    this.chatservice.signOut().then(()=>
    this.route.navigate(['/login']));
  }
  sendMessage(): void {
   this.User = this.auxauth.displayName;
   this.mensajeservice.addMessage(this.messages[ this.User, this.Today, this.form.controls['messageBody'].value]);
  }
}
