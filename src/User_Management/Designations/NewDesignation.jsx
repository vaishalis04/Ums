import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Select from 'react-select';
import CsLineIcons from 'cs-line-icons/CsLineIcons';



const FormsPage = () => {
    const title = 'Forms';
    const description = 'Elements, layouts and plugins that are needed for the forms.';
  
    const breadcrumbs = [
      { to: '', text: 'Home' },
      { to: 'User_Management', text: 'User Management' },
      { to: 'Designations', text: 'Designations' },

    ];
 
    const [value, setValue] = useState();

    const options = [
      { value: 'yes', label: 'Yes' },
      { value: 'No', label: 'No' },
      // { value: 'Fougasse', label: 'Fougasse' },
      // { value: 'Lefse', label: 'Lefse' },
      // { value: 'Melonpan', label: 'Melonpan' },
      // { value: 'Naan', label: 'Naan' },
      // { value: 'Panbrioche', label: 'Panbrioche' },
      // { value: 'Rewena', label: 'Rewena' },
      // { value: 'Shirmal', label: 'Shirmal' },
      // { value: 'Tunnbröd', label: 'Tunnbröd' },
      // { value: 'Vánočka', label: 'Vánočka' },
      // { value: 'Zopf', label: 'Zopf' },
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
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard01">
            <Form.Label>Title</Form.Label>
            <Form.Control required type="text" defaultValue="Mark" />
            <Form.Control.Feedback type="invalid">Please provide your first name.</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard02">
            <Form.Label>Top Designation</Form.Label>
            <Form.Control required type="text" defaultValue="Otto" />
          </Form.Group>
        </Col>
        <Col md="9">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard03">
            <Form.Label>Remark</Form.Label>
            <Form.Control type="text" required style={{ height: '100px' }} />
            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
        <Select classNamePrefix="react-select" options={options} value={value} onChange={setValue} placeholder="Select" />
        </Col>  
      </Row>
      <Button type="submit">Submit</Button>
    </Form>


          </Row>
          </>
          )}
export default FormsPage;
