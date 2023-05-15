import { TestBed } from "@angular/core/testing";
import { AvatarComponent } from "./avatar.component";


describe('Component: Avatar', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        declarations:[AvatarComponent]
      });
    });

    it('should create avatar', () => {
        const fixture = TestBed.createComponent(AvatarComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

});