import {Page, Alert, NavController} from 'ionic-angular';
import {Http} from 'angular2/http';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    //arr: any[];
    
    arr : FirebaseListObservable<any[]>
    constructor(public nav : NavController, public http : Http, public af: AngularFire){
        this.arr = af.list('/firebasedata');
        //this.arr = [];
        this.nav = nav;
    }
    
    addtask(){
        var prompt = Alert.create({
            title : 'Add Task',
            message: 'Type Task Here to add to the list',
            inputs :[
                {
                    name: 'task',
                }
            ],
            buttons : [
                {
                    text : 'Cancel',
                    handler : data =>{
                        console.log(data);
                    }
                },
                {
                    text : 'Save',
                    handler : data => {
                        // var obj = {
                        //     task : JSON.stringify(data),
                        //     id: Date.now()
                        // }
                       
                      this.arr.add(data); 
                    }
                }
            ]
        });
        
        this.nav.present(prompt);
    }
    
    update(value){
        
        var edit = Alert.create({
            title : 'Edit Task',
            message: 'Edit Your Task Here',
            inputs :[
                {
                    name: 'task',
                    placeholder : value
                }
            ],
            buttons : [
                {
                    text : 'Cancel',
                    handler : data =>{
                        console.log(value);
                        
                    }
                },
                {
                    text : 'Save',
                    handler : data => {
                       //take value "data""
                       //identify where to put //identify by id
                       //replace the content //replace method of ar       
                    //    for(var i = 0; i < this.arr.length; i++){
                    //     if(this.arr[i].task == value){
                    //         //
                    //         this.arr[i].task = JSON.stringify(data.task);                
                    //         break;
                    //     }
                        
                    // }
                    
                    console.log("update");
                    
                  }
                }
            ]
        });
        
        this.nav.present(edit);
    }
        
    
    delete(value){
        
        
        console.log(value);
        this.arr.remove(value)
        
    //     for(var i = 0; i < this.arr.length; i++){
    //                     if(this.arr[i].task == vale){
    //                         this.arr.splice(i, 1);                
    //                         break;
    //                     }
    // }
    }
}
