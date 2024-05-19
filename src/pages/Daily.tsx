import { Image } from "react-bootstrap"
import React,{useState} from "react";
import './../asset/daily.css'

interface DailyProps{
    poster: string;
    title: string;
}

const  Daily : React.FC = ()=>{


    const [title] = useState<string>('asdsa')
    const [poster] = useState<string>('https://images.pexels.com/photos/42415/pexels-photo-42415.jpeg?auto=compress&cs=tinysrgb&w=800');

    return (
        <>
        <div className="daily-bg">
        </div>
        <div className="d-main-title" style={{width:'80%', margin: '2em auto', borderBottom:'1px solid dark grey', textAlign:'center'}}>
            <h1>일상을 훔쳐보지 마! </h1>
        </div>
        <div className="container">
            <div className="d-list-container">
            <DList title={title} poster={poster}></DList>
            <DList title={title} poster={poster}></DList>
            <DList title={title} poster={poster}></DList>
            <DList title={title} poster={poster}></DList>
            <DList title={title} poster={poster}></DList>
            <DList title={title} poster={poster}></DList>
            </div>
        </div>
        </>
    )
}

const DList: React.FC<DailyProps> = (props) => {
    return (
        <>
        <div className="d-list">
         <div className="d-image" >
          <Image className="d-img" src={props.poster}/>
         </div>
         <div className="d-title">
          <p>{props.title}</p>
         </div>
        </div>
        </>
    );
  }
  


export default Daily