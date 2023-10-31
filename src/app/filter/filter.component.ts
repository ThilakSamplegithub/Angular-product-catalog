// filter.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterEvent = new EventEmitter<string>();

  filterProductsByCategory(event: any) {
    const category = event.target.value;
    this.filterEvent.emit(category);
  }
}
