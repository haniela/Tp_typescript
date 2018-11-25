"use strict";
exports.__esModule = true;
var Date_1 = /** @class */ (function () {
    function Date_1(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    Date_1.prototype.getYear = function () {
        return this.year;
    };
    Date_1.prototype.setYear = function (year) {
        if (year < 2040) {
            this.year = year;
        }
        else {
            console.log("notre calendrier n'a pa encore pris en compte cette année ou elle n'existe pas\n Veuillez réessayer. Merci");
        }
    };
    Date_1.prototype.getMonth = function () {
        return this.year;
    };
    Date_1.prototype.setMonth = function (month) {
        if (month > 12 || month < 1) {
            console.log("entrer un nombre en 1 et 12 puisqu'on a 12 mois.\n Merci de bien vouloir réessayer");
        }
        else {
            this.month = month;
        }
    };
    Date_1.prototype.getDay = function () {
        return this.day;
    };
    Date_1.prototype.setDay = function (day) {
        if (this.month = 1 || 3 || 5 || 7 || 10 || 12) {
            if (day < 31) {
                this.day = day;
            }
            else {
                console.log("ce jour n'existe pas dans ce mois");
            }
        }
        else if (this.month = 4 || 6 || 11 || 9) {
            if (day < 30) {
                this.day = day;
            }
            else {
                console.log("ce jour n'existe pas dans ce mois");
            }
        }
        else if (this.month = 2) {
            if (day < 28) {
                this.day = day;
            }
            else {
                console.log("ce jour n'existe pas dans ce mois");
            }
        }
    };
    Date_1.prototype.toString = function () {
        var datec = this.year + '-' + this.month + '-' + this.day;
        console.log("La date est : " + datec);
        return datec;
    };
    Date_1.prototype.Create = function (year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
        var defDate = this.year + '-' + this.month + '-' + this.day;
        console.log("La date par défaut est : " + defDate);
        return defDate;
    };
    Date_1.prototype.setDate = function (year, month, day) {
        var newdate = this.Create(year, month, day);
        return newdate;
    };
    Date_1.prototype.yesterday = function (datec) {
        var dateHier = this.year + '-' + this.month + '-' + (this.day - 1);
        console.log("La date par défaut est : " + dateHier);
        return dateHier;
    };
    Date_1.prototype.tomorow = function (datec) {
        var dateDem = this.year + '-' + this.month + '-' + (this.day + 1);
        console.log("La date par défaut est : " + dateDem);
        return dateDem;
    };
    Date_1.prototype.addDay = function (nd) {
        if (nd = null) {
            nd = 1;
            var adddate = this.year + '-' + this.month + '-' + (this.day + nd);
        }
        else
            var adddate = this.year + '-' + this.month + '-' + (this.day + nd);
        console.log("La date par défaut est : " + adddate);
        return adddate;
    };
    Date_1.prototype.subDay = function (rd) {
        if (rd = null) {
            rd = 1;
            var retraitdate = this.year + '-' + this.month + '-' + (this.day - rd);
        }
        else
            var retraitdate = this.year + '-' + this.month + '-' + (this.day - rd);
        console.log("La date par défaut est : " + retraitdate);
        return retraitdate;
    };
    Date_1.prototype.addMonth = function (nm) {
        if (nm = null) {
            nm = 1;
            var addmonth = this.year + '-' + (this.month + nm) + '-' + this.day;
        }
        else
            var addmonth = this.year + '-' + (this.month + nm) + '-' + this.day;
        console.log("La date par défaut est : " + addmonth);
        return addmonth;
    };
    Date_1.prototype.subMonth = function (rm) {
        if (rm = null) {
            rm = 1;
            var retraitmonth = this.year + '-' + (this.month - rm) + '-' + this.day;
        }
        else
            var retraitmonth = this.year + '-' + (this.month - rm) + '-' + this.day;
        console.log("La date par défaut est : " + retraitmonth);
        return retraitmonth;
    };
    Date_1.prototype.addYear = function (ny) {
        if (ny = null) {
            ny = 1;
            var addYear = (this.year + ny) + '-' + this.month + '-' + this.day;
        }
        else
            var addYear = (this.year + ny) + '-' + this.month + '-' + this.day;
        console.log("La date par défaut est : " + addYear);
        return addYear;
    };
    Date_1.prototype.subYear = function (ry) {
        if (ry = null) {
            ry = 1;
            var retraityear = (this.year + ry) + '-' + this.month + '-' + this.day;
        }
        else
            var retraityear = (this.year + ry) + '-' + this.month + '-' + this.day;
        console.log("La date par défaut est : " + retraityear);
        return retraityear;
    };
    return Date_1;
}());
exports["default"] = Date_1;
