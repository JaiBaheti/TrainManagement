import { Component } from "react";


export default class EditTrain extends Component{
    constructor(props){
        super(props);
        
        this.state={
            tcode:props.train.tcode,
            name:props.train.name,
            source:props.train.source,
            destination:props.train.destination
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

    onUpdate(){
       
        this.props.onSubmit(this.state);
    }

    render() {
        return (
             <div>
                 <table class="table table-dark">
                     <tr>
                        <td>Code</td>
                        <td><input name="tcode" value={this.state.tcode} required onChange={this.handleInput} readOnly /></td>
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
                        <td><button class="btn btn-success" onClick={()=>this.onUpdate()}>Update train</button></td>
                        <td><button class="btn btn-warning"onClick={()=>this.onCancel()}>Cancel train</button></td>
                    </tr>
                 </table>
             </div>
        );
    }
}