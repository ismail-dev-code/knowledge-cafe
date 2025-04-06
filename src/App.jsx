import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmarked, setBookmarked] = useState([]);



  const handleBookMark = (blog)=>{
    setBookmarked([...bookmarked, blog])
  }
  console.log(bookmarked);

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex">
        <div className="left-container w-[70%] ml-5">
          <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>
        <div className="right-container w-[30%] text-center">
          <h1>Reading time: 0</h1>
          <h1>Bookmarked count: 0</h1>
            <div className="bg-gray-100 p-2.5 mx-8 space-y-4 mt-2.5 rounded-lg shadow">
            {
              bookmarked.map((marked)=><li>{marked.title}</li>)
            }
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
