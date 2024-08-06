
import ResumeImg from "../img/resume.jpg";
export default function Resume(){
  const property={
    link:'file:///C:/Users/AUSU/Desktop/resume%20.pdf'
  }
  return(
    <section id="Resume" className="flex flex-col md:flex-row bg-secondary">
   <div className="md:w-1/2 flex justify-center md:justify-end">
  
    <img className="w-[500px] h-[500px] py-5 " src={ResumeImg}/>
  </div>
  <div className="md:w-1/2  flex  justify-center text-white">
  <div className=" flex flex-col "> 
    <h1 className='text-4xl border-primary border-b-4 mb-5 w-[170px] font-bold pt-5'>Resume</h1 >
    <p className='pb-5' >you can view my resume <a className="btn" href={property.link}>Download</a></p>
    
    </div>
  </div>
  </section>
 

  )
}