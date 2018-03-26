// to comment we can use ctrl+forward / to comment and uncomment the line
//console.log("Starting Point!!!!!!!!!!!");

 const fs=require('fs'); //fs is an built in module and we used require method to get that module and saved into fs const
//                         ///not fs const  has everything of fs module now we can call any method which we have with fs module through
//                         ///fs
// const os=require('os'); ///again we have used require to get os module
//                         ///os module is also an built in module
//                         ///which have lot of function and we can call them using os const
 const _=require('lodash');        //using npm install (module_name) we can download some module which are not part of node js
                                  //but they are developed by developer and is well tested
                                  //so these are generally generic work which to avoid writting the code agaiin fr that
                                  //ganeric work we use the code which is already done by 3rd party
                                  //so lodash is that kind of module
                                  //and to use we used npm install lodash --save
      //generally we use _ as variable name for lodash module
const yargs=require('yargs');
const notes=require('./notes.js');   //yaha par hum require ka dusra use dekhe ki we can get some other file in our file for use
//                                       //apne file mai dusre ka file lane k liye hum require k andr path diye hai jo file humko
                                     //lana hai (relative path) yaha par (./) se we got currnet directory where app.js is
                                     ///and thn since notes.js is also on the same directory we can hust write that after(./) andr
                                     //ready withh relative path

// console.log(_.isString(1));    //isString is an api or function which is build under lodash
//                               ///which checks that given parameter is string or nOT
//                               //like in this case it will return false
// // console.log(_.isString(asdas));
// console.log(_.isString("Hello"));//in this case it will return true
// console.log(_.isString(true)); //in this case it will print fasle
//
// var filteredArray =_.uniq(["as","as",1,2,1,true]); ///phli baat to ye hai ki
//                                                     ///very imp I got to know ki we can have different data type in an array
//                                                     //in node js array or i guess this is same with javascript also
//                     //.uniq is also under lodash which takes array and return an array which
//                     //doesnot have any duplicate element
//                     //remove duplicate element simple !!!!!!
//
// console.log(filteredArray);
// // var ans=notes.add(9,-2); ///since in notes.js file add was a method which was written with export class
// //                           /// so we can easily call any function or someting whichh is there with exprot class
// //                           ///so we called add aaram se
// //                           ///export is child od module so module.export
// // console.log(ans);
// // var user=os.userInfo();
// // console.log(user);
// // fs.appendFileSync("greeting.txt",`hello ${user.username} !`);
//
//
//
//
//
// ///whenever we were changing something in our code or app
// //to see the changes we were in a need to restart the app in terminal using node app.js
// //BBUT BY USING NODEMON module whenever we are making any change in the text editor it is turant shown
// //on terminal without restarting
// //to do this
// //this time we run our app using nodemon app.js(like previously we were doing node.js)
// //it basically wait once the code has finished excuting
// //wait and see r we making any change
// //and as soon as we make any change it gets show in the terminal
// //and it is awake and to stop nodemon to keep on waiting and get back to normal thing we use ctrl+c
//
//to install nodemon was differnet from downloading lodash
//we used npm install nodemon -g(we used npm install lodash --save (flag)) //here g stand for global
//that is it has been downloaded in our machine and can be used for any project not only for here
//we use nodemon for developing very much when we are developing on local machine
///but when we deploy our app on server we dont use nodemon there
///anyway it is very useful when developing on local computer


const command=yargs.argv;
var input=command._[0];  //yargs jis tarike se readd karta hai commandlne ko is superb
console.log(input);     //jo bhi method kko aap call karna chahte ho we usko _ iss list k andr rakhta hai
                        //and baad baki ko wo key value k tarike se rakhta hai
                        //node app.js add --title html --body sikhlo
                        //_:[add],title:'html',body:'sikhlo'
                        //node app.js add --title="html" --body="sikhlo"
                        //_:[add],title='html',body='sikhlo'
                        //to yargs ka use isiliye kiye kyoki command line m input bahut tarike k sath aa sakta hai
                        //like title k baad = likh bbhi sakte hai aur nhi bbhi
                        //" "ye use kar bhi sakte the nhi bbhi
                        //process.argv m yahi dikat ho raha tha ki = use ar diye to array index alag ho jayega
                        //nhi kiye to alag
                        //so yargs kya kiya ki aap jaise marzi likho bass --title (-- is symbol k baad kuch bhi rahe )
                       //wo usko key value m daal deta hai = wagarah ka jhamela khtam
if(input=='add'){
  console.log("You requested Adding new notes");
  var returned_note=notes.addNotes(command.title,command.body);
  if(typeof returned_note !='undefined')
  {
    console.log("Added Note Successfully");
     console.log(`title ${returned_note.title} body =${returned_note.body}`);
  }
  else {
    console.log("Notes not got added the title might already exist");
  }
}
else if (input=='list') {

  console.log("Listing all files");
  var allNotes=notes.allNotes();
  for(var i=0;i<allNotes.length;i++){
    console.log("title:"+allNotes[i].title+" , body:"+allNotes[i].body);
  }

}
else if(input=='read'){

  console.log("Read a particular file");
  notes.readNote(command.title);
}
else if(input=='remove'){
  console.log("Removing a file");
  var remove_bool=notes.removeNote(command.title);
  if(remove_bool==true)
  {
    console.log("removed Successfully");
  }
  else {
    console.log("title doesnot exsist");
  }
}
else {
  console.log("no operation available of that name");
}
