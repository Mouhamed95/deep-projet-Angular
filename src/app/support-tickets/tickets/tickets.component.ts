import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../support.model';


@Component({
  selector: 'app-tickets',
  imports: [],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  data = input.required<Ticket>()
  close = output()
  showDetails = signal(false)
  
  onShow() {
    // this.showDetails.set(!this.showDetails())
    this.showDetails.update((show)=>!show)
  }

  onMarkComplete() {
     this.close.emit()
   }

}
