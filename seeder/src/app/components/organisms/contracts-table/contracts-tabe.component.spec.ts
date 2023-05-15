import { TestBed } from "@angular/core/testing";
import { ContractsTableComponent } from "./contracts-table.component"; 
import { By } from "@angular/platform-browser";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";


describe('Component: ContractsTable', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        imports:[MatTableModule,MatCheckboxModule],
        declarations:[ContractsTableComponent]
      });
    });

    it('should create ContractsTable', () => {
        const fixture = TestBed.createComponent(ContractsTableComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('disable on click functionality by making selected true', () => {
        const fixture = TestBed.createComponent(ContractsTableComponent);
        const component = fixture.componentInstance;
        component.selected = true;
        component.checkbox = false;
        fixture.detectChanges();
        expect(component).toBeTruthy();
      });

      it('enabling on click functionality by making selected false ', () => {
        const fixture = TestBed.createComponent(ContractsTableComponent);
        const component = fixture.componentInstance;
        component.selected = false;
        component.checkbox = true;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        const textContent = fixture.debugElement.query(By.css('.row-2')).nativeElement;
        textContent.click();
      });

});