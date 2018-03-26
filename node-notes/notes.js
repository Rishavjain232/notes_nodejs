const fs=require('fs');
console.log("Starting Notes.js...");

// module.exports.add=function(a,b){    ///we have written this becz we want that it can be available to and other file
//                                      //we dont require to write function(var a,var b)
//                                      ///there will be an error if u wright this ;
//   return a + b;
// };
// // another way of writting the above thing is as
//
// module.exports.add=(a,b)=>{
//   return a+b;
// };
var fetchNotes=()=>{
  try{
    return JSON.parse(fs.readFileSync('Notes.json'));
  }catch(e){
      return [];
  }
};
var saveNote=(notes)=>{
  fs.writeFileSync('Notes.json',JSON.stringify(notes));
};

var addNotes=(title,body) =>{
  var notes=fetchNotes();
  var note={
    title,
    body
  };
      var duplicate=notes.filter((note) =>{
        return note.title===title;
      });
      if(duplicate.length===0){
          notes.push(note);
          saveNote(notes);
          return note;
      }
};           ///addNotes got finished here and js  default return type in js is undefined
            ///so to check at the time of called function that whether it has sended  somthing or not
            ///we just see that if(typeof return_value !=undefined){}else{}
var readNote=(title)=>{
  var notes=fetchNotes();
  var filteredNotes=notes.filter((not)=>{
    if(not.title===title){console.log(not.body)};
  });

};
var allNotes=()=>{
  return fetchNotes();
};

var removeNote=(title)=>{
  var notes=fetchNotes();
  var notes_length=notes.length;
  var filteredNotes=notes.filter((not)=>{
    return not.title!=title;
  });
  if(filteredNotes.length!=notes.length){
  console.log(filteredNotes);
  saveNote(filteredNotes);
  return true;
}else{return false;}
};

module.exports={
  addNotes,
  readNote,
  allNotes,
  removeNote
};
