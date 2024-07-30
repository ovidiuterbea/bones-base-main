import { Component, Input } from '@angular/core';
import { tokens } from '../../../styles/tokens/colors';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: string = 'primary';
  @Input() size: string = 'medium';

  get buttonStyles() {
    return {
      backgroundColor: tokens[this.type],
      padding: tokens[this.size],
      fontSize: tokens.fontSize[this.size],
      fontWeight: tokens.fontWeight.normal,
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      color: '#fff',
    };
  }
}
