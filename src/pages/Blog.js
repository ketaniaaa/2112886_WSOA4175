import React, { Component } from 'react';
import { BlogList } from '../helpers/BlogList';
import Blogitem from '../components/Blogitem';
import '../styles/bloghome.css';
import { menuItemClasses } from '@mui/material';

export default class Blog extends Component {
  render() {
    return (
      <div className='menu'>
        <h1 className='menuTitle'> Blogs</h1>
        <div className='menuItem'>
          { BlogList.map((blogItem, value) => {
              return(
                <Blogitem value={value} name={blogItem.name} date={blogItem.date} image={menuItemClasses.image} link={blogItem.link}/>
          )
            })
          }
        </div>
      </div>
    

    )
  }
}
