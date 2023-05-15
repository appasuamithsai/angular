import { TestBed } from "@angular/core/testing";
import { CashKickSuccesCardComponent } from "./cash-kick-succes-card.component"; 
import { By } from "@angular/platform-browser";


describe('Component: CashKickSucces', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        declarations:[CashKickSuccesCardComponent]
      });
    });

    it('should create CashKickSuccesCard', () => {
        const fixture = TestBed.createComponent(CashKickSuccesCardComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('click on close image in CashKickSuccesCard', () => {
        const fixture = TestBed.createComponent(CashKickSuccesCardComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        const textContent = fixture.debugElement.query(By.css('.close-style')).nativeElement;
        textContent.click();
      });

      it('click on cancel button in CashKickSuccesCard', () => {
        const fixture = TestBed.createComponent(CashKickSuccesCardComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        const textContent = fixture.debugElement.query(By.css('.cancel-style')).nativeElement;
        textContent.click();
      });

      it('click on submit button in CashKickSuccesCard', () => {
        const fixture = TestBed.createComponent(CashKickSuccesCardComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        const textContent = fixture.debugElement.query(By.css('.submit-style')).nativeElement;
        textContent.click();
      });

});