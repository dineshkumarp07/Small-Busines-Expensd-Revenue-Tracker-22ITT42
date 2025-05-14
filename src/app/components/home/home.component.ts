import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for CurrencyPipe

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule] // Add CommonModule to imports
})
export class HomeComponent implements OnInit {
  totalRevenue: number = 10000; // Example total revenue
  totalExpense: number = 6000; // Example total expense
  remainingAmount: number = 0;

  ngOnInit() {
    this.calculateRemainingAmount();
  }

  calculateRemainingAmount() {
    this.remainingAmount = this.totalRevenue - this.totalExpense;
  }
}
