import { TestBed } from "@angular/core/testing";
import { CashAcclerationCardItemComponent } from "./cash-accleration-card-item.component"; 
import { By } from "@angular/platform-browser";
import { IconTypographyComponent } from "../icon-typography/icon-typography.component";
import { MatGridListModule } from "@angular/material/grid-list";



describe('Component: CashAcclerationCardItem', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        imports:[MatGridListModule],
        declarations:[CashAcclerationCardItemComponent, IconTypographyComponent]
      });
    });

    it('should create CashAcclerationCardItemComponent', () => {
        const fixture = TestBed.createComponent(CashAcclerationCardItemComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should create custom CashAcclerationCardItemComponent', () => {
        const fixture = TestBed.createComponent(CashAcclerationCardItemComponent);
        const component = fixture.componentInstance;
        component.content = 'Term cap';
        component.iconPath = 'assets/images/warning.png';
        component.imagePath = 'assets/images/card-one.png';
        component.textContent = '12 months';
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(component.content).toEqual('Term cap');
        const textContent = fixture.debugElement.query(By.css('.mat-headline-2')).nativeElement.innerHTML;
        expect(textContent).toBe('12 months');
      });


});