import React, { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers/";

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });
    setTitle("");
    setbody("");
  };

  console.log(state);

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            style={{ resize: "none" }}
            value={body}
            onChange={(e) => setbody(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={addEvent}>
          イベントを作成する
        </button>
        <button className="btn btn-danger">全てのイベントを作成する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default App;
