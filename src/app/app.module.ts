import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PChatComponent } from './pages/p-chat/p-chat.component';
import { CChatMsgComponent } from './pages/p-chat/c-chat-msg/c-chat-msg.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, PChatComponent, CChatMsgComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
