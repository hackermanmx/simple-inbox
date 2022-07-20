import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  Conversation,
  ConversationData,
} from '../../shared/models/conversation';

@Injectable({
  providedIn: 'root',
})
export class InboxService {
  apiUrl = 'http://localhost:3000/conversations';

  constructor(private http: HttpClient) {}

  getConversations(): Observable<Conversation[]> {
    return this.http
      .get<ConversationData>(this.apiUrl)
      .pipe(map(({ data }) => data));
  }
}
