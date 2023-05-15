import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-typography',
  templateUrl: './icon-typography.component.html',
  styleUrls: ['./icon-typography.component.css']
})
export class IconTypographyComponent implements OnInit{
    @Input() left: boolean = false;
    @Input() content: string = "";
    @Input() variant: string = "body-1";
    @Input() iconPath: string = "";
    @Input() shape: string = "";

    ngOnInit() {
     
    }
}
