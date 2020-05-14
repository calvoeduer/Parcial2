import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PersonaConsultaComponent } from './Venta/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './Venta/persona-registro/persona-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { CreditoRegisterCompomentComponent } from './venta/credito/credito-register-compoment/credito-register-compoment.component';
import { CreditosComponentComponent } from './venta/credito/creditos-component/creditos-component.component';
import { HandleHttpErrorService } from './@base/handle-http-error-service';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';

@NgModule({
  declarations: [
    NgbModule,
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PersonaConsultaComponent,
    PersonaRegistroComponent,
    CreditoRegisterCompomentComponent,
    CreditosComponentComponent,
    HandleHttpErrorService,
    AlertModalComponent
  ],
  
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  entryComponents:[AlertModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
