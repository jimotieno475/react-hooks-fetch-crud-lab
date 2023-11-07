
import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [items, setItems] = useState([]);

  function handleAddItems(addedItem){
      const add = [...items, addedItem]
      setItems(add)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAdd={handleAddItems} /> : <QuestionList items={items} setItems={setItems} />}
    </main>
  );
}

export default App;