import { TestBed } from "@angular/core/testing";
import { CreateCashKickCardComponent } from "./create-cash-kick-card.component"; 
import { By } from "@angular/platform-browser";
import { InputComponent } from "../../atoms/input/input.component";


describe('Component: CreateCashKickCard', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        declarations:[CreateCashKickCardComponent,InputComponent]
      });
    });

    it('should create CreateCashKickCard', () => {
        const fixture = TestBed.createComponent(CreateCashKickCardComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('click on close image in CreateCashKickCard', () => {
        const fixture = TestBed.createComponent(CreateCashKickCardComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        const textContent = fixture.debugElement.query(By.css('.close-style')).nativeElement;
        textContent.click();
      });

      it('click on cancel button in CreateCashKickCard', () => {
        const fixture = TestBed.createComponent(CreateCashKickCardComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        const textContent = fixture.debugElement.query(By.css('.cancel-style')).nativeElement;
        textContent.click();
      });

      it('click on submit button in CreateCashKickCard', () => {
        const fixture = TestBed.createComponent(CreateCashKickCardComponent);
        const component = fixture.componentInstance;
        component.disabled = false;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        const textContent = fixture.debugElement.query(By.css('.submit-style')).nativeElement;
        textContent.click();
      });

});