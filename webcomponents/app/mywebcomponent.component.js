System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyWebcomponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyWebcomponent = (function () {
                function MyWebcomponent() {
                }
                MyWebcomponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n    <div style=\"background-color: #cacaca\">\n      <div head>\n        <ng-content select=\"[header]\"></ng-content>\n      </div>\n      <div menu>\n        <ng-content select=\"[body]\"></ng-content>\n      </div>\n      <div >\n        &copy; Foo\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyWebcomponent);
                return MyWebcomponent;
            })();
            exports_1("MyWebcomponent", MyWebcomponent);
        }
    }
});
//# sourceMappingURL=mywebcomponent.component.js.map