import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext"

const Noteitems = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2 my-2">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fas fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted successfully", "success")}}></i>
            <i className="fa fa-pencil-square-o mx-2" onClick={()=>{updateNote(note); }}></i>
          </div>
          <p className="card-text">{note.description}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  );
};

export default Noteitems;
