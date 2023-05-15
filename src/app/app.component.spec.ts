import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/organisms/navigation-menu/navigation-menu.component';
import { CashAcclerationCardComponent } from './components/molecules/cash-accleration-card/cash-accleration-card.component';
import { ChipComponent } from './components/atoms/chip/chip.component';
import { ContractsTableComponent } from './components/organisms/contracts-table/contracts-table.component';
import { InputComponent } from './components/atoms/input/input.component';
import { NewCashKickCardComponent } from './components/molecules/new-cash-kick-card/new-cash-kick-card.component';
import { IconTypographyComponent } from './components/molecules/icon-typography/icon-typography.component';
import { SliderComponent } from './components/atoms/slider/slider.component';
import { AvatarComponent } from './components/atoms/avatar/avatar.component';
import { SelectedContractsComponent } from './pages/selected-contracts/selected-contracts.component';
import { CashAcclerationComponent } from './pages/cash-accleration/cash-accleration.component';
import { CashAcclerationCardItemComponent } from './components/molecules/cash-accleration-card-item/cash-accleration-card-item.component';
import { CashKickTableComponent } from './components/organisms/cash-kick-table/cash-kick-table.component';
import { CreateCashKickCardComponent } from './components/organisms/create-cash-kick-card/create-cash-kick-card.component';
import { NewCashKickComponent } from './pages/new-cash-kick/new-cash-kick.component';
import { SummaryCardComponent } from './components/organisms/summary-card/summary-card.component';
import { CashKickSuccesCardComponent } from './components/organisms/cash-kick-succes-card/cash-kick-succes-card.component';
import { SvgIconComponent } from './components/atoms/svg-icon/svg-icon.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
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
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
