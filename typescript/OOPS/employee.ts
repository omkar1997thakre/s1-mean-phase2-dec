
export class Employee{
    name:string;
    dept:string;
    id:number;

    constructor(_name,_dept,_id){
        this.name=_name;
        this.dept=_dept;
        this.id=_id;
    }
    print():void{
        console.log(this.name+" "+this.dept);
    }
}
var emp=new Employee("Om","CS",101);
emp.print();