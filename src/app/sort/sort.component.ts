// sort.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  @Output() sortEvent = new EventEmitter<string>();

  sortProducts(event: Event) {
    const target = event.target as HTMLSelectElement;
    const sortBy = target.value;
    this.sortEvent.emit(sortBy);
  }
}
