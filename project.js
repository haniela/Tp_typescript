"use strict";
exports.__esModule = true;
var Project = /** @class */ (function () {
    function Project(task) {
        this.tasks = task;
    }
    Project.prototype.getTasks = function () {
        return this.tasks;
    };
    Project.prototype.setTasks = function (tasks) {
        this.tasks = tasks;
    };
    Project.prototype.addtask = function (tasks, Ntask) {
        tasks[tasks.length] = Ntask;
        return tasks;
    };
    Project.prototype.getTask = function (tasks, position) {
        var TachPosit = tasks[position];
        return TachPosit;
    };
    Project.prototype.deleteTask = function (tasks, position) {
        tasks[position] = null;
        var permut;
        for (var i = position; i < tasks.length; i++) {
            permut = tasks[i];
            tasks[i] = tasks[i + 1];
            tasks[i + 1] = permut;
        }
        return tasks;
    };
    Project.prototype.all = function (tasks) {
        for (var i = 0; i < tasks.length; i++) {
            console.log(tasks[i]);
        }
    };
    Project.prototype.complete = function (tasks) {
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].checked = true) {
                console.log(tasks[i]);
            }
        }
    };
    Project.prototype.uncomplete = function (tasks) {
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].checked = false) {
                console.log(tasks[i]);
            }
        }
    };
    return Project;
}());
exports.Project = Project;
