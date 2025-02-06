import "./Animation.css";
 function Animation() {
    var arrey =[
        {name:"atefeh",gender:"female"},
        {name:"ali",gender:"male"},
        {name:"zahra",gender:"female"},
        {name:"atefeh",gender:"female"},
        {name:"reza",gender:"male"},
        {name:"atefeh",gender:"female"},
        {name:"hasan",gender:"male"},
        {name:"atefeh",gender:"female"},
    ]
  
    function filter(list){
        var Female=[];
        var Male=[];
        for(var index=0; index<list.length;index+=1){
            if(list[index].gender==="female"){
                Female.push(list[index])
            }else{
                Male.push(list[index])
            }
           
        }
        console.log("female:" ,Female);
        console.log("male:" ,Male);
        
    }
    filter(arrey);
    return(
        <>
        
        <div className="box"></div>

        </>
    )
 }


 export default Animation;;