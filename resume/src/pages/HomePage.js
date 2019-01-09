import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HomePage.css';

class HomePage extends Component {
  state = {
    flipped: null
  }

  negState = () => {
    this.setState({ flipped: null })
  }
  posState = (letter) => {
    this.setState({ flipped: letter })
  }

  render() {
    let labelChoiceR = (flipped, letter, subject) => {
      if(flipped !== letter || flipped === null) {
        return letter;
      } else {
        return <p className='Hover-Subjects'>{subject}</p>;
      }
    }
    let labelChoiceE = (flipped, letter, subject) => {
      if(flipped !== letter || flipped === null) {
        return letter;
      } else {
        return <p className='Hover-Subjects'>{subject}</p>;
      } 
    }
    let labelChoiceS = (flipped, letter, subject) => {
      if(flipped !== letter || flipped === null) {
        return letter;
      } else {
        return <p className='Hover-Subjects'>{subject}</p>;
      }
    }
    let labelChoiceT = (flipped, letter, subject) => {
      if(flipped !== letter || flipped === null) {
        return letter;
      } else {
        return <p className='Hover-Subjects'>{subject}</p>;
      }
    }
    let labelChoiceK = (flipped, letter, subject) => {
      if(flipped !== letter || flipped === null) {
        return letter;
      } else {
        return <p className='Hover-Subjects'>{subject}</p>;
      }
    }
    let labelChoiceO = (flipped, letter, subject) => {
      if(flipped !== letter || flipped === null) {
        return letter;
      } else {
        return <p className='Hover-Subjects'>{subject}</p>;
      }
    }

    return (
      <div className="Grid-Container">
        <div className="Grid-Item-1 Content-First-Name"><p className='K'>K</p></div>
        <div className="Grid-Item-2 Content-First-Name"><p className='A'>A</p></div>
        <div className="Grid-Item-3 Content-First-Name"><p className='T'>T</p></div>
        <div className="Grid-Item-4 Content-First-Name"><p className='H'>H</p></div>
        <div className="Grid-Item-5 Content-First-Name"><p className='E'>E</p></div>
        <div className="Grid-Item-6 Content-First-Name"><p className='R'>R</p></div>
        <div className="Grid-Item-7 Content-First-Name"><p className='I'>I</p></div>
        <div className="Grid-Item-8 Content-First-Name"><p className='N'>N</p></div>
        <div className="Grid-Item-9 Content-First-Name"><p className='EE'>E</p></div>
        <Link to={`/Paintings`} className="Grid-Item-10 Content-Last-Name" onMouseOver={() => this.posState('R')} onMouseOut = {() => this.negState()}><div className='RR'>{labelChoiceR(this.state.flipped, 'R', 'PAINTINGS')}</div></Link>
        <Link to={`/Drawings`} className="Grid-Item-11 Content-Last-Name" onMouseOver={() => this.posState('E')} onMouseOut = {() => this.negState()}><div className='EEE'>{labelChoiceE(this.state.flipped, 'E', 'DRAWINGS')}</div></Link>
        <Link to={`/Collage`} className="Grid-Item-12 Content-Last-Name" onMouseOver={() => this.posState('S')} onMouseOut = {() => this.negState()}><div className='S'>{labelChoiceS(this.state.flipped, 'S', 'COLLAGE')}</div></Link>
        <Link to={`/Sculpture`} className="Grid-Item-13 Content-Last-Name" onMouseOver={() => this.posState('T')} onMouseOut = {() => this.negState()}><div className='TT'>{labelChoiceT(this.state.flipped, 'T', 'SCULPTURE')}</div></Link>
        <Link to={`/Photography`} className="Grid-Item-14 Content-Last-Name" onMouseOver={() => this.posState('K')} onMouseOut = {() => this.negState()}><div className='KK'>{labelChoiceK(this.state.flipped, 'K', 'PHTOGRAPHY')}</div></Link>
        <Link to={`/Bio`} className="Grid-Item-15 Content-Last-Name" onMouseOver={() => this.posState('O')} onMouseOut = {() => this.negState()}><div className='O'>{labelChoiceO(this.state.flipped, 'O', 'BIO')}</div></Link>
      </div>      
    );
  }
}
export default HomePage;