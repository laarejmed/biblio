import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  passwordFieldType: string = 'password';
  @Input() label: string = '';
  @Input() label1: string = '';
  @Input() label2: string = '';
  @Input() options: string[] = [];
  @Input() placeholder: string = '';
  @Input() inputStyle: 'search' | 'contact' | 'textarea' | 'email' | 'password' | 'firstname' | 'lastname' | 'socialnumber' | 'phone' | 'file' | 'mosque' | 'address' | 'country' | 'amount' | 'title' | 'list' | 'checkbox' | undefined;
  @Input() customInputStyle: any = {};
  @Input() customFrameStyle: any = {};

  // Value and change handlers for ngModel
  value: any = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() { }

  ngOnInit(): void {
    this.value = '';
  }

  // Implementing ControlValueAccessor methods
  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Optional: Implement setDisabledState if your control should support being disabled
  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  // Method to update ngModel value on input change
  updateValue(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this.onChange(newValue); // Notify Angular forms that value has changed
    this.onTouched(); // Mark control as touched
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
