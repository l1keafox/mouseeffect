import { useEffect,useState } from 'react';
import './App.css';
import {BsArrowUpRight,BsFillPlayFill} from 'react-icons/bs';
function App() {

  const [icon,setIcon] = useState(null);
  // 

  function getComponentClass(type){
    switch(type){
      case "video":
        setIcon(<BsFillPlayFill/>);
        break;
      case "link":
        setIcon(<BsArrowUpRight/>);
        break;
      default:
        setIcon(null);
        break;

    }
  }
  function animeTrailer(e,interacting){
    const trailer = document.getElementById("trailer");
    
      const x = e.clientX - trailer.offsetWidth/2;
      const y = e.clientY - trailer.offsetHeight/2;;
      const keyFrames = {
        transform : `translate(${x}px, ${y}px) scale(${interacting? 5 :1})`
      }

      trailer.animate(keyFrames,{
        duration:800,
        fill: "forwards"
      });
  }
  useEffect(() => {
    window.onmousemove = e =>{
      const interactable = e.target.closest(".interactable");
      const interacting = interactable !== null;
      animeTrailer(e,interacting);
      if(interacting){
        getComponentClass(interactable.dataset.type);
      } else  {
        setIcon(null);
      }

    }

  }, []);


  return (
    <div className="App" >
      <div id="trailer">
        {icon}
      </div>
      <div className="interactable" id="first" data-type="link"></div>
      <div className="interactable" id="second"  data-type="video"></div>

    </div>
  );
}

export default App;
