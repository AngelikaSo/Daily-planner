import Note from "./Note";

const NotesComponent = () => {
  const notesTitle = ["Ideas", "Challenges", "Notes"];

  return (
    <div className="notes">
      {notesTitle.map((title, index) => (
        <Note key={index} title={title} />
      ))}
    </div>
  );
};

export default NotesComponent;
