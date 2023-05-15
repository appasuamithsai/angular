import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  disabled = false;
  @Input() max = 1000;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  @Input() value = 0;
}
