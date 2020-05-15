import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreditoRegisterCompomentComponent } from './venta/credito/credito-register-compoment/credito-register-compoment.component';
import { CreditosComponentComponent } from './venta/credito/creditos-component/creditos-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{
  path: 'creditos',
  component: CreditosComponentComponent
  },
  
  {
  path: 'registrar-credito',
  component: CreditoRegisterCompomentComponent

  },
  { path: '', component: HomeComponent },

];
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
