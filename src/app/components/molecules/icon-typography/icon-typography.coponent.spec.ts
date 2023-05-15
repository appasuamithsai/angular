import { TestBed } from "@angular/core/testing";
import { IconTypographyComponent } from "./icon-typography.component"; 
import { By } from "@angular/platform-browser";



describe('Component: IconTypographyComponent', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        declarations:[IconTypographyComponent]
      });
    });

    it('should create IconTypographyComponent', () => {
        const fixture = TestBed.createComponent(IconTypographyComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should create IconTypographyComponent with left true', () => {
        const fixture = TestBed.createComponent(IconTypographyComponent);
        const component = fixture.componentInstance;
        component.content = 'Cash accleration';
        component.variant = 'headline-2';
        component.shape = '22px';
        component.iconPath = 'assets/images/warning.png';
        component.left = true;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(component.content).toEqual('Cash accleration');
        const textContent = fixture.debugElement.query(By.css('.mat-headline-2')).nativeElement.innerHTML;
        expect(textContent).toBe('Cash accleration');
      });


    it('should create IconTypographyComponent with left false', () => {
        const fixture = TestBed.createComponent(IconTypographyComponent);
        const component = fixture.componentInstance;
        component.content = 'Cash accleration';
        component.variant = 'headline-2';
        component.shape = '22px';
        component.iconPath = 'assets/images/warning.png';
        component.left = false;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(component.content).toEqual('Cash accleration');
        const textContent = fixture.debugElement.query(By.css('.mat-headline-2')).nativeElement.innerHTML;
        expect(textContent).toBe('Cash accleration');
      });

});