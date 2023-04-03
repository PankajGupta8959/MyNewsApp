
import React, { Component } from 'react';
import Header from './Components/Header';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

class App extends Component {
  pageSize = "25"
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element= {<News key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route path='/business' element={ <News key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
            {/* <Route exact path='/entertainment' element= {<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path='/health' element={ <News key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exact path='/science' element= {<News key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route exact path='/sports' element={ <News key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route exact path='/technology' element= {<News key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route> */}
            </Routes>
        </BrowserRouter>


      </div>
    );

  }

}

export default App;
