import {
  Component,
  OnInit
} from '@angular/core';
import {Calculator} from "./services/calculator.service";

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  resultat : number;
  calculator : Calculator ;
  val : any;

  public ngOnInit() {
  }

  add(){
    this.resultat = this.calculator.additionner(this.val.a,this.val.b);
  }
  div(){
    this.resultat = this.calculator.division(this.val.a,this.val.b);
  }
  mul(){
    this.resultat = this.calculator.multiplication(this.val.a,this.val.b);
  }
  minus(){
    this.resultat = this.calculator.minus(this.val.a,this.val.b);
  }

}
