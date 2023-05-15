import { TestBed } from "@angular/core/testing";
import { CashAcclerationCardComponent } from "./cash-accleration-card.component"; 
import { CashAcclerationCardItemComponent } from "../cash-accleration-card-item/cash-accleration-card-item.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { IconTypographyComponent } from "../icon-typography/icon-typography.component";


describe('Component: CashAcclerationCardComponent', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        imports:[MatGridListModule],
        declarations:[CashAcclerationCardComponent, CashAcclerationCardItemComponent , IconTypographyComponent]
      });
    });

    it('should create CashAcclerationCardComponent', () => {
        const fixture = TestBed.createComponent(CashAcclerationCardComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

});