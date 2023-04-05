import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private chatservice: ChatService, private route: Router) { }

  ngOnInit() {

  }

  signIn(): void {
    this.chatservice.signIn().then(()=>
    this.route.navigate(['']));
  }

}
