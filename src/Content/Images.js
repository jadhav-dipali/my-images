import React, { useEffect, useRef, useState } from "react";
import "./images.css"

export default  function Images(){
  const [img , setImg] =useState([])

    function api (){
    return fetch(" http://localhost:3004/user")
     .then(res=>res.json());   
    }

    useEffect(()=>{
         api().then(data=>setImg(data));
    } ,[]);

    // console.log(img);

    let ele = useRef("");
    let elesecond = useRef("");
    let [style , setStyle] = useState({});

    function displayImage(data){
     ele.current.innerHTML=`<img src=${data.image} class="img"><img />`;
    setStyle({[data.id]:"divShadow"});
    }

    return<>

    <h1>!!!My Images App!!!</h1>

    <div id="frame" className="img" ref={ele} ><img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__480.jpg" className="img"></img></div>
    <div id="parent">
     {img.map((i,index)=>{
        return (
          <div key={index} id="img" ref={elesecond}  className={style[i.id]} >
              <img src={i.image} id="images" onClick={()=>{displayImage(i)} }  />
          </div>
        )
     })}
     </div>
    </>
}