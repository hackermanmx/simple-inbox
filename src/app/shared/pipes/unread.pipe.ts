import { Pipe, PipeTransform } from '@angular/core';
import { Conversation } from '../models/conversation';

@Pipe({
  name: 'unread',
})
export class UnreadPipe implements PipeTransform {
  transform(list: Conversation[], ...args: unknown[]): number {
    return list.filter((l) => !l.read)?.length ?? 0;
  }
}
