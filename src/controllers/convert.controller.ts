// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import {get, post, requestBody} from '@loopback/rest';

export class ConvertController {
  //@get('/hello')
  
  @post('/json2csv')
  
  pay(@requestBody() json2csv:any){
    //payment.status = "success";
    //console.log(payment)
    //convert2csv(json2csv)
    //console.log(convert2csv(json2csv))
    return convert2csv(json2csv)
  }

}
var str:any="";
var str1:any="";
var str2:any="";

function convert2csv(json2csvobj : any){  

  for(var a in json2csvobj){
    console.log(a)
    
    if(typeof json2csvobj[a] == "object"){
      str2+=a+"_"
      
      convert2csv(json2csvobj[a])
      
    }
    else{
      str1=str1+str2+a+","
      console.log(str1);
      str+=json2csvobj[a]+","
    }
  }
  
  return {"headers":str1,"values":str};
}
