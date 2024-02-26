const API_KEY = 'AIzaSyCaxY-KXB4XDuYaP4Pzyc8A5SA1PbD0IOk' ;

const value_converter = (value) => {
    
    if(value >= 1000000 ){
        return Math.floor(value/1000000)+"M";
    }
    else if(value >= 1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value ;
    }
        
}



export default API_KEY ; 
export {value_converter} ;
