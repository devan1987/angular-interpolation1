import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  test = 'This is a test text';
  

  testobj = { name: 'arun' };
  testcountobj = { count: 0};
  printval:any = 'anyvalue';

  printName() {
    this.printval = Math.random();
    return this.testobj.name;
  }

  increaseCount() {
      this.testcountobj.count++;
  }
}
