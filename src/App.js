import "./App.css";
import Navbar from "./Componants/navbar";
import Display from "./Componants/display";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // console.log(searchInput);

  async function getDefaultData() {
    const res1 = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
    );

    const res2 = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"
    );

    setData([...res1.data.items, ...res2.data.items]);
  }

  useEffect(() => {
    getSearchResult();
  }, [searchInput]);

  async function getSearchResult() {
    if (searchInput.length > 1) {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
      );
      setData(res.data.items);

    }
    // document.body.scrollTop = 0;
  }

  useEffect(() => {
    getDefaultData();
  }, []);

  return (
    <div className="App">
      <Navbar setSearchInput={setSearchInput} />
      <Display data={data} />
    </div>
  );
}

export default App;
