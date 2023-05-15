import { TestBed } from "@angular/core/testing";
import { SummaryCardComponent } from "./summary-card.component"; 
import { IconTypographyComponent } from "../../molecules/icon-typography/icon-typography.component";
import { By } from "@angular/platform-browser";
import { MatSliderModule } from "@angular/material/slider";
import { SliderComponent } from "../../atoms/slider/slider.component";
import { FormsModule } from "@angular/forms";

describe('Component: SummaryCard', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        imports:[MatSliderModule,FormsModule],
        declarations:[SummaryCardComponent,IconTypographyComponent,SliderComponent]
      });
    });

    it('should create SummaryCard', () => {
        const fixture = TestBed.createComponent(SummaryCardComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
    it('check the number of selected contracts when selected is false ', () => {
        const fixture = TestBed.createComponent(SummaryCardComponent);
        const component = fixture.componentInstance;
        component.selected = false;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        const selectedContracts = fixture.debugElement.query(By.css('#selected-contracts'))
        .nativeElement.innerHTML;
        expect(selectedContracts).toBe('0');
    });
    it('check the number of selected contracts selected is true', () => {
        const fixture = TestBed.createComponent(SummaryCardComponent);
        const component = fixture.componentInstance;
        component.selected = true;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        const selectedContracts = fixture.debugElement.query(By.css('#selected-contracts'))
        .nativeElement.innerHTML;
        expect(selectedContracts).toBe('2');
    });
});
