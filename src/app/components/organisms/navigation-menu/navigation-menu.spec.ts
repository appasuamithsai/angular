import { TestBed } from "@angular/core/testing";
import { NavigationMenuComponent } from "./navigation-menu.component"; 
import { IconTypographyComponent } from "../../molecules/icon-typography/icon-typography.component";

describe('Component: NavigationMenu', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        declarations:[NavigationMenuComponent,IconTypographyComponent]
      });
    });

    it('should create NavigationMenu', () => {
        const fixture = TestBed.createComponent(NavigationMenuComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});