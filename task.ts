import Date_1 from './date';
import {Priority} from './priority'; 

export default class Task{

    content : string;
    date : Date_1;  
    priority : Priority;
    checked : boolean = false; 

    constructor( content:string, date:Date_1, priority:Priority, checked:boolean){
        this.content = content;
        this.date = date;
        this.priority = priority;
        this.checked = checked;
    }

    getContent (): string{
        return this.content;
    }

    getDate (): Date_1{
        return this.date;
    }

    getPriority (): Priority{
        return this.priority;
    }

    getChecked (): boolean{
        return this.checked;
    }



    setContent (content:string){
            this.content=content;
    }

    setDate (date:Date_1){
        this.date=date;
    }

    setPriority (priority:Priority){
        this.priority=priority;
    }

    setChecked (checked:boolean){
        this.checked=checked;
    }



     add ( content:string, date:Date_1, priority:Priority ) : number{
    let id : number = Math.random()*58;
    return id; 
} 

     update ( content?:string, date?:Date_1, priority?:Priority,checked?:boolean ){
        this.content = content;
        this.date = date;
        this.priority = priority;
        this.checked = checked;
}

     close (checked:boolean) : boolean{
    return true;
}

     toString ( content:string, date:Date_1, priority:Priority,checked:boolean ) : string {
        content = this.content;
        date = this.date;
        priority = this.priority;
        checked = this.checked;

        let tach : string = " CONTENU : " +content+ "\n DATE : " +date+ "\n PRIORITE : " +priority+ "\n ETAT : " +checked ;
        return tach; 

}

}