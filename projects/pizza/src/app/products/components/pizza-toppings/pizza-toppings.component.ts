import { Component, OnInit, Input } from '@angular/core';
import { Topping } from '../../models/topping.model';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: "pizza-toppings",
  templateUrl: "./pizza-toppings.component.html",
  styleUrls: ["./pizza-toppings.component.scss"]
})
export class PizzaToppingsComponent implements ControlValueAccessor {
  constructor() {}

  @Input() toppings: Topping[] = [];

  value: Topping[] = [];

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: Topping[]) {
    this.value = value;
  }

  selectTopping(topping: Topping) {
    if (this.existsInToppings(topping)) {
      this.value = this.value.filter(item => item.id !== topping.id);
    } else {
      this.value = [...this.value, topping];
    }
    this.onTouch();
    this.onModelChange(this.value);
  }

  existsInToppings(topping: Topping) {
    return this.value.some(val => val.id === topping.id);
  }
}
