import './ClassComponent.css';
import React,{Component} from 'react'
import Development from './Development.jpg'
import Componentwillunmount from './Componentwillunmount';



export default class ClassComponent extends Component {
  constructor (props){
    super(props);
    this.state ={
      name:"mehdi",
      lastname:"ouaz",
      bio:"gamer",
      profession:"developer",
      src: Development,
      show : true,
      input : 0,
    }
    console.log("this is my _constructor")
  }
  ShowFun = () => {
    this.setState({show: !this.state.show});
  };
  
  add = ( ) =>{
    this.setState({input: this.state.input + 1});
  };
  componentDidMount() {
    console.log("my component did mount")
    setInterval(this.add,1000)
};
  componentDidUpdate() {
    console.log("my component did update")
  };
  

  render() {
    console.log("this is my render")
    const ShowFun =()=>{
      this.setState({ show: !this.state.show})

    };

    return (
      
      <div className="profile"> 
        
        {this.state.show && (
        <p className="text">this is {this.state.name} And my lastname is {this.state.lastname} 
      I am a {this.state.bio} And i want to be a {this.state.profession}  
      <br></br>
                <img
                  src={this.state.src} alt ="pic"
                  
                />
               <Componentwillunmount/>
      </p>
     

      ) 
    }

      <button onClick={this.ShowFun}>
      {this.state.show ? "Hide" : "Show"} Profile
      </button>
      <p>{this.state.input}</p>
       
      </div>
      
    )
  }
}
