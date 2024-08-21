import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
const Menus = () => {
  return (
    <div>
        <ListGroup>
            <Link className='list-group-item list-group-item-aciton' tag="a" to='/' >Home</Link>
            <Link className='list-group-item list-group-item-aciton' tag="a" to='/add-course' >Add courses</Link>
            <Link className='list-group-item list-group-item-aciton' tag="a" to='/view-courses' >All-courses</Link>
            <Link className='list-group-item list-group-item-aciton' tag="a" to='#!' >About</Link>
            <Link className='list-group-item list-group-item-aciton' tag="a" to='#!' >Contact</Link>

        </ListGroup>
    </div>
  )
}

export default Menus