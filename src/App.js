import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateArea from "./Components/CreateArea";
import Note from "./Components/Note";

function App() {
  const [item,setItems] = useState([])

  const addNote = (note) =>{
    setItems((prev)=>{
      return [...prev,note];
    })
    
  }

  const handleClick = (id) =>{
    setItems((prev)=>{
      return prev.filter((item,index)=>{
        return  index !== id;
      })
    })
  }

  return (
    <>
      <Header />
        <CreateArea addNote={addNote} />
        <div className="notes">
          {item.map((items,index)=>{
            return <Note handleClick={handleClick} title={items.title} desc={items.content} key={index} id={index} />
          })}
        </div>
      <Footer />
    </>
  );
}

export default App;
