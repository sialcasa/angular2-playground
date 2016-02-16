import {Component} from 'angular2/core';
import {MyWebcomponent} from "./mywebcomponent.component";
@Component({
    selector: 'my-app',
    directives: [MyWebcomponent],
    template: `
     <my-component>
        <div header>I render in head.</div>
        <div body>I render in body.</div>
     </my-component>`
})
export class AppComponent {

}