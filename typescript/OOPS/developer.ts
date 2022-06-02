import {Employee} from './employee';
class Developer extends Employee implements IDeveloper{
    printprojectName(): void {
        console.log(this.projectName);
    }
    projectName:string;
    writeCode(){
        console.log("Wroting Code");
    }
    getName():void{
        console.log(this.projectName);
    }
}
var dev=new Developer("Om","CS",101);
dev.projectName="ICICI Bank";
dev.print();
dev.writeCode();
dev.printprojectName();