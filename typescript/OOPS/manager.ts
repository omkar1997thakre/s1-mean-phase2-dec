import { DependanceResolver } from "./dependance";

class Manager{
    developer:IDeveloper;

    scheduleMeeting(){
        this.developer=new DependanceResolver.resolveDeveloper("1","XYZ","It","bank")
        console.log("Schedule a meeting");
        this.developer.invite();
    }
}
var manager=new Manager();
manager.scheduleMeeting();