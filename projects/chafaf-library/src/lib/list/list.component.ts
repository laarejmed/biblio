import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface MenuItem {
  label: string;
  link: string;
  subItems?: MenuItem[];
}

@Component({
  selector: 'lib-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() logoUrl: string = '';
  @Input() logoText: string = 'MyLogo';
  @Input() menuItems: any[] = [];
  @Input() languageFlags: { url: string, code: string }[] = [];
  @Output() languageChange = new EventEmitter<string>();

  changeLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.languageChange.emit(lang);
    window.location.reload();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
