import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voting-item',
  standalone: true,
  imports: [],
  templateUrl: './voting-item.component.html',
  styleUrl: './voting-item.component.css'
})
export class VotingItemComponent {

  @Input()
  value: string = 'Unknown';

  @Output()
  vote: EventEmitter<any> = new EventEmitter();

  handleLike(event: MouseEvent) {
    this.vote.emit({ item: this.value, type: 'like' });
  }
  handleDislike(event: MouseEvent) {
    this.vote.emit({ item: this.value, type: 'dislike' });
  }

}
