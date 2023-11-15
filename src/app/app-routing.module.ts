import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './components/panel/panel.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/public/login/login.component';
import { TermsComponent } from './pages/public/terms/terms.component';
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


const adminRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'memberships', component: MembershipsComponent },

    { path: 'customers', component: CustomersComponent },
    { path: 'customers/add', component: CustomersFormComponent },
    { path: 'customers/:id/edit', component: CustomersFormComponent },
    { path: 'customers/:id/view', component: CustomersViewComponent },

    { path: 'routines', component: RoutinesComponent },
    { path: 'routines/add', component: RoutinesFormComponent },
    { path: 'routines/:id/edit', component: RoutinesFormComponent },

    { path: 'attends', component: AttendsComponent },
    { path: 'attends/add', component: AttendsFormComponent },
    { path: 'attends/:id/edit', component: AttendsFormComponent },

    { path: 'collect-funds', component: CollectFundsComponent },
    { path: 'collect-funds/add', component: CollectFundsFormComponent },
    { path: 'collect-funds/:id/edit', component: CollectFundsFormComponent },

    { path: 'users', component: UsersComponent },
    { path: 'users/add', component: UsersFormComponent },
    { path: 'users/:id/edit', component: UsersFormComponent },

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];


const routes: Routes = [

    { path: 'terms', component: TermsComponent },
    { path: 'login', component: LoginComponent },


    // contiene las secciones internas
    { path: 'admin', component: PanelComponent, children: adminRoutes },

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
