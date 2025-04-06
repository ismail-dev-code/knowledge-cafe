import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0)



  const handleBookMark = (blog)=>{
    setBookmarked([...bookmarked, blog])
  }
  // console.log(bookmarked);


  const handleMarkAsRead = (time, id) => {
    const newTime = readingCount+time;
    setReadingCount(newTime)
    handleRemoveFromBookmark(id);
  }

const handleRemoveFromBookmark =(id)=>{
    const remainingBookmark = bookmarked.filter((mark)=>mark.id!==id);
    setBookmarked(remainingBookmark)
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex">
        <div className="left-container w-[70%] ml-5">
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%] text-center">
          <h1>Reading time: {readingCount}</h1>
          <h1>Bookmarked count: {bookmarked.length}</h1>
            <div className="bg-gray-100 p-2.5 mx-8 space-y-4 mt-2.5 rounded-lg shadow">
            {
              bookmarked.map((marked)=><li className="bg-white p-2 rounded-md" key={marked.id}>{marked.title}</li>)
            }
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
