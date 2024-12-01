import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(response => response.json())
      .then(data => {
        const posts = data.data.children;
        setData(posts.map(post => {
          return {
            title: post.data.title,
            selfText: post.data.selftext,
            URL: post.data.url,
            score: post.data.score,
            created: post.data.created,
            author: post.data.author,
          }
        }))
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <div className="w-screen h-screen md:flex items-center justify-center">
      <div className="w-full h-full md:w-[1280px] md:h-[720px] rounded-md shadow-md border-t border-zinc-300 p-4 overflow-x-hidden overflow-y-scroll">
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((val, id) => (
            <Card
              key={id}
              description={val.selfText}
              URL={val.URL}
              title={val.title}
              score={val.score}
              time={val.created}
              author={val.author}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
