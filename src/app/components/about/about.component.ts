import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for CurrencyPipe

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule] // Add CommonModule to imports
})
export class AboutComponent implements OnInit {
  totalRevenue: number = 10000; // Example total revenue (can be fetched dynamically)
  totalExpense: number = 6000; // Example total expense (can be fetched dynamically)
  remainingAmount: number = 0;

  ngOnInit() {
      this.calculateRemainingAmount();
  }

  calculateRemainingAmount() {
      this.remainingAmount = this.totalRevenue - this.totalExpense;
  }
}
