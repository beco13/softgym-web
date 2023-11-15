import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/public/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { TermsComponent } from './pages/public/terms/terms.component';
import { ShowPasswordDirective } from './directives/show-password.directive';
import { InputDateComponent } from './components/form/input-date/input-date.component';
import { DatePipe } from './pipes/date.pipe';
import { DateCalendarPipe } from './pipes/date-calendar.pipe';
import { DateTimePipe } from './pipes/date-time.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LegalAgeDirective } from './directives/legal-age.directive';
import { PasswordAgainDirective } from './directives/password-again.directive';
import { DateIssuedDirective } from './directives/date-issued.directive';
import { EmailValidationDirective } from './directives/email-validation.directive';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CustomersComponent } from './pages/admin/customers/customers.component';
import { CustomersViewComponent } from './pages/admin/customers-view/customers-view.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { UsersFormComponent } from './pages/admin/users-form/users-form.component';
import { CustomersFormComponent } from './pages/admin/customers-form/customers-form.component';
import { RoutinesComponent } from './pages/admin/routines/routines.component';
import { RoutinesFormComponent } from './pages/admin/routines-form/routines-form.component';
import { CollectFundsComponent } from './pages/admin/collect-funds/collect-funds.component';
import { CollectFundsFormComponent } from './pages/admin/collect-funds-form/collect-funds-form.component';
import { AttendsComponent } from './pages/admin/attends/attends.component';
import { AttendsFormComponent } from './pages/admin/attends-form/attends-form.component';
import { MembershipsComponent } from './pages/admin/memberships/memberships.component';
import { MedidasComponent } from './pages/admin/customers-view/components/medidas/medidas.component';
import { RutinasComponent } from './pages/admin/customers-view/components/rutinas/rutinas.component';
import { MensualidadesComponent } from './pages/admin/customers-view/components/mensualidades/mensualidades.component';
import { AsistenciasComponent } from './pages/admin/customers-view/components/asistencias/asistencias.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PanelComponent,
        DashboardComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        PageNotFoundComponent,
        CustomersComponent,
        CustomersViewComponent,
        UsersComponent,
        UsersFormComponent,
        TermsComponent,
        ShowPasswordDirective,
        InputDateComponent,
        DatePipe,
        DateCalendarPipe,
        DateTimePipe,
        FilterPipe,
        LegalAgeDirective,
        PasswordAgainDirective,
        DateIssuedDirective,
        EmailValidationDirective,
        OnlyNumberDirective,
        CustomersFormComponent,
        RoutinesComponent,
        RoutinesFormComponent,
        CollectFundsComponent,
        CollectFundsFormComponent,
        AttendsComponent,
        AttendsFormComponent,
        MembershipsComponent,
        MedidasComponent,
        RutinasComponent,
        MensualidadesComponent,
        AsistenciasComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
