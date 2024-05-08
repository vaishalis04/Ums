import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';


const FormsPage = () => {
    const title = 'Forms';
    const description = 'Elements, layouts and plugins that are needed for the forms.';
  
    const breadcrumbs = [
      { to: '', text: 'Home' },
      { to: 'User_Management', text: 'User Management' },
      { to: 'Permissions', text: 'Permissions' },

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
                {/* <Card className="mb-5" body>
                  <Card.Text>{description}</Card.Text>
                </Card> */}
              </section>
              {/* Title End */}
            </Col>
            <Form >
      <Row className="mb-3 g-3">
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard01">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" defaultValue="Mark" />
            <Form.Control.Feedback type="invalid">Please provide your first name.</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" defaultValue="Otto" />
            <Form.Control.Feedback type="invalid">Please provide your last name.</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard04">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard05">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandard06">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="12">
          <div className="form-check d-inline-block mb-0 position-relative tooltip-end-top">
            <input type="checkbox" className="form-check-input" required id="nativeTermsCheck" />
            <label className="form-check-label align-middle" htmlFor="nativeTermsCheck">
              I have read and accept the terms and conditions.
            </label>
            <Form.Control.Feedback type="invalid">Please accept terms and conditions.</Form.Control.Feedback>
          </div>
        </Col>
      </Row>
      <Button type="submit">Submit</Button>
    </Form>


          </Row>
          </>
          )}
export default FormsPage;
