import { TestBed } from "@angular/core/testing";
import { NewCashKickCardComponent } from "./new-cash-kick-card.component";


describe('Component: NewCashKickCard', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        declarations:[NewCashKickCardComponent]
      });
    });

    it('should create NewCashKickCard', () => {
        const fixture = TestBed.createComponent(NewCashKickCardComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

});