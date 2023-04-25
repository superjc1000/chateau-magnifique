import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatabaseModule } from '@angular/fire/database'

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';

import { FormGroup, FormControl } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    DatabaseModule,
    FormControl,
    FormGroup
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
