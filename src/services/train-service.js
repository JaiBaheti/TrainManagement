export default class TrainService{
    constructor(){
        //this.uri = "http://localhost:8880/";
        this.trains=[
            {tcode:123,name:"Rajdhani exp",source:"Mumbai",destiny:"Delhi"},
            {tcode:124,name:"Deccan Queen",source:"Pune",destiny:"Mumbai"},
            {tcode:125,name:"Chennai Exp",source:"Pune",destiny:"Chennai"}
        ];
    }

    getTrains(){
        return this.trains;
    }

    getTrainByCode(tcode){
        return this.trains.find(x=>x.tcode===tcode);
    }

    saveTrain(train){
        this.trains.push(train);
    }

    deleteTrain(tcode){
        this.trains.splice(this.trains.indexOf(this.trains.find(x=>x.tcode===tcode)),1);
    }

    updateTrain(train){
        var idx=this.trains.indexOf(this.trains.find(x=>x.tcode===train.tcode));
        this.trains[idx]=train;
    }
}