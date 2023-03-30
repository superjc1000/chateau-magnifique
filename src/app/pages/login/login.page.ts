import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private chatservice: ChatService) { }

  ngOnInit() {

  }

  signIn(): void {
    this.chatservice.signIn();
  }

  signOut(): void {
    this.chatservice.signOut();
  }

}
