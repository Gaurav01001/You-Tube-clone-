
import './Sidebar.css'
import home from '../../assets/home.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import tech from '../../assets/tech.png'
import entertainment from '../../assets/entertainment.png'
import game_icon from '../../assets/game_icon.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


const link = [
  
  {img : home, text :"Home"},
  {img : automobiles, text :"Automobiles"},
  {img : sports, text :"Sports"},
  {img : tech, text :"Tech"},
  {img : entertainment, text :"Entertainment"},
  {img : game_icon, text :"Gaming"},
  {img : music, text :"Music"},
  {img : blogs, text :"Blogs"},
  {img : news, text :"News"},
]
const sub =[
  {img : jack, text :"Pewdiepie"},
  {img : simon, text :"Mister-Beast"},
  {img : tom, text :"Bhuvan-Bam"},
  {img : megan, text :"Ashish"},
  {img : cameron, text :"Nas-daily"},
]

const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${!sidebar && "small-sidebar"}`}>
      <div className="shortcut-links">
        {link.map((item, index)=>(
          <div className="side-link" key={index} onClick={()=>setCategory}>
            <img src={item.img} alt="" />
            <p>{item.text}</p>
          </div>
        ))}
        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        {sub.map((item, index) => (
          <div className="side-link" key={index}>
            <img src={item.img} alt="" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Sidebar
