function ps(a,b){
    let pss=0;
    let vr=[];
                let N=a.length;
                let N1=b.length;
                let I=0;
                if(N=N1){
                for(pss=0;I<N;I++){
                console.log("helloooo");
    pss=a[I]*b[I];
    vr.push(pss);
                }
    
            }
            return vr;
    }
    
    let tab =[1,2,3,4]
    
    let tab2=[1,22,3,44]
    let tab3 =[0,2,0,4]
    
    let tab4=[1,0,3,0]
    
    console.log(ps(tab,tab2));
    
    function orthogonaux(a,b){
        let sum=0
    
    
    
       let v= ps(a,b);
       for (let x=0;x<v.length;x++){
        sum=sum+v[x];
       }
    if (sum==0){
    console.log("oui");
    
    }else{
        console.log("non");  
    }
            
    }
    
    
    
    console.log(orthogonaux(tab,tab2));
    console.log(orthogonaux(tab3,tab4));