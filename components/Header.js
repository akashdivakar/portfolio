
import { Bars3Icon } from '@heroicons/react/24/solid'
import React,{useState}from 'react';
export default function Header(){
  const [toggle,settoggle]=useState("");

  function update(){
    settoggle(!toggle);
    

  }

  return <header className="flex justify-between px-5 py-2 bg-primary" >
    <a className="font-bold text-black"href="#">portfolio</a>
    <nav className="hidden md:block">
    <ul  className="flex text-white" >
      <li><a href="/">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Project">Projects</a></li>
      <li><a href="#Resume">Resume</a></li>
      <li><a href="#Contact">Contact</a></li>
      
    </ul>
    </nav>
  
    <nav className="block md:hidden ">
   
   {toggle && <ul onClick={update}
    

   className=" flex-col text-white mobile-nav" >
      <li><a href="/">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Project">projects</a></li>
      <li><a href="#Resume">Resume</a></li>
      <li><a href="#Contact">Contact</a></li>
    </ul>}
    </nav>
    <button onClick={update}className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
  </header>
}