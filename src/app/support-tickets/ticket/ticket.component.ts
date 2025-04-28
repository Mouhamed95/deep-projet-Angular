import { Component } from '@angular/core';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { NewTicket } from '../new-ticket/new-ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [NewTicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  tickets: Ticket[] = []
  

  onAdd(ticketData:NewTicket) {
    const ticket: Ticket = {
      title: ticketData.title,
      request:ticketData.text,
      id:Math.random().toString(),
      status:'open'
    }
    this.tickets.push(ticket)
  }
}
