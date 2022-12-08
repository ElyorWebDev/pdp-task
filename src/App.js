
import './App.css';
import Navbar from './components/navbar/navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Showcase from './components/showcase/showcase';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';
import Section3 from './components/section3/section3';
import Section4 from './components/section4/section4';
import Data4 from "./components/section4/data4.json"
import Section5 from './components/section5/section5';
import Section6 from './components/section6/section6';
import Section7 from './components/section7/section7';
import Section8 from './components/section8/section8';
import Section9 from './components/section9/section9';
import Section10 from './components/section10/section10';
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App container">
       <div className='navbarfix'>
         <Navbar/>
       </div>
       
       <Showcase/>
       <Section1/>
       <Section2/>
       <Section3/>
       <div className='cardmap'>
          {
            Data4.map((item,index)=>{
              return <Section4 text={item.text} kurs={item.kurs} company={item.company} key={index}/>
            })
          }
       </div>
       <Section5/>
       <Section6/>
       <Section7/>
       <Section8/>
       <Section9/>
       <Section10/>
       <Footer/>

       
      
     
    </div>
  );
}

export default App;
