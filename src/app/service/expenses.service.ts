import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
    private apiUrl = 'http://localhost:5000/api/expenses';

    constructor(private http: HttpClient) {}

    getExpenses() {
        return this.http.get(`${this.apiUrl}/list`);
    }

    addExpense(expense: any) {
        return this.http.post(`${this.apiUrl}/add`, expense);
    }
}
