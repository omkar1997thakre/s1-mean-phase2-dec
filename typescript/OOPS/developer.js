"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var employee_1 = require("./employee");
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.printprojectName = function () {
        console.log(this.projectName);
    };
    Developer.prototype.writeCode = function () {
        console.log("Wroting Code");
    };
    Developer.prototype.getName = function () {
        console.log(this.projectName);
    };
    return Developer;
}(employee_1.Employee));
var dev = new Developer("Om", "CS", 101);
dev.projectName = "ICICI Bank";
dev.print();
dev.writeCode();
dev.printprojectName();
