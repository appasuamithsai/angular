import { TestBed } from "@angular/core/testing";
import { ChipComponent } from "./chip.component"; 
import { By } from "@angular/platform-browser";



describe('Component: Chip', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        declarations:[ChipComponent]
      });
    });

    it('should create Chip', () => {
        const fixture = TestBed.createComponent(ChipComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should create My Contract chip with selected false', () => {
        const fixture = TestBed.createComponent(ChipComponent);
        const component = fixture.componentInstance;
        component.content = 'Contract';
        component.variant = 'button';
        component.height = '164px';
        component.width = '200px';
        component.selected = false;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(component.content).toEqual('Contract');
        const textContent = fixture.debugElement.query(By.css('.mat-button')).nativeElement.innerHTML;
        expect(textContent).toBe('Contract');
      });


    it('should create My Contract chip with selected true', () => {
        const fixture = TestBed.createComponent(ChipComponent);
        const component = fixture.componentInstance;
        component.content = 'Contract';
        component.variant = 'button';
        component.height = '164px';
        component.width = '200px';
        component.selected = true;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(component.content).toEqual('Contract');
        const textContent = fixture.debugElement.query(By.css('.mat-button')).nativeElement.innerHTML;
        expect(textContent).toBe('Contract');
      });

});