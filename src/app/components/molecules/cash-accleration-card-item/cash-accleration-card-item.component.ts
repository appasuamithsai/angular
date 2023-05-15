import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cash-accleration-card-item',
  templateUrl: './cash-accleration-card-item.component.html',
  styleUrls: ['./cash-accleration-card-item.component.css']
})
export class CashAcclerationCardItemComponent {
  @Input() iconPath! : string;
  @Input() imagePath! : string;
  @Input() content! : string;
  @Input() textContent! : string;
}
