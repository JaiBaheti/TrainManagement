export class TrainRestService{
    constructor(){
        this.uri = "http://localhost:8980/";
        this.trains = [];
    }

    async getTrains(){
        return await fetch(this.uri+"/trains").then(response =>{
            if(!response.ok){
                this.handleResponseError(response);
            }
            return response.json();
        }).then( data => {
            console.log(data);
            this.trains = data;
            return this.trains;
        });
    }

    async getTrainByCode(tcode){
        return await fetch(this.uri+"/train/"+tcode).then(response =>{
            if(!response.ok){
                this.handleResponseError(response);
            }
            return response.json();
        }).then( data => {
            console.log(data);
            this.trains = data;
            return this.trains;
        });
    }

    async saveTrain(train) {
        return await fetch(this.uri+"/train", {
            method:"POST",
            mode:"cors",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(train)
        }).then(response => {
            if(!response.ok) {
                this.handleResponseError(response);
            }
            return response.json();
        }).catch(error => {
            console.log(error.message); 
        });
    }

    async updateTrain(train){
        return await fetch(this.uri+"/train",{
            method:"POST",
            mode:"cors",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(train)
        }).then(response=>{
                if(!response.ok){
                    this.handleResponseError(response);
                }
                return response.json();
            }).catch(error => {
                console.log(error.message);
            });
    }

    async deleteTrain(tcode){
        return await fetch(this.uri+"/train/"+tcode, {
            method:"DELETE", 
            mode:"cors"
        }).then(response => {
            if(!response.ok) {
                this.handleResponseError(response);
            }
            return response.json();
        }).catch(error => {
            console.log(error.message); 
        });
    }
}