function difsum(a,b){
let total=0;
            let ta=[];
            for(let i=0;i<a.length;i++){
            console.log("helloooo");

    if (!b.includes(a[i])){
ta.push(a[i]);

    }}
for (let j=0;j<b.length;j++){
if(!a.includes(b[j])){

ta.push(b[j]);

}}
for (let x=0;x<ta.length;x++){
    total=total+ta[x];
}
    
return total;

}

let tab =[1,2,3,4]

let tab2=[1,22,3,44]


console.log(difsum(tab,tab2));





function sum(a,b){
    let total=0;
                let ta=[];
                for(let i=0;i<a.length;i++){
                console.log("helloooo");
    
        if (b.includes(a[i])){
    ta.push(a[i]);
    
        }}
    for (let j=0;j<b.length;j++){
    if(a.includes(b[j])){
    
    ta.push(b[j]);
    
    }}
    for (let x=0;x<ta.length;x++){
        total=total+ta[x];
    }
        
    return total;
    
    }
    
    let tab =[1,2,3,4]
    
    let tab2=[1,22,3,44]
    
    
    console.log(sum(tab,tab2));
    
    
    
    
    
    