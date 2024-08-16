import React from 'react'
import {
    Card,
    CarBodey,
    CardTitle,
    CardSubtitle,
    CardText,
    CarFooter,
    Button,
    Container,
    CardBody
} from "reactstrap";

const Course = ({course}) => {
  return (
    <div>
            <Card className="text-center">
                <CardBody>
                    <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container className="text-center">
                        <Button color='danger'>
                            Delete
                        </Button>
                        <Button color="warning m-3">
                            Update
                        </Button>
                    </Container>
                </CardBody>
            </Card>
    </div>
  )
}

export default Course