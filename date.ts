
export default class Date_1 {
    year: number;
    month: number;
    day: number; 
  
    constructor(year: number, month: number, day: number) 
    {
      this.year = year;
      this.month= month;
      this.day= day;
    }

    getYear(): number {
        return this.year;
    }
    setYear(year: number) {
        if (year<2040){
            this.year=year;
        }
        else{
            console.log("notre calendrier n'a pa encore pris en compte cette année ou elle n'existe pas\n Veuillez réessayer. Merci");
        }
    }
    getMonth(): number {
        return this.year;
    }
    setMonth(month: number){
        if(month>12 || month<1){
            console.log("entrer un nombre en 1 et 12 puisqu'on a 12 mois.\n Merci de bien vouloir réessayer");
        }else{
            this.month=month;
        }
    }
    getDay(): number{
        return this.day;
    }
    setDay(day: number){
        if (this.month= 1 ||3 || 5 || 7 || 10 || 12)
        {
            if(day<31){
                this.day=day;
            }else{
                console.log("ce jour n'existe pas dans ce mois");
            }
        }else
        if (this.month= 4 ||6 || 11 || 9)
        {
            if(day<30){
                this.day=day;
            }else{
                console.log("ce jour n'existe pas dans ce mois");
            }
        }else
        if (this.month= 2)
        {
            if(day<28){
                this.day=day;
            }else{
                console.log("ce jour n'existe pas dans ce mois");
            }
        }
    }

    toString() : string {
        var datec:string= this.year+ '-' + this.month+ '-' + this.day;
        console.log("La date est : " + datec);
        return datec;
    }

    Create(year: number, month: number, day: number): string
        {
        this.year = year;
        this.month= month;
        this.day= day;
        var defDate:string=this.year+ '-' + this.month+ '-' + this.day;
        console.log("La date par défaut est : " + defDate);
        return defDate;
        }
    setDate(year: number, month: number, day: number): string{
        var newdate: string =this.Create(year,month,day)
        return newdate;
    }
    yesterday(datec):string{
        var dateHier:string=this.year+ '-' + this.month+ '-' +(this.day-1) ;
        console.log("La date par défaut est : " + dateHier);
        return dateHier;
    }
    tomorow(datec): string{
        var dateDem:string=this.year+ '-' + this.month+ '-' +(this.day+1) ;
        console.log("La date par défaut est : " + dateDem);
        return dateDem;
    }
    
    addDay( nd: number): string {
        if (nd= null){
            nd=1;
            var adddate:string= this.year+ '-' + this.month+ '-' +(this.day+nd);
             }else
             var adddate:string= this.year+ '-' + this.month+ '-' +(this.day+nd);
        console.log("La date par défaut est : " + adddate);
        return adddate;
    }
    subDay(rd: number): string {
        if (rd= null){
            rd=1;
            var retraitdate:string=this.year+ '-' + this.month+ '-' +(this.day-rd) ;
             }else
             var retraitdate:string=this.year+ '-' + this.month+ '-' +(this.day-rd) ;
        console.log("La date par défaut est : " + retraitdate);
        return retraitdate;
    }
    addMonth(nm): string {
        if (nm= null){
            nm=1;
            var addmonth:string= this.year+ '-' + (this.month+nm)+ '-' +this.day;
             }else
             var addmonth:string= this.year+ '-' + (this.month+nm)+ '-' +this.day;
        console.log("La date par défaut est : " + addmonth);
        return addmonth;
    }
    subMonth(rm): string {
        if (rm= null){
            rm=1;
            var retraitmonth:string= this.year+ '-' + (this.month-rm)+ '-' +this.day;
             }else
             var retraitmonth:string= this.year+ '-' + (this.month-rm)+ '-' +this.day;
             console.log("La date par défaut est : " + retraitmonth);
        return retraitmonth;
    }
    addYear( ny): string {
        if (ny= null){
            ny=1;
            var addYear:string= (this.year+ny)+ '-' + this.month+ '-' +this.day;
             }else
             var addYear:string= (this.year+ny)+ '-' + this.month+ '-' +this.day;
        console.log("La date par défaut est : " + addYear);
        return addYear;
    }
    subYear(ry): string {
        if (ry= null){
            ry=1;
            var retraityear:string= (this.year+ry)+ '-' + this.month+ '-' +this.day;
             }else
             var retraityear:string= (this.year+ry)+ '-' + this.month+ '-' +this.day;
             console.log("La date par défaut est : " + retraityear);
        return retraityear;
    }
  }