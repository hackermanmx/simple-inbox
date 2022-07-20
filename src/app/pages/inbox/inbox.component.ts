import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, Observable, Subject } from 'rxjs';
import { Conversation } from '../../shared/models/conversation';
import { InboxService } from './inbox.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit, OnDestroy {
  inboxList$?: Observable<Conversation[]>;
  destroy$ = new Subject<void>();

  isLoading = true;

  constructor(private inboxService: InboxService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.inboxList$ = this.inboxService
      .getConversations()
      .pipe(finalize(() => (this.isLoading = false)));
  }
}
