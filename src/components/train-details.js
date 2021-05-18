import {Component} from "react";

export default class TrainDetails extends Component{
    constructor(props){
        super(props);
    }

    render() {
      
        return (
             <table className="table table-striped">
                 <tr><td>Code</td><td>{this.props.train.tcode}</td></tr>
                 <tr><td>Name</td><td>{this.props.train.name}</td></tr>
                 <tr><td>Source</td><td>{this.props.train.source}</td></tr>
                 <tr><td>Destination</td><td>{this.props.train.destination}</td></tr> 
                 <tr>
                     <td ><button class="btn btn-danger" onClick={()=>this.onEdit()}>Edit</button></td>
                     <td ><button class="btn btn-danger" onClick={()=>this.onDelete()}>Delete</button></td>
                     </tr>
             </table>
        );
    }
    onDelete(){
        const t=this.props.train;
        if(window.confirm("are you sure to delete train "+t.name+" ?"))
            this.props.onDelete(t.tcode);
    }

    onEdit(){
        this.props.onEdit();
    }
}