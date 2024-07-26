import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label: string = 'Button';
  @Input() customStyle: any = {};
  @Input() type: 'button' | 'submit' | 'reset' | undefined;
  @Input() buttonStyle : 'next' |'primary' | 'secondary' | 'danger' | 'login' | 'Accueil'| 'add'  | 'pdf' | 'excel' | 'csv' | 'payment' = 'primary'; 
  @Input() style : string | undefined; 
  @Input() imageUrl: string | undefined;
  @Output() onClick = new EventEmitter<void>();
  lang: any;
  isArabic: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.onClick.emit();
  }

}
