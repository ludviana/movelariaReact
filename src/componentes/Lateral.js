export default function Lateral(props){
    
    let a = [];
    a.push(props.categoria);  
    let r = [];
    let s = a[0]

    for(let i = 0 ; i < s.length ; i++){
        if(!r.includes(s[i]))
        {
            r.push(s[i])
        }
    }   
    console.log(s);
    return(
        
        <div>
            <p>{s}</p>
        </div>
    );
};