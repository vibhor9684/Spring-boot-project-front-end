import React from 'react'
import { Card, CardBody } from 'reactstrap'

const header = () => {
  return (
    <div>
        <Card className='my-3 bg-warning'>
          <CardBody>
      <h1 className='text-center my-4 '>Welcome to courses Application </h1>

          </CardBody>
        </Card>
    </div>
  )
}

export default header