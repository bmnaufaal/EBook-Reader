import { useState } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../../helpers/notify";

export default function AddBookPage() {
  const navigate = useNavigate();

  const [addBookForm, setAddBookFrom] = useState({
    filePath: null,
  });

  const changeAddBookForm = (event) => {
    setAddBookFrom(event.target.files[0])
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('filePath', addBookForm);
    console.log(formData)
    fetch("http://localhost:3000/books/add", {
      method: "POST",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
      body: formData,
    })
      .then(async (response) => {
        if (!response.ok) throw await response.json();
        return response.json();
      })
      .then((data) => {
        navigate("/");
        notify("Success Add Movie");
      })
      .catch((error) => {
        console.log(error);
        notify(error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleAddBook}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">BOOK PDF</span>
                  </label>
                  <input
                    type="file"
                    name="filePath"
                    className="file-input file-input-bordered w-full max-w-xs"
                    onChange={changeAddBookForm}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
