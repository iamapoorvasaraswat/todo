import { LightningElement, track } from 'lwc';
export default class App extends LightningElement {
    TodoId = 3;
    @track todos = [
        { id: 1, taskDetails: 'Write Story' },
        { id: 2, taskDetails: 'Build Framework' },
        { id: 3, taskDetails: 'keep' }
    ];
   
    @track taskDetails;
    handleToDoChanges(event){
        this.taskDetails = event.target.value;
   
    }
    handleToDo(){
      this.TodoId = this.TodoId + 1;
        this.todos = [
            ...this.todos,
            {
                id: this.TodoId,
                taskDetails: this.taskDetails,
            }
        ];
    }
}