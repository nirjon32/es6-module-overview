import React, { useEffect, useState } from "react";
import Card from "./article-card";
import Heading from "./article-heading";
const Articles = () => {
  const [images, setimages] = useState([]);
  const [articles,setarticles]=useState([]);
  
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=30")
      .then((response) => response.json())
      .then((data) => setimages(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() =>{

        fetch("https://jsonplaceholder.typicode.com/posts")
       .then((response) => response.json())
       .then((data) => setarticles(data))

  }, []);
  
  return (

    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4  place-content-center max-w-[1216px] mx-auto ">
       <Heading article={articles}></Heading>
      {images.map((image,index) => (
        
       <div>

         <Card key={image.id} image={image}> </Card>
         
        
       </div> 
      ))}
      
    </div>
  );
};

export default Articles;
