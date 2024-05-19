import Image from 'react-bootstrap/Image';
import React,{useState} from 'react';

function Main() {
  const [card] = useState([
    'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5739121/pexels-photo-5739121.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/7095506/pexels-photo-7095506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ]);

  return (
    <>
      <div className='top-area'>
        <div className='text-area'>
          <div className='main-title'>
            <h1>DuSyde<br />Gaming</h1>
            <p>
              다양한 장르의 게임들의 플레이 방식과 컨텐츠들을 소개하고
              <br /> 게임 플레이의 해결 방안을 제시합니다.
            </p>
            <div className='btn-area'>
              <a href='/game' className='game-btn'>
                바로가기
              </a>
            </div>
          </div>
        </div>
        <div className='image-area top-image-area'>
          <Image src='/image/main1.png' alt='main-image' className='main-image' />
        </div>
      </div>

      <div className='daily-area'>
        <div className='text-area'>
          <h2>게임 블로거의 일상</h2>
          <p>음식 운동 음악에 대한<br/>블로거의 이야기를 들을 수 있습니다</p>
        </div>
        <div className='daily-image-area'>
          {card.map((image, index) => (
            <Image src={image} key={index} className='card-image' />
          ))}
        </div>
        <div>
          <a href='/daily' className='game-btn daily-btn'>
            바로가기
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;
