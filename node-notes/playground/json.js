const fs=require('fs');
var obj={name:'Rishav',l_name:'Jain',age:24};
console.log(obj);
var obj_to_json=JSON.stringify(obj);
fs.writeFileSync("Json.json",obj_to_json);
console.log(typeof obj_to_json);
console.log(obj_to_json);
//var in_json='{"name":"Rishav","l_name":"jain","age":24}'; ///yaha par sirf aise likhte {"name":"Rishav","l_name":"jain","age":24}
                                                          //to error aata
                                                          ///ya "{}" kar deta to bhi error aata
                                                          ///matlab"{"name":"Rishav","l_name":"jain","age":24}"
                                                          //humko ' ' single wala hee use karna hoga
                                                          //basically ye string m hai
console.log("Now Reading json file");
var in_json=fs.readFileSync("Json.json");
console.log(typeof in_json);
var json_to_obj=JSON.parse(in_json);
console.log(typeof json_to_obj);
console.log(json_to_obj);


//so here we learnt two things
//obj vs json string
//we can convert to any of these by anyway
//obj->json string  use JSON.stringify(obj);
//if we wana again get back to obj of js from json string
//use JSON.parse(json_string);
//obj and json looks like same
//obj of js is very simple a variable which can store more than one value
//var obj={name:'rishav',age:24}
//json writting style is almost same
//with slight difference
//json k key mai bhi " " use karte hai
//and object m ' ' ye use hua tha value ki taraf but yaha " "
//when we will have to access any attribute we will need to change that into object
