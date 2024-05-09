import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Select from 'react-select';
import CsLineIcons from 'cs-line-icons/CsLineIcons';



const NewUserPage = () => {
    const title = 'Create User';
    const description = 'Elements, layouts and plugins that are needed for the forms.';
  
    const breadcrumbs = [
      { to: '', text: 'Home' },
      { to: 'User_Management', text: 'User Management' },
      { to: 'Users', text: 'Users' },
      { to: 'NewUsers', text: 'New Users' },
    ];
 
    const [value, setValue] = useState();

    const options = [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'others' },
    ];
    
    return (
        <>
         
          <Row>
            <Col>

              {/* Title Start */}
              <section className="scroll-section" id="title">
                <div className="page-title-container">
                  <h1 className="mb-0 pb-0 display-4">{title}</h1>
                  <BreadcrumbList items={breadcrumbs} />
                </div>
                
              </section>
              {/* Title End */}
            </Col>
            <Form >
      <Row className="mb-3 g-3">
        <Col md="10">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard01">
            <Form.Label>Full Name</Form.Label>
            <Form.Control required type="text"  placeholder='Enter Full Name'/>
            <Form.Control.Feedback type="invalid">Please provide your full name.</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="3">
        <Form.Label>Gender</Form.Label>
        <Select classNamePrefix="react-select" options={options} value={value} onChange={setValue} placeholder="Select" />
        </Col>
        <Col md="3">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard02">
            <Form.Label>Mobile</Form.Label>
            <Form.Control required type="Number" placeholder='Enter Mobile Number' />
          </Form.Group>
        </Col>
        <Col md="4">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard02">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email"  placeholder='Enter Mail'/>
          </Form.Group>
        </Col>

        <Col md="3">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard02">
            <Form.Label>Username</Form.Label>
            <Form.Control required type="text"  placeholder='Enter Username' />
          </Form.Group>
        </Col>
        <Col md="3">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard02">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="Password"  placeholder='Enter Password' />
          </Form.Group>
        </Col>
        <Col md="4">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard02">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control required type="Password"  placeholder='confirm Password' />
          </Form.Group>
          </Col>
          <Col md="3">
        <Form.Label>Designation</Form.Label>
        <Select classNamePrefix="react-select" options={options} value={value} onChange={setValue} placeholder="Select" />
        </Col>
        <Col md="3">
        <Form.Label>Responsibilty</Form.Label>
        <Select classNamePrefix="react-select" options={options} value={value} onChange={setValue} placeholder="Select" />
        </Col>
        <Col md="9">
        <Form.Label>Is Core Rule (Editable)</Form.Label>
        <Select classNamePrefix="react-select" options={options} value={value} onChange={setValue} placeholder="Select" />
        </Col>
        
        <Col md="9">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard03">
            <Form.Label>Remark</Form.Label>
            <Form.Control type="text" required style={{ height: '70px' }} />
            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Button type="submit">Submit</Button>
    </Form>


          </Row>
          </>
          )}
export default NewUserPage;
