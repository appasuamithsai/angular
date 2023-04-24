import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;
  

  @HostListener('click') toogleOpen(event : Event){
    this.isOpen = !this.isOpen;
    // this.renderer.addClass('open');
  }

}
