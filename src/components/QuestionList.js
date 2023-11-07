
import {useEffect} from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({items, setItems}) {

  useEffect(() => {
    fetch("http://localhost:3000/questions")
    .then(res => res.json())
    .then(data => setItems(data)) 
  },)

  function deleteItem(deletedItem){
    const deleted = items.filter((item) => {
      return item.id !== deletedItem.id
    })

    setItems(deleted)
  }

  function updatedItem(updateItem){
    const updated = items.map((item) => {
      if(item.id === updateItem.id){
        return updateItem
      }else{
        return item
      }
    })

    setItems(updated)
  }


  const list = items.map((item) => {
    return <QuestionItem question={item} key={item.id} onDelete={deleteItem} onUpdate={updatedItem} />
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{list}</ul>
    </section>
  );
}

export default QuestionList;