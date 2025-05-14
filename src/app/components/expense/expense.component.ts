import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClientModule and HttpClient

interface Expense {
    title: string;
    amount: number;
    category: string;
    date: string;
}

@Component({
    standalone: true, // Ensure this is marked as standalone
    imports: [FormsModule, HttpClientModule], // Add FormsModule and HttpClientModule to imports
    selector: 'app-expense',
    templateUrl: './expense.component.html',
    styleUrls: ['./expense.component.css'] // Corrected to point to the existing CSS file
})
export class ExpenseComponent {
    expense: Expense = {
        title: '',
        amount: 0,
        category: '',
        date: ''
    };

    constructor(private http: HttpClient) {} // Inject HttpClient

    // Define the onSubmit method
    onSubmit() {
        // Validate the form data before sending the request
        if (!this.expense.title || !this.expense.amount || !this.expense.category || !this.expense.date) {
            alert('All fields are required!');
            return;
        }

        // Ensure the URL points to the correct backend server
        this.http.post('http://localhost:5000/api/expenses', this.expense).subscribe({
            next: (response) => {
                console.log('Expense added successfully:', response);
                alert('Expense added successfully!');
                this.expense = { title: '', amount: 0, category: '', date: '' }; // Reset form
            },
            error: (err) => {
                console.error('Error adding expense:', err);
                alert('Failed to add expense. Please try again.');
            }
        });
    }
}
