import { TestBed } from "@angular/core/testing";
import { InputComponent } from "./input.component"; 
import { By } from "@angular/platform-browser";



describe('Component: Input', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        declarations:[InputComponent]
      });
    });

    it('should create Input', () => {
        const fixture = TestBed.createComponent(InputComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should create Input with custom placeholder', () => {
        const fixture = TestBed.createComponent(InputComponent);
        const component = fixture.componentInstance;
        component.placeholder = 'enter any text';
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(component.placeholder).toEqual('enter any text');
        const textContent = fixture.debugElement.query(By.css('input')).nativeElement.placeholder;
        expect(textContent).toBe('enter any text');
    });
});