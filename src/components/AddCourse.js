import React, { useEffect, useState } from 'react';
import { Button, Container, FormGroup, Input, Label } from 'reactstrap';

const AddCourse = () => {
  useEffect(()=>{
    document.title="|| Add course ||"
  },[])

  const [course,setCourse]=useState({});
  //form handler function
  const handleForm=(e)=>{
    console.log(course);
    e.preventDefult();
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <h1 className='text-center my-3'>Fill course details</h1>
        
        <FormGroup>
          <Label for="courseId">Course Id</Label>
          <Input type='text' placeholder='Enter here' name='courseId' id='courseId' />
        </FormGroup>
        
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input type='text' placeholder='Enter title here' id='title' />
        </FormGroup>
        
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input type='textarea' placeholder='Enter description here' id='description' />
        </FormGroup>
        
        <Container className='text-center'>
          <Button type='submit' color='success' className='m-2' outline>Submit</Button>
          <Button color='warning' className='m-2'>Clear</Button>
        </Container>
      </form>
    </div>
  );
}

export default AddCourse;
