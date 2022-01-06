const express = require("express");

let note = [
  { id: 1, body: "We have a text" },
  { id: 2, body: "This is a second text" },
];
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("notes", {
    note: note,
  });
});

app.post("/addNotes", (req, res) => {
  const userNote = {};
  // userNote.id = Math.random() * 100;
  userNote.id = note.length + 1;
  userNote.body = req.body.newNote;
  note.push(userNote);
  res.redirect("/");
});

app.post("/deleteNote/:id", (req, res) => {
  const deleteNotes = note.filter((item) => item.id != req.params.id);
  note = deleteNotes;
  return res.redirect("/");
});

app.post("/updateNote/:id", (req, res) => {
  res.render("update");
  console.log("1", req.body.up);
  console.log("A",  req.params);
  const { id } = req.params;
  console.log(id);
  const { up } = req.body;
  console.log(up);
   
  let index = note.findIndex((x) => x.id === parseInt(id));
  console.log(index)
  console.log(note);
  note[index].body=up;
  console.log(note);
  // //return res.redirect("/");
});

app.post("/searchit", (req, res) => {
  const searchNote = note.filter(
    (item) => item.id === parseInt(req.body.search)
  );
  res.send(searchNote);
  // res.render("notes", {
  //   searchNote: searchNote
  // });
});

app.listen(5000, () =>
  console.log("NoteApp server is running at port 5000...")
);
