var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.scheduleMeeting = function () {
        console.log("Schedule a meeting");
        this.developer.invite();
    };
    return Manager;
}());
