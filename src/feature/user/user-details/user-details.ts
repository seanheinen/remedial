import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.html',
  styleUrls: ['user-details.scss']
})
export class UserDetailsComponent {

  // display as percentage with 2 integers before and after decimal point (fill with zeros)
  public readonly vat = .089 ;

  // integer before decimal point must be 4 digits (fill with zeros)
  // integer after decimal point must be 2 digits (fill with zeros)
  // if integer after decimal point is more than 3 digits round to 3 digits
  public readonly price = 20.1355;

  // display in format dd/mm/yyyy hh:mm with locale UTC+3
  public readonly time = 1627741984178;

}
