import react from 'react';

export function ViewTester(){

    useEffect(()=>{
        if(inView){
            controls.start("show");
            setValue(true)
            
        }else{
            controls.start("hidden")
            setValue(false) 
        }
    },[controls,inView]);
    return(
        
    )
}

