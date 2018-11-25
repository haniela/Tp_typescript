"use strict";
exports.__esModule = true;
var Task = /** @class */ (function () {
    function Task(content, date, priority, checked) {
        this.checked = false;
        this.content = content;
        this.date = date;
        this.priority = priority;
        this.checked = checked;
    }
    Task.prototype.getContent = function () {
        return this.content;
    };
    Task.prototype.getDate = function () {
        return this.date;
    };
    Task.prototype.getPriority = function () {
        return this.priority;
    };
    Task.prototype.getChecked = function () {
        return this.checked;
    };
    Task.prototype.setContent = function (content) {
        this.content = content;
    };
    Task.prototype.setDate = function (date) {
        this.date = date;
    };
    Task.prototype.setPriority = function (priority) {
        this.priority = priority;
    };
    Task.prototype.setChecked = function (checked) {
        this.checked = checked;
    };
    Task.prototype.add = function (content, date, priority) {
        var id = Math.random() * 58;
        return id;
    };
    Task.prototype.update = function (content, date, priority, checked) {
        this.content = content;
        this.date = date;
        this.priority = priority;
        this.checked = checked;
    };
    Task.prototype.close = function (checked) {
        return true;
    };
    Task.prototype.toString = function (content, date, priority, checked) {
        content = this.content;
        date = this.date;
        priority = this.priority;
        checked = this.checked;
        var tach = " CONTENU : " + content + "\n DATE : " + date + "\n PRIORITE : " + priority + "\n ETAT : " + checked;
        return tach;
    };
    return Task;
}());
exports["default"] = Task;
