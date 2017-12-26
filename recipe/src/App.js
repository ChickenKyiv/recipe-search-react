import React, { Component } from 'react';
import './App.css'
const formFunction =()=>{

}

class App extends Component {
  render() {
    return (
    <div>
     
      <nav className="navbar navbar-light" style={{background: "#ac6ace"}}>
     
        <a className="navbar-brand" href="#">Recipe Planner</a>
        <ul> 
        <li className="navbar-brand">"Plan your recipes quickly"</li>
        </ul>
        <a className="navbar-brand" href="#">Welcome</a>
    
      </nav>



      <form>
       
       
        <div className="row">
          <div className="col">
            <input type ="text" className="form-control" placeholder="Recipe Name"/>
          </div>
          
          <div className="col">
            <input type="number" className="form-control" placeholder="Maximum Cooking Time in Minutes"/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input type ="text" className="form-control" placeholder="Ingredients you have"/>
          </div>

          <div className="col">
            <input type ="text" className="form-control" placeholder="Ingredients you don't have"/>
          </div>
        </div>


        <div className="row">
          <div className="col">
            <input type ="text" className="form-control" placeholder="Allergies"/>
          </div>

          <div className="col">
            <input type ="text" className="form-control" placeholder="Specific diets"/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input type ="text" className="form-control" placeholder="Cuisines you like"/>
          </div>

          <div className="col">
            <input type ="text" className="form-control" placeholder="Cuisines you don't like"/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input type ="text" className="form-control" placeholder="Courses you want"/>
          </div>

          <div className="col">
            <input type ="text" className="form-control" placeholder="Courses you don't want"/>
          </div>
        </div>



        <div className="row">
          <div className="col">
            <input type ="text" className="form-control" placeholder="Holidays/Season you want"/>
          </div>

          <div className="col">
            <input type ="text" className="form-control" placeholder="Holidays/Season you don't want"/>
          </div>
        </div>

        <div className="text-center" >
        < button type="submit" className="btn btn-outline-success btn-sm"  >Success</button>
        </div> 

      </form>
      
      </div>
    );
  }
}

export default App;
