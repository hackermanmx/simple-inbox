import { Component, Input } from '@angular/core';
import {
  Conversation,
  ReservationStatus,
} from '../../../shared/models/conversation';

@Component({
  selector: 'app-inbox-list',
  templateUrl: './inbox-list.component.html',
  styleUrls: ['./inbox-list.component.scss'],
})
export class InboxListComponent {
  @Input() list: Conversation[] = [];

  status = ReservationStatus;
  statusBadge = {
    [ReservationStatus.Accepted]: 'success',
    [ReservationStatus.Pending]: 'info',
    [ReservationStatus.Cancelled]: 'danger',
    [ReservationStatus.Expired]: 'warning',
    [ReservationStatus.Declined]: 'light',
  };

  constructor() {}

  openDetails(id: string) {
    // this.service.getConversationDetails(id);
    // .. open another window or section with more details
  }
}
