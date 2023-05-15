import { TestBed } from "@angular/core/testing";
import { CashAcclerationComponent } from "./cash-accleration.component"; 
import { CashAcclerationCardComponent } from "src/app/components/molecules/cash-accleration-card/cash-accleration-card.component";
import { ChipComponent } from "src/app/components/atoms/chip/chip.component";
import { AvatarComponent } from "src/app/components/atoms/avatar/avatar.component";
import { NewCashKickCardComponent } from "src/app/components/molecules/new-cash-kick-card/new-cash-kick-card.component";
import { CashKickTableComponent } from "src/app/components/organisms/cash-kick-table/cash-kick-table.component";
import { SelectedContractsComponent } from "../selected-contracts/selected-contracts.component";
import { NewCashKickComponent } from "../new-cash-kick/new-cash-kick.component";
import { NavigationMenuComponent } from "src/app/components/organisms/navigation-menu/navigation-menu.component";
import { CreateCashKickCardComponent } from "src/app/components/organisms/create-cash-kick-card/create-cash-kick-card.component";
import { CashKickSuccesCardComponent } from "src/app/components/organisms/cash-kick-succes-card/cash-kick-succes-card.component";
import { ContractsTableComponent } from "src/app/components/organisms/contracts-table/contracts-table.component";
import { InputComponent } from "src/app/components/atoms/input/input.component";
import { SummaryCardComponent } from "src/app/components/organisms/summary-card/summary-card.component";
import { SliderComponent } from "src/app/components/atoms/slider/slider.component";
import { IconTypographyComponent } from "src/app/components/molecules/icon-typography/icon-typography.component";
import { CashAcclerationCardItemComponent } from "src/app/components/molecules/cash-accleration-card-item/cash-accleration-card-item.component";
import { SvgIconComponent } from "src/app/components/atoms/svg-icon/svg-icon.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "src/app/app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { MatSliderModule } from "@angular/material/slider";
import { HttpClientModule } from "@angular/common/http";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";

describe('Component: CashAccleration', () => {

    beforeEach(()=>{
      TestBed.configureTestingModule({
        imports:[
          BrowserModule,
          AppRoutingModule,
          MatButtonModule,
          MatGridListModule,
          MatIconModule,
          HttpClientModule,
          MatSliderModule,
          MatCheckboxModule,
          MatTableModule,
          FormsModule
        ],
        declarations: [
          ChipComponent,
          AvatarComponent,
          SliderComponent,
          SvgIconComponent,
          IconTypographyComponent,
          CashAcclerationCardItemComponent,
          CashAcclerationCardComponent,
          NewCashKickCardComponent,
          InputComponent,
          ContractsTableComponent,
          CashKickTableComponent,
          CreateCashKickCardComponent,
          CashKickSuccesCardComponent,
          SummaryCardComponent,
          NavigationMenuComponent,
          CashAcclerationComponent,
          NewCashKickComponent,
          SelectedContractsComponent
        ],
      });
    });

    it('should create CashAccleration', () => {
        const fixture = TestBed.createComponent(CashAcclerationComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

});