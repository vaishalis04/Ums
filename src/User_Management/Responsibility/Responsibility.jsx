import React, { useState } from 'react';
import { Button, Col, Form, Row,Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import classNames from 'classnames';



const FormsPage = () => {
    const title = 'Forms';
    const description = 'Elements, layouts and plugins that are needed for the forms.';
  
    const breadcrumbs = [
      { to: '', text: 'Home' },
      { to: 'User_Management', text: 'User Management' },
      { to: 'Designations', text: 'Designations' },

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
            <Table hover>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>


          </Row>
          </>
          )}
export default FormsPage;
