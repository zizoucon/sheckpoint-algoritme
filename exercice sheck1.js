
function nbre_mot(mot)
{
    mot2 = mot.split(" ");
    tr = mot2.length;
    if (tr==0){
      mott=  mot.length;
      return mott;
    }
    
    return tr;
}

const nbr_mot=(mot)=>{
mot2 = mot.split(" ");
tr = mot2.length;
if (tr==0){
mott=  mot.length;
return mott;
}

return tr;
}


console.log(nbre_mot("bonjour kemmouche zineb.")); 



function nbre_lettre(mot)
{
  //  mot2 = mot.split(" ");
    let tr=0;
    for(let i=0;i<mot.length;i++){
      if (mot[i]==" " || mot[i]=="."){
      
      }else{
tr++;
      }
      


    }
   
    return tr;
}


const nbre_lettre=(mot)=>{
  let tr=0;
  for(let i=0;i<mot.length;i++){
    if (mot[i]==" " || mot[i]=="."){

    }else{
     tr++;
    } } return tr;  }
console.log(nbre_lettre("bonjour kemmouche zineb.")); 
function nbre_voyelle(mot)
{

    let tr=0;
    for(let i=0;i<mot.length;i++){
      if (mot[i]=="a" || mot[i]=="o" || mot[i]=="e" || mot[i]=="u"|| mot[i]=="i" || mot[i]=="é"){
        tr++;
      }else{

      }
      


    }
   
    return tr;
}

const nbre_voyelle=(mot)=>{
  let tr=0;
  for(let i=0;i<mot.length;i++){
    if (mot[i]=="a" || mot[i]=="o" || mot[i]=="e" || mot[i]=="u"|| mot[i]=="i" || mot[i]=="é"){
      tr++;
    }else{

    }
    


  }
 
  return tr;
}
console.log(nbre_voyelle("bonjour kemmouche zineb.")); 

