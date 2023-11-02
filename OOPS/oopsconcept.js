console.log("working fine");

const grandFatherObj = {
    house : "GrandFather House",
    getHouse: function() {
        console.log(this.house);
    },
    fatherObj : {
        house: "Father House",
        getHouse: function(){
            console.log(this.house);
            
        },
        getDetails : ()=>{
            console.log(this.house);
        } 
        
    },
    
    };

    grandFatherObj.fatherObj.getHouse();
