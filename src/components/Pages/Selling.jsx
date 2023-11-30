import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "./firebase-config";
//import "./App.css";

export default function Writer({ auth }) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  //const [todo, setTodo] = useState("");
  const [uploadPicture, setUploadPicture] = useState(null);
  const [todos, setTodos] = useState([]);
  const [lastId, setLastId] = useState();

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(firestore, "todos"), {
        itemName: itemName,
        itemPrice: itemPrice,
        itemDescription: itemDescription,
        uploadPicture: uploadPicture,
      });
      setLastId(docRef.id);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      const querySnapshot = await getDocs(collection(firestore, "todos"));
      const result = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(result);
    };

    console.log("Fetching data...");
    fetchPost();
  }, [lastId]);

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Writer {auth ? "AUTH" : "unauth"}</h1>

        <div>
          <div>
            <input
              type="text"
              placeholder="Item Name"
              onChange={(e) => setItemName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Item price"
              onChange={(e) => setItemPrice(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Item desription"
              onChange={(e) => setItemDescription(e.target.value)}
            />
          </div>
          <div>
            upload you item image
            {uploadPicture && (
              <div>
                <img
                  alt="not found"
                  width={"250px"}
                  src={URL.createObjectURL(uploadPicture)}
                />
                <br />
                <button onClick={() => setUploadPicture(null)}>Remove</button>
              </div>
            )}
            <br />
            <input
              type="file"
              name="myPicture"
              onChange={(event) => {
                console.log(
                  event.target.files[0],
                  setUploadPicture(event.target.files[0])
                );
              }}
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Submit
            </button>
          </div>
        </div>

        <div className="todo-content">
          <ul>
            {todos?.map((todo) => (
              <li key={todo.id}>
                {todo.itemName}
                {todo.itemPrice}
                {todo.itemDescription}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
