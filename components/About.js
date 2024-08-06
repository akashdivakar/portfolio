 import AboutImg from "../img/about.png";
 
 export default function About(){
  return <section id="About" className="flex flex-col md:flex-row bg-secondary">
   <div className="md:w-1/2">
  
    <img src={AboutImg}/>
  </div>
  <div className="md:w-1/2  flex  justify-center text-white">
  <div className=" flex flex-col justify-center"> 
    <h1 className='text-4xl border-primary border-b-4 mb-5 w-[170px] font-bold pt-5'>About me</h1 >
    <p className='pb-5' >Some Information about myself</p>
    <p className='pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem obcaecati nulla tempora sequi. Pariatur atque aut, nisi beatae maiores perspiciatis a dolorum officiis expedita, veritatis recusandae quibusdam quasi quod ducimus?</p>
    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque similique eius expedita laborum quo aperiam architecto veritatis. At, voluptatum.</p>
    </div>
  </div>
  </section>
 

}