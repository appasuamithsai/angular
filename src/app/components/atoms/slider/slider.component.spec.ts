import { TestBed } from "@angular/core/testing";
import { SliderComponent } from "./slider.component"; 
import { By } from "@angular/platform-browser";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from "@angular/forms";



describe('Component: Slider', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        imports:[MatSliderModule, FormsModule],
        declarations:[SliderComponent]
      });
    });

    it('should create Slider', () => {
        const fixture = TestBed.createComponent(SliderComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should create Slider with custom value and max', () => {
        const fixture = TestBed.createComponent(SliderComponent);
        const component = fixture.componentInstance;
        component.max = 100;
        component.value = 10;
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(component.value).toEqual(10);
        const textContent = fixture.debugElement.query(By.css('mat-slider input')).nativeElement.value;
        expect(textContent).toBe('0');
      });
});