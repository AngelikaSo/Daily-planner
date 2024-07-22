import Note from "./Note";

const NotesComponent = () => {
  const notesTitle = ["Ideas", "Challenges", "Affirmations"];

  return (
    <div className="notesContainer">
      {notesTitle.map((title, index) => (
        <Note key={index} title={title} />
      ))}
    </div>
  );
};

export default NotesComponent;
