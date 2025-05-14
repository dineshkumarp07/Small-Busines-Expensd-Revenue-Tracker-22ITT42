import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClientModule and HttpClient

interface Revenue {
    title: string;
    amount: number;
    category: string;
    date: string;
}

@Component({
    standalone: true, // Ensure this is marked as standalone
    imports: [FormsModule, HttpClientModule], // Add FormsModule and HttpClientModule to imports
    selector: 'app-revenue',
    templateUrl: './revenue.component.html',
    styleUrls: ['./revenue.component.css'] // Corrected to point to the existing CSS file
})
export class RevenueComponent {
    revenue: Revenue = {
        title: '',
        amount: 0,
        category: '',
        date: ''
    };

    constructor(private http: HttpClient) {} // Inject HttpClient

    // Rename the method to match the template
    addRevenue() {
        // Validate the form data before sending the request
        if (!this.revenue.title || !this.revenue.amount || !this.revenue.category || !this.revenue.date) {
            alert('All fields are required!');
            return;
        }

        // Send the revenue data to the backend server
        this.http.post('http://localhost:5000/api/revenues', this.revenue).subscribe({
            next: (response) => {
                console.log('Revenue added successfully:', response);
                alert('Revenue added successfully!');
                this.revenue = { title: '', amount: 0, category: '', date: '' }; // Reset form
            },
            error: (err) => {
                console.error('Error adding revenue:', err);
                alert('Failed to add revenue. Please try again.');
            }
        });
    }
}
