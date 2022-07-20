import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InboxListComponent } from './inbox-list/inbox-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [InboxListComponent],
  imports: [HttpClientModule, CommonModule, InboxRoutingModule, SharedModule],
  exports: [InboxListComponent],
})
export class InboxModule {}
