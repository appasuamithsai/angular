import { TestBed } from "@angular/core/testing";
import { SvgIconComponent } from "./svg-icon.component"; 
import { By } from "@angular/platform-browser";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";



describe('Component: Svg Icon', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        imports: [ MatIconModule, HttpClientModule, FormsModule],
        declarations:[SvgIconComponent]
      });
    });

    it('should create Svg Icon', () => {
        const fixture = TestBed.createComponent(SvgIconComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should create custom Svg Icon', () => {
        const fixture = TestBed.createComponent(SvgIconComponent);
        const component = fixture.componentInstance;
        component.name = "dropdown";
        component.path = "../../../../assets/icons/dropdown.svg";
        component.shape = "20px";
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(component.name).toEqual("dropdown");
        const srcPath = fixture.debugElement.query(By.css('.mat-icon')).nativeElement.role;
        expect(srcPath).toBe('img');
      });
});