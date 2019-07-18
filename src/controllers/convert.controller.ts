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
function convert2csv(json2csvobj : any){  

  for(var a in json2csvobj){
    if(typeof json2csvobj[a] == "object"){
      convert2csv(json2csvobj[a])
    }
    else{
      str+=json2csvobj[a]+","
    }
  }
  
  return str;
}
