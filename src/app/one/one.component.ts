import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  one :string  = 'hello';
  checkBoxStateOne : boolean = false;

  constructor(private oneService : StateService) {
    oneService.reusableComponentState.subscribe((bool: boolean): void => {
      this.checkBoxStateOne = bool;
    })
   }

  hello(){
    this.one = this.oneService.displayMessage();
  }


  ngOnInit(): void {
    
  }

}
