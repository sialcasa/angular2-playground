import {Component, View} from 'angular2/core';

@Component({
  selector: 'my-component',
  template: `
    <div style="background-color: #cacaca">
      <div head>
        <ng-content select="[header]"></ng-content>
      </div>
      <div menu>
        <ng-content select="[body]"></ng-content>
      </div>
      <div >
        &copy; Foo
      </div>
    </div>
  `
})
export class MyWebcomponent {
  constructor() {
  }
}
