import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private s : string = "I returned a string";
  reusableComponentState =  new Subject<boolean>();
  
  constructor() { }

  displayMessage() : string{
    return this.s;
  }


  

  checkBoxChanged(bool : boolean) : boolean{
    if(bool){
      bool = false
    }else{
      bool = true
    }
    return bool
  }
}
