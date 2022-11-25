import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telteg';
  aSide !: number;
  bSide !: number;

  calcArea(): void {
    let area = 2 * (this.aSide * this.bSide);
  }
}
