import { CreateCashKickCardComponent } from './components/organisms/create-cash-kick-card/create-cash-kick-card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipComponent } from './components/atoms/chip/chip.component';
import { HttpClientModule } from '@angular/common/http';
import { AvatarComponent } from './components/atoms/avatar/avatar.component';
import { SliderComponent } from './components/atoms/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { IconTypographyComponent } from './components/molecules/icon-typography/icon-typography.component';
import { CashAcclerationCardItemComponent } from './components/molecules/cash-accleration-card-item/cash-accleration-card-item.component';
import { CashAcclerationCardComponent } from './components/molecules/cash-accleration-card/cash-accleration-card.component';
import { NewCashKickCardComponent } from './components/molecules/new-cash-kick-card/new-cash-kick-card.component';
import { InputComponent } from './components/atoms/input/input.component';
import { ContractsTableComponent } from './components/organisms/contracts-table/contracts-table.component';
import { CashKickTableComponent } from './components/organisms/cash-kick-table/cash-kick-table.component';
import { CashKickSuccesCardComponent } from './components/organisms/cash-kick-succes-card/cash-kick-succes-card.component';
import { SummaryCardComponent } from './components/organisms/summary-card/summary-card.component';
import { NavigationMenuComponent } from './components/organisms/navigation-menu/navigation-menu.component';
import { CashAcclerationComponent } from './pages/cash-accleration/cash-accleration.component';
import { NewCashKickComponent } from './pages/new-cash-kick/new-cash-kick.component';
import { SelectedContractsComponent } from './pages/selected-contracts/selected-contracts.component';
import { ChipService } from './services/chip.service';
import { ContractsService } from './services/contracts.service';
import { SvgIconComponent } from './components/atoms/svg-icon/svg-icon.component';
@NgModule({
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
  imports: [
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
  providers: [ ChipService, ContractsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
