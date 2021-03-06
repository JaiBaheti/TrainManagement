import { Component } from "react";
import TrainService from "../services/train-service";

export default class NewTrain extends Component{
    constructor(props){
        super(props);
        this.service=new TrainService();
        this.state={
            tcode:0,
            name:'',
            source:'',
            destination:''
        }
    }

    handleInput=(event)=>{
            const name=event.target.name;
            const value=event.target.value;
            this.setState({
                [name]:value
            });
    }

    onCancel(){
        this.props.onCancel();
    }

    onSave(){
       
        this.props.onSubmit(this.state);
    }

    render() {
        return (
             <div>
                 <table class="table table-dark">
                     <tr>
                        <td>Code</td>
                        <td><input name="tcode" value={this.state.tcode} required onChange={this.handleInput} /></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input name="name" value={this.state.name} required onChange={this.handleInput} /></td>
                    </tr>
                    <tr>
                        <td>Source</td>
                        <td><input name="source" value={this.state.source} required onChange={this.handleInput} /></td>
                    </tr>
                    <tr>
                        <td>Destination</td>
                        <td><input name="destination" value={this.state.destination} required onChange={this.handleInput} /></td>
                    </tr>
                    <tr>
                        <td><button class="btn btn-success" onClick={()=>this.onSave()}>Save train</button></td>
                        <td><button class="btn btn-warning"onClick={()=>this.onCancel()}>Cancel train</button></td>
                    </tr>
                 </table>
             </div>
        );
    }
}