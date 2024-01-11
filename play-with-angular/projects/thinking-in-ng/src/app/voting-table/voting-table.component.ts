import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voting-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './voting-table.component.html',
  styleUrl: './voting-table.component.css'
})
export class VotingTableComponent {

  @Input("value")
  votingLines: Array<any> = []

}
