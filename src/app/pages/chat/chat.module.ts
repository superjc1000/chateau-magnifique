import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatabaseModule } from '@angular/fire/database'

import { ChatPageRoutingModule } from './chat-routing.module';
import { ReactiveFormsModule} from '@angular/forms';

import { ChatPage } from './chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    DatabaseModule,
    ReactiveFormsModule
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
