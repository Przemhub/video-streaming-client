import { useState } from "react";
const AddMovie = () => {
  const [file, setFile] = useState(null);
  const [movieName, setMovieName] = useState("");
  const [description, setDescription] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    setMovieName(droppedFile.name);
  };

  const handleInputChange = (e) => {
    setMovieName(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileToSend = new File([file], movieName + ".mp4");
    const formData = new FormData();
    formData.append("video", fileToSend);
    const request = new XMLHttpRequest();
    request.open("POST", `/film/?description=${description}`);
    request.send(formData);
    setMovieName("");
    setFile(null);
    setDescription("");
  };

  return (
    <div className="bg-dark text-white vstack gap-2 p-3">
      <h1>Add Film</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="hstack gap-5 mx-5 p-2">
            <label className="mx-2 px-5" htmlFor="movieName">
              Movie Name
            </label>
            <input
              type="text"
              className="form-control mx-4"
              id="movieName"
              value={movieName}
              onChange={handleInputChange}
            />
          </div>
          <div className="hstack gap-5 mx-5 p-2">
            <label className="mx-3 px-4" htmlFor="description">
              Movie Description
            </label>
            <textarea
              className="mx-4 py-4 px-5 form-control"
              name="Text1"
              cols="50"
              rows="5"
              value={description}
              onChange={handleInputChange2}
            ></textarea>
          </div>
        </div>

        <div
          className="drop-container mx-5 my-3 py-5 bg-light text-dark"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          Drop your movie file here
        </div>
        {file && <p>Selected File: {file.name}</p>}
        <button type="submit" className="btn btn-light  m-3 px-5 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
