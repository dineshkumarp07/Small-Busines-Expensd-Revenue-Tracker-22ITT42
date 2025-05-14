import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Ensure RouterModule is imported

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/contact/navbar/navbar.component'; // Ensure correct path
import { ExpenseComponent } from './components/expense/expense.component'; // Ensure correct path
import { AboutComponent } from './components/about/about.component'; // Ensure correct path
import { ContactComponent } from './components/contact/contact.component'; // Ensure correct path
import { RevenueComponent } from './components/revenue/revenue.component'; // Import RevenueComponent

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ContactComponent
        // Removed HomeComponent and AboutComponent from declarations
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule, // Ensure RouterModule is imported
        ExpenseComponent, // Import ExpenseComponent as standalone
        RevenueComponent // Add RevenueComponent as standalone
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
