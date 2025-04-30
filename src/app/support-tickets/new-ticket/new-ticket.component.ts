import { Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../shared/control/control.component";
import { ButtonComponent } from '../../shared/button/button.component';

import {FormsModule} from "@angular/forms"

import { NewTicket } from './new-ticket.model';

@Component({
  selector: 'app-new-ticket',
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  //template element with ViewChild 1
// @ViewChild('form') private form?: ElementRef<HTMLFormElement>

  //using the viewChild Signal function() 2
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')  

  add = output<NewTicket>()

  onSubmit(data:NewTicket) {
    this.add.emit({title:data.title, text:data.text})
    // form.reset()
this.form().nativeElement.reset()
    
 }

}
