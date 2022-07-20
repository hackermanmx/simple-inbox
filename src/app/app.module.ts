import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { InboxModule } from './pages/inbox/inbox.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, InboxComponent],
  imports: [BrowserModule, AppRoutingModule, InboxModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
