import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})


export class ReusableComponent implements OnInit {
  // salam:string = "salam";
  
  checkBoxState :boolean = true;

  constructor(private stateService : StateService) { 
    stateService.reusableComponentState.subscribe((bool: boolean): void => {
      this.checkBoxState = bool;
    })
  }

  checkBoxChange(){
    this.stateService.reusableComponentState.next(this.stateService.checkBoxChanged(this.checkBoxState))
    console.log(this.checkBoxState)
  }

  // checkBoxChanged(e : any){
  //   this.checkBoxState = this.stateService.checkChange(e);
  // }une autre methode

  ngOnInit(): void {
    // console.log(this.salam, 'salam');
  }

}
