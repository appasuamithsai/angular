import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';



@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent implements OnInit {
  @Input() name : string = "";
  @Input() path : string = "";
  @Input() shape : string = "20px";
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
  }
  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(this.name, this.sanitizer.bypassSecurityTrustResourceUrl(this.path));
  }


}
