import Date_1 from './date';
import {Priority} from './priority'; 
import Task from './task';
import Project from './project';

var jour = new Date_1(2018,11,24);
jour.toString();
jour.Create(2018,11,24);

var priori: Priority;


var tache = new Task(tache.content,jour,priori,true);
tache.toString(tache);


var test:Project.Project;
test.addtask(tache,tache);