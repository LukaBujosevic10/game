import React,{useState,useEffect} from 'react';
import MainDisplay from './MainDisplay'
function App({d}) {
  const [drzave,promeniDrzave] = useState(); 
  const [tacna,setTacna] = useState();
  const provera = (val)=>{
        if(val=== drzave[tacna][0]){
          console.log("Correct");
        }else{
          console.log("Incorrect");
        }
        let drz;
      const proba = async()=>{
        drz = [];
      for (let i = 0; i < 3; i++) {
        let jednadrz = d[Math.floor(Math.random() * d.length)];
        drz.push(jednadrz);
      }
      }
      proba();
      setTacna(Math.floor(Math.random() * 3));
      promeniDrzave(drz)
  }
    useEffect(function(){
      let drz;
      const proba = async()=>{
        drz = [];
      for (let i = 0; i < 3; i++) {
        let jednadrz = d[Math.floor(Math.random() * d.length)];
        drz.push(jednadrz);
      }
      }
      proba();
      setTacna(Math.floor(Math.random() * 3));
      promeniDrzave(drz)
  },[d])
return(<MainDisplay tacna={tacna} drzave={drzave} provera={provera}/>)

}
export default App
