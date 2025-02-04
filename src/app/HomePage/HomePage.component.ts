import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {

  isDropdownOpen: boolean = false
  isSelected: boolean=false

  ngOnInit(): void { }
  
  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen
  }
}
