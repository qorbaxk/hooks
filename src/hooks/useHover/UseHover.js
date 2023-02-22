import { useEffect, useRef } from 'react';

const UseHover = (onHover) => {
  const element = useRef();

  useEffect(()=>{
    if(element.current){
      element.current.addEventListener("mouseenter",onHover);
    }
    return () =>{
      if(element.current){
        element.current.removeEventListener("mouseenter",onHover);
      }
    }
  },[]);
  return typeof onClick !== "function" ? undefined: element;
}

export default UseHover