import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import History from '../History/History'
import Contact from '../Contact/Contact'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link className='subnav_links'>
          <h3>About</h3>
          </Link>
          <Link className='subnav_links'>
          <h3>History</h3>
          </Link>
          <Link className='subnav_links'>
          <h3>Contact</h3>
          </Link>


        </div>
        <div className='box'>
          <Switch>
            <Route component={History} path='history'/>
            <Route component={Contact} path='contact'/>
            <Route 
            path='/about'
            render={() => (
              <div>
                <h1>About the University</h1>
              <p> just random text i guesss</p>
              </div>
            )}
            />
          </Switch>
        </div>
      </div>
    )
  }
}