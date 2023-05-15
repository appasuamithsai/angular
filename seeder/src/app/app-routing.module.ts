import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashAcclerationComponent } from './pages/cash-accleration/cash-accleration.component';
import { NewCashKickComponent } from './pages/new-cash-kick/new-cash-kick.component';
import { SelectedContractsComponent } from './pages/selected-contracts/selected-contracts.component';

const appRoutes : Routes = [
  { path:'new-cashkick', component : NewCashKickComponent},
  { path:'selected-contracts', component : SelectedContractsComponent},
  { path:'', component : CashAcclerationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
