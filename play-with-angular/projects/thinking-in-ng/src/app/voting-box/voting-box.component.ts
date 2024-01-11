import { Component } from '@angular/core';
import { VotingItemComponent } from '../voting-item/voting-item.component';
import { VotingTableComponent } from '../voting-table/voting-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voting-box',
  standalone: true,
  imports: [
    CommonModule,
    VotingItemComponent,
    VotingTableComponent
  ],
  templateUrl: './voting-box.component.html',
  styleUrl: './voting-box.component.css'
})
export class VotingBoxComponent {

  votingItems: Array<string> = [
    'Angular',
    'React',
    'Vue',
  ];
  votingLines: Array<any> = [
    { item: 'Angular', likes: 5, dislikes: 0 },
    { item: 'React', likes: 0, dislikes: 0 },
    { item: 'Vue', likes: 0, dislikes: 6 }
  ];

  handleVote(event: any) {
    const { item, type } = event;
    const index = this.votingLines.findIndex(v => v.item === item);
    if (index >= 0) {
      this.votingLines[index][`${type}s`] += 1;
    }

  }

}
