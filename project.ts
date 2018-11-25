import Task from './task';


export class Project{

    tasks : Task[];


    constructor(task:Task[]){
        this.tasks=task;
    }

    getTasks (): Task[] {
        return this.tasks;
    }
    

    setTasks (tasks:Task[]){
        this.tasks=tasks;
    }

     addtask ( tasks:Task[] , Ntask:Task) : Task[] {
        tasks[tasks.length] = Ntask;
        return tasks;
    }

     getTask ( tasks:Task[], position:number ) : Task{
        var TachPosit : Task = tasks[position];
        return TachPosit;
    }

     deleteTask ( tasks:Task[], position:number ) : Task[] {
        tasks[position] = null;
        var permut : Task;

        for (var i = position; i < tasks.length; i++) {
            permut=tasks[i];
            tasks[i]=tasks[i+1];
            tasks[i+1]=permut;
        }
        return tasks;
    }

    public all ( tasks:Task[] ) {

        for(var i = 0; i < tasks.length; i++){
            console.log(tasks[i]);
        }

    }

    public complete ( tasks:Task[] ) {

        for(var i = 0; i < tasks.length; i++){

            if(tasks[i].checked = true){
                console.log(tasks[i]);
            }

        }

    }

    public uncomplete ( tasks:Task[] ) {

        for(var i = 0; i < tasks.length; i++){

            if(tasks[i].checked = false){
                console.log(tasks[i]);
            }

        }

    }

    
}