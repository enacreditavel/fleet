import { Component, Input, Optional, Self, HostBinding, Injector } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'finput',
  templateUrl: './finput.component.html',
  standalone: false,
  styleUrls: ['./finput.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FinputComponent,
      multi: true,
    },
  ],
})
export class FinputComponent implements ControlValueAccessor {
  @Input() t = 'text';
  @Input() id = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() label = '';

  value = '';
  disabled = false;

  ngControl!: NgControl;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    // Evita erro de injeção circular
    this.ngControl = this.injector.get(NgControl);
    this.ngControl.valueAccessor = this;
  }

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  get isInvalid(): boolean | undefined {
    return this.ngControl?.control?.touched && this.ngControl?.control?.invalid;
  }
}
