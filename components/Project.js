import web from "../img/website-blog.jpg";
import food from "../img/food-ecommerce.jpg";
import ecom from "../img/ecommerce-websites.jpg";

export default function Project(){

  return(<section id="Project" className="flex flex-col  px-8 py-5 justify-center bg-primary text-white">
    <div className=' w-full'>
    <div className='flex flex-col py-5'>
    <h1 className="text-4xl border-secondary border-b-4  mb-5 w-[150px] font-bold pt-5">Projects</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, reprehenderit!</p>
    </div>
    </div>
    
    <div className='w-full '>
    <div className='flex flex-col md:flex-row gap-5 px-5'>
      <div className="relative">
<img className=' h-[400px]  w-[500px]' src={web}/>
<div className="hovereffect">
  <p className="text-center px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vel accusamus? Odio magnam dolor excepturi, magni incidunt doloribus amet officia!</p>
</div>
     </div>
     <div className="relative">
<img className='h-[400px] w-[500px]'src={food}/>
<div className="hovereffect">
  <p className="text-center px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta neque repudiandae doloremque illo non.</p>
</div>
     </div>
     <div className="relative">
<img className='h-[400px] w-[500px]'src={ecom}/>
<div className="hovereffect">
  <p className="text-center px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eligendi!</p>
</div>
    </div>
</div>
    </div>
  </section>)

}