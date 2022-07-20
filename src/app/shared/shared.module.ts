import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { UnreadPipe } from './pipes/unread.pipe';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, UnreadPipe, HeaderComponent],
  exports: [UnreadPipe, LoadingSpinnerComponent, HeaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
