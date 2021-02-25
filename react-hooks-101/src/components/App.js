import React, { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers/";
import Event from "./Event";

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

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm("全てのイベントを元に戻しても良いですか？");
    if (result) dispatch({ type: "DELETE_ALL_EVENTS" });
  };

  const unCreatable = title === "" || body === "";

  console.log(state.length);

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
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.length === 0}
        >
          全てのイベントを削除する
        </button>
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
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
