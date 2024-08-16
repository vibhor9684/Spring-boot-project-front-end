import React from 'react'
import {Jumbotron} from "reactstrap"
import { Button, Container } from 'react-bootstrap'
const Home=()=>{

    

    return(
        <>
        <div>
        <div className="jumbotron bg-light py-5">
      <Container className='text-center'>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <Button color='primary' outline >Learn more</Button>
      </Container>
    </div>
        </div>
        </>
    )
}
export default Home