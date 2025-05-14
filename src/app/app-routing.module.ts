import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Import HomeComponent
import { AboutComponent } from './components/about/about.component'; // Import AboutComponent
import { ContactComponent } from './components/contact/contact.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { RevenueComponent } from './components/revenue/revenue.component'; // Import RevenueComponent
import { DataDisplayComponent } from './components/data-display/data-display.component'; // Import DataDisplayComponent
import { SignupComponent } from './components/signup/signup.component'; // Import SignupComponent
import { LoginComponent } from './components/login/login.component'; // Import LoginComponent

const routes: Routes = [
    { path: 'home', component: HomeComponent }, // Use HomeComponent as a standalone component
    { path: 'about', component: AboutComponent }, // Use AboutComponent as a standalone component
    { path: 'contact', component: ContactComponent },
    { path: 'expense', component: ExpenseComponent },
    { path: 'revenue', component: RevenueComponent }, // Add route for RevenueComponent
    { path: 'data-display', component: DataDisplayComponent }, // Add route for DataDisplayComponent
    { path: 'learn-more', component: AboutComponent }, // New route for AboutComponent
    { path: 'signup', component: SignupComponent }, // Add route for SignupComponent
    { path: 'login', component: LoginComponent }, // Add route for LoginComponent
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
    { path: '**', redirectTo: '/home' } // Redirect unknown routes to home
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] // Ensure RouterModule is exported
})
export class AppRoutingModule { }
