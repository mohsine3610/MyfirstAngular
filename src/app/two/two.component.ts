import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  
  checkBoxStateTwo : boolean = false;

  constructor(private twoService : StateService) { 
    twoService.reusableComponentState.subscribe((bool: boolean): void => {
      this.checkBoxStateTwo = bool;
    })
  }

  ngOnInit(): void {
  }

}
