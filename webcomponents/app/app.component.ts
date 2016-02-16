import {Component} from 'angular2/core';
import {MyWebcomponent} from "./mywebcomponent.component";
import {ContentChildren} from "angular2/core";
import {QueryList} from "angular2/core";
import {ContentChild} from "angular2/core";
import {AfterViewInit} from "angular2/core";
import {ViewChild} from "angular2/core";
import {ViewChildren} from "angular2/core";
@Component({
    selector: 'my-app',
    directives: [MyWebcomponent],
    template: `
     <my-component>
        <div header>I render in head.</div>
        <div body>I render in body.</div>
     </my-component>`
})
export class AppComponent implements AfterViewInit {

    @ViewChildren(MyWebcomponent)
    entries: QueryList<MyWebcomponent>;

    @ViewChild(MyWebcomponent)
    mycomponent: MyWebcomponent;


    ngAfterViewInit():any {

        console.log("APP INIT");


        this.entries.toArray().forEach(subcomp =>{
            console.log(subcomp);
        });

        console.log(this.mycomponent);

        console.log(this.mycomponent == this.entries.toArray()[0]);
    }

}