// import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav} from 'react-bootstrap'
import Game from './pages/Game';
import Daily from './pages/Daily';
import Main from './pages/Main';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className='logo'>DuSyde Gaming</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href='/game'>Game</Nav.Link>
              <Nav.Link href="/daily">Daily</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    <Routes>
      <Route path="/" element={ <Main/> } />
      <Route path="/game" element={ <Game/> } />
      <Route path='/daily' element={<Daily/>}></Route>
    </Routes>
    
    <div className="footer">
      <div className='footer-l'>
       <div>주인장 : DuSyde</div> 
       <div>developer : psy</div>
       <div style={{display:'flex'}}>
        <div style={{marginLeft:'2em'}}>
           image by :
        </div>
         <div className='image-by'>
           <div><a href="https://www.freepik.com/">FreePik</a></div>
           <div><a href="https://www.pexels.com/ko-kr/">pexels</a></div>
           <div><a href="https://unsplash.com/ko">unplash</a></div>
         </div>
       </div>
      </div>
      <div className='footer-r' style={{marginRight:'50px'}}>
        <div style={{display:'flex'}}>
          <div style={{alignItems:'center'}}>
            other blog : 
          </div>
          <div className='other-blog'>
           <div><a href="https://m.blog.naver.com/dusyde?noTrackingCode=true&proxyReferer=/">과거의 천년 나무 성채</a></div>
           <div><a href="https://m.blog.naver.com/antallion?noTrackingCode=true&proxyReferer=">안탈리온의 신전</a></div>
           <div><a href="https://m.blog.naver.com/lostlize?noTrackingCode=true&proxyReferer=">제이너스의 꿈</a></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
