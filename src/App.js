import './App.css';
import Banner from './components/Banner/Banner';
import Bottom from './components/Bottom/Bottom';
import Cources from './components/Courses/Cources';
import Footer from './components/Footer/Footer';
import FooterTop from './components/FooterTop/FooterTop';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import StemCourse from './components/StemCourses/StemCourse';
// import StemCources from './components/StemCourses/StemCources';


function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <Main/>
    <Cources />
    {/* <StemCources /> */}
    <StemCourse />
    <Bottom />
    <FooterTop />
    <Footer />
   
    
    
    </>
  );
}

export default App;
