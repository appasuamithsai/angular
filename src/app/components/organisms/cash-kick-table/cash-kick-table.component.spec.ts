import { TestBed } from "@angular/core/testing";
import { CashKickTableComponent } from "./cash-kick-table.component"; 
import { By } from "@angular/platform-browser";
import { MatTableModule } from "@angular/material/table";


describe('Component: CashKickTable', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        imports:[MatTableModule],
        declarations:[CashKickTableComponent]
      });
    });

    it('should create CashKickTable', () => {
        const fixture = TestBed.createComponent(CashKickTableComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});