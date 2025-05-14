import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common'; // Import CommonModule and DatePipe
import { FormsModule } from '@angular/forms'; // Import FormsModule

interface Expense {
    title: string;
    amount: number;
    category: string;
    date: string;
    _id: string; // Include the ID field for editing and deleting
}

interface Revenue {
    title: string;
    amount: number;
    category: string;
    date: string;
    _id: string; // Include the ID field for editing and deleting
}

@Component({
    standalone: true,
    imports: [CommonModule, HttpClientModule, DatePipe, FormsModule], // Add FormsModule to imports
    selector: 'app-data-display',
    templateUrl: './data-display.component.html',
    styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
    expenses: Expense[] = [];
    revenues: Revenue[] = [];
    filteredExpenses: Expense[] = [];
    filteredRevenues: Revenue[] = [];
    expenseSearch: string = '';
    revenueSearch: string = '';
    editingExpense: Expense | null = null; // Initialize with default values
    editingRevenue: Revenue | null = null; // Initialize with default values

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.fetchExpenses();
        this.fetchRevenues();
    }

    fetchExpenses() {
        this.http.get<Expense[]>('http://localhost:5000/api/expenses/list').subscribe({
            next: (data) => {
                this.expenses = data;
                this.filteredExpenses = data; // Initialize filtered list
                console.log('Expenses fetched successfully:', data);
            },
            error: (err) => {
                console.error('Error fetching expenses:', err);
                alert('Failed to fetch expenses.');
            }
        });
    }

    fetchRevenues() {
        this.http.get<Revenue[]>('http://localhost:5000/api/revenues/list').subscribe({
            next: (data) => {
                this.revenues = data;
                this.filteredRevenues = data; // Initialize filtered list
                console.log('Revenues fetched successfully:', data);
            },
            error: (err) => {
                console.error('Error fetching revenues:', err);
                alert('Failed to fetch revenues.');
            }
        });
    }

    editExpense(expense: Expense) {
        this.editingExpense = { ...expense }; // Clone the expense for editing
    }

    saveExpense() {
        if (this.editingExpense) {
            this.http.put(`http://localhost:5000/api/expenses/${this.editingExpense._id}`, this.editingExpense).subscribe({
                next: () => {
                    console.log('Expense updated successfully');
                    this.fetchExpenses(); // Refresh the list
                    this.editingExpense = null; // Exit edit mode
                    alert('Expense updated successfully!');
                },
                error: (err) => {
                    console.error('Error updating expense:', err);
                    alert('Failed to update expense.');
                }
            });
        }
    }

    deleteExpense(id: string) {
        this.http.delete(`http://localhost:5000/api/expenses/${id}`).subscribe({
            next: () => {
                console.log('Expense deleted successfully');
                this.expenses = this.expenses.filter(expense => expense._id !== id); // Remove from UI
                alert('Expense deleted successfully!');
            },
            error: (err) => {
                console.error('Error deleting expense:', err);
                alert('Failed to delete expense.');
            }
        });
    }

    editRevenue(revenue: Revenue) {
        this.editingRevenue = { ...revenue }; // Clone the revenue for editing
    }

    saveRevenue() {
        if (this.editingRevenue) {
            this.http.put(`http://localhost:5000/api/revenues/${this.editingRevenue._id}`, this.editingRevenue).subscribe({
                next: () => {
                    console.log('Revenue updated successfully');
                    this.fetchRevenues(); // Refresh the list
                    this.editingRevenue = null; // Exit edit mode
                    alert('Revenue updated successfully!');
                },
                error: (err) => {
                    console.error('Error updating revenue:', err);
                    alert('Failed to update revenue.');
                }
            });
        }
    }

    deleteRevenue(id: string) {
        this.http.delete(`http://localhost:5000/api/revenues/${id}`).subscribe({
            next: () => {
                console.log('Revenue deleted successfully');
                this.revenues = this.revenues.filter(revenue => revenue._id !== id); // Remove from UI
                alert('Revenue deleted successfully!');
            },
            error: (err) => {
                console.error('Error deleting revenue:', err);
                alert('Failed to delete revenue.');
            }
        });
    }

    searchExpenses() {
        this.filteredExpenses = this.expenses.filter(expense =>
            expense.title.toLowerCase().includes(this.expenseSearch.toLowerCase()) ||
            expense.category.toLowerCase().includes(this.expenseSearch.toLowerCase())
        );
    }

    searchRevenues() {
        this.filteredRevenues = this.revenues.filter(revenue =>
            revenue.title.toLowerCase().includes(this.revenueSearch.toLowerCase()) ||
            revenue.category.toLowerCase().includes(this.revenueSearch.toLowerCase())
        );
    }
}
