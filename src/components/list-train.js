import {Component} from "react";
import TrainService from "../services/train-service";
import { TrainRestService } from "../services/trainRestService";
import EditTrain from "./edit-train";
import NewTrain from "./newTrain";
import TrainDetails from "./train-details";

export default class ListTrains extends Component{
        constructor(props){
            super(props);
            this.service=new TrainService();
            this.srv = new TrainRestService();
            this.onDeleteTrain=this.onDeleteTrain.bind(this);
            this.state={
                showDetails:false,
                selectedTrain:null,
                newTrain:null,
                editTrain:false
            }
        }

        componentDidMount(){
            //this.setState({trains:this.service.getTrains()});
            this.getTrains();
        }
        getTrains() {
            this.srv.getTrains().then(rails => {
                console.log(rails);
                this.setState({trains:rails});
                console.log("Component Mount");
                console.log(this.state.trains);
            });
        }
        // async getTrains(){
        //     await fetch(this.uri+"/trains").then(response =>{
        //         if(!response.ok){
        //             this.handleResponseError(response);
        //         }
        //         return response.json();
        //     }).then( data => {
        //         console.log(data);
        //         this.setState({trains : data});
        //     }).catch(error => {
        //         console.log(error);
        //     });
        // }
        onSelect(tcode){
                // this.setState({
                //     showDetails:true,
                //     selectedTrain:this.service.getTrainByCode(tcode)
                // });
                this.srv.getTrainByCode(tcode).then(rails =>{
                    this.setState({
                        showDetails:true,
                        selectedTrain:rails
                    });
                });
                
        }

        clearState(){
            this.setState({
                showDetails:false,
                selectedTrain:null,
                newTrain:null,
                editTrain:false
            });
        }
        onDeleteTrain(tcode){
            this.clearState();
            // this.service.deleteTrain(tcode);
            // this.setState({trains:this.service.getTrains()});
            this.srv.deleteTrain(tcode).then(response => {
                this.getTrains();
            });
        }

        onNewTrain(){
            this.clearState();
            this.setState({
                newTrain:true
            });
        }

        onCreateTrain = (train) =>{
            this.clearState();
            // this.service.saveTrain(train);
            // this.setState({trains:this.service.getTrains()});
            this.srv.saveTrain(train).then(response => {
                this.getTrains();
            });
        }

        onCancel = ()=>{
            this.clearState();
        }

        render() {
            if(!this.state.trains)
                return null;
           
            const trainList=this.state.trains.map((x)=>
            <li key={x.tcode} onClick={()=>this.onSelect(x.tcode)} class="list-group-item">{x.name}</li>

            );    
            return (
                <div class="jumbotron">
                    <h1>List of trains</h1>
                    <ul class="list-group">
                        {trainList}
                    </ul>
                    <br />
                    <button class="btn btn-secondary"onClick={()=>this.onNewTrain()}>Add new Train</button>
                    <br />
                    <br />
                    {
                        this.state.showDetails&&this.state.selectedTrain&&
                    <TrainDetails train={this.state.selectedTrain} onDelete={this.onDeleteTrain} onEdit={this.onEditTrain}/>
                    }
                    {
                        this.state.editTrain&&this.state.selectedTrain&&
                        <EditTrain onSubmit={this.onUpdateTrain} onCancel={this.onCancelEdit} train={this.state.selectedTrain}/>
                    }
                    {   
                        this.state.newTrain&&<NewTrain onSubmit={this.onCreateTrain} onCancel={this.onCancel}/>
                    }
                   
                </div>
            );
        }

        onEditTrain=()=>{
            this.setState({
                showDetails: false,
                editTrain: true,
                newTrain :null
            });
        }

        onCancelEdit = () =>{
            this.setState({
                showDetails: true,
                editTrain: false,
                newTrain :null
            });     

        }

        onUpdateTrain=(train)=>{
            this.clearState();
            // this.service.updateTrain(train);
            // this.setState({trains:this.service.getTrains()});
            this.srv.updateTrain(train).then(response => {
                this.getTrains();
            });
        }
}