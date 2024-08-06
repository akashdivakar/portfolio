import Heroimg from '../img/hero.png';
import { FaTwitter,FaFacebook,FaLinkedin } from "react-icons/fa";
export default function Hero(){
  const property={

      details:'Im a full-stack developer I am proficient in React',
      socials:{
        twitter:'https://www.google.com/search?gs_ssp=eJzj4tLP1TfIyDMsS05XYDRgdGDwYi8pzywpSS0CAFnOB00&q=twitter&rlz=1C1UEAD_enIN1089IN1090&oq=tittwer&gs_lcrp=EgZjaHJvbWUqFQgBEC4YChiDARjHARixAxjRAxiABDIGCAAQRRg5MhUIARAuGAoYgwEYxwEYsQMY0QMYgAQyDwgCEAAYChiDARixAxiABDIPCAMQABgKGIMBGLEDGIAEMg8IBBAAGAoYgwEYsQMYgAQyDwgFEAAYChiDARixAxiABDIMCAYQABgKGLEDGIAEMgYIBxAFGEDSAQg3NjI4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8',
        fackbook:'https://www.google.com/search?gs_ssp=eJzj4tLP1TfIyK1MKy5TYDRgdGDw4khLTE5Nys_PBgBmYAfL&q=facebook&rlz=1C1UEAD_enIN1089IN1090&oq=fack&gs_lcrp=EgZjaHJvbWUqFQgBEC4YChiDARjHARixAxjRAxiABDIGCAAQRRg5MhUIARAuGAoYgwEYxwEYsQMY0QMYgAQyDwgCEAAYChiDARixAxiABDIJCAMQABgKGIAEMgcIBBAAGIAEMgkIBRAAGAoYgAQyDwgGEC4YChjHARjRAxiABDIGCAcQBRhA0gEINDUwOGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
        insta:'https://www.google.com/search?q=linkedin&sca_esv=495fc87c0ba59a8e&rlz=1C1UEAD_enIN1089IN1090&sxsrf=ADLYWIJ3HCTCh3N0g2RmZ82xZOuhHW7_9A%3A1719166674561&ei=0mZ4Zt_5IZuE4-EPqMOu8As&oq=link&gs_lp=Egxnd3Mtd2l6LXNlcnAiBGxpbmsqAggAMgoQIxiABBgnGIoFMhMQLhiABBixAxjRAxhDGMcBGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMhAQLhiABBhDGMcBGIoFGK8BMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMg0QABiABBixAxhDGIoFMggQABiABBixA0iGKlDiFVidHHABeAGQAQCYAXWgAaIDqgEDMS4zuAEByAEA-AEBmAIFoALmA6gCEsICDRAuGNEDGMcBGCcY6gLCAgcQIxgnGOoCwgIUEAAYgAQY4wQYtAIY6QQY6gLYAQHCAhAQLhiABBjRAxjHARgnGIoFwgIEECMYJ8ICEBAAGIAEGLEDGEMYgwEYigXCAg4QLhiABBixAxiDARjUAsICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAhAQLhiABBjRAxhDGMcBGIoFwgIKEC4YgAQYQxiKBZgDGroGBggBEAEYAZIHAzEuNKAHvjQ&sclient=gws-wiz-serp'

      }
  }
  return <section id="Hero" className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className="md:w-1/2 flex-col" >
    <h1 className=" text-white text-6xl font-hero ">Hi,<br/><span className="text-black">Im R Divakar</span><p className="text-2xl">{property.details}</p></h1>
    <div className='flex py-10'>
      <a target="_blank" href={property.socials.twitter} className='pr-5 hover:text-white'><FaTwitter size={30}/></a>
      <a target="_blank"  href={property.socials.fackbook} className='pr-5 hover:text-white'><FaFacebook size={30}/></a>
      <a target="_blank"  href={property.socials.insta}className='hover:text-white' ><FaLinkedin size={30}/></a>
    </div>
    </div>
    
    <img className=" md:w-1/3" src={Heroimg}/>;
    
  </section>
}