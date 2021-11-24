//import Library
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
//import Library in local vendors
//1.bootstrap
import './vendors/bootstrap/css/bootstrap.min.css';
//2.override one with black background
import './vendors/bootstrap/bootstrap.min.css';
//3.fontawesome
import './vendors/fontawesome-pro/css/all.css';
//4. import react component
import A6 from "./components/a6/HelloWorld";
import HelloA6 from "./components/a6/HelloWorld";
import A6Practice from "./components/a6/Practice";
import A6ExploreScreen from "./components/a6/Build/ExploreScreen";
import A6HomeScreen from "./components/a6/Build/HomeScreen";
import A7 from "./components/a7/Build";
import A7Practice from "./components/a7/Practice";
import A7ExploreScreen from "./components/a7/Build/ExploreScreen";
import A7HomeScreen from "./components/a7/Build/HomeScreen";
import HelloA7 from "./components/a7/HelloWorld";


// import logo from './logo.svg';
import './App.css';



// import {Provider} from "react-redux";




function App() {
  return (
      <div className="container">
          <BrowserRouter>
              <HelloA6/>
              <Routes>
                  {/*<Route path="/hello" element={<HelloWorld/>} />*/}
                  <Route path="/a6" element={<A6ExploreScreen/>} />
                  <Route path="/a6/practice" element={<A6Practice/>}/>
                  <Route path="/a6/twitter" element={<A6ExploreScreen/>}/>
                  <Route path="/a6/twitter/explore" element={<A6ExploreScreen/>}/>
                  <Route path="/a6/twitter/home" element={<A6HomeScreen/>}/>
              </Routes>
              <HelloA7/>
              <Routes>
                  <Route path="/a7" element={<A7ExploreScreen/>} />
                  <Route path="/a7/practice" element={<A7Practice/>}/>
                  <Route path="/a7/twitter" element={<A7ExploreScreen/>}/>
                  <Route path="/a7/twitter/explore" element={<A7ExploreScreen/>}/>
                  <Route path="/a7/twitter/home" element={<A7HomeScreen/>}/>

              </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;
// test
// <BrowserRouter>
//     <div className="container">
//         <HelloWorld/>
//         <Practice/>
//         <Build/>
//
//     </div>
// </BrowserRouter>

// assignment provided code: doesn't work on latest version (can't sync on Netlify)
// <BrowserRouter>
//     <div className="container">
//         <Route path="/a6/hello">
//             <HelloWorld/>
//         </Route>
//         <Route path="/a6/practice">
//             <Practice/>
//         </Route>
//         <Route path="/a6/build">
//             <Build/>
//         </Route>
//
//     </div>
// </BrowserRouter>


//worked but not required version
// <BrowserRouter>
//     <Routes>
//         <Route path="/a6/hello" exact={true} element={<HelloWorld />} />
//         <Route path="/a6/practice" element={<Practice />} />
//         <Route path="/a6/build" element={<Build />} />
//
//     </Routes>
// </BrowserRouter>


// latest tying work but not functional version
// <BrowserRouter>
//     <div className="container">
//
//         <Link to="/a6/practice">A6</Link> |
//         <Link to="/a7/practice">A7</Link> |
//         <Link to="/a8/practice">A8</Link>
//
//         {/*<Route path="/a9">*/}
//         {/*    <A9/>*/}
//         {/*</Route>*/}
//
//         {/*<Route path="/a6">*/}
//         {/*    <A6/>*/}
//         {/*</Route>*/}
//
//         {/*<Route path="/a7">*/}
//         {/*    <A7/>*/}
//         {/*</Route>*/}
//
//
//         {/*<Route path={["/", "/a7", "/a7/practice"]} exact={true}>*/}
//         {/*    <Practice/>*/}
//         {/*</Route>*/}
//         {/*<Route path="/a7/twitter">*/}
//         {/*    <Build/>*/}
//         {/*</Route>*/}
//     </div>
// </BrowserRouter>