import React from 'react'
import { Button, Col, Form, Row, Table, FormControl, FormLabel } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import { NavLink } from 'react-router-dom';

const AlleFileList = () => {
    const title = 'All E-File List';
    const breadcrumbs = [
      { to: '', text: 'E-File Ragistrasion' },
      { to: 'E-File Ragistrasion', text: 'All E-File List' },
    ];
  
    return (
      <>
        <Row>
          <Col>
            <section className="scroll-section " id="title">
              <div className="page-title-container">
                <h1 className="mb-0 pb-0 display-4">{title}</h1>
                <BreadcrumbList items={breadcrumbs} />
              </div>
              <div className="search-header d-flex justify-content-between align-items-center">
                <div className="search-bar">
                    <FormLabel>Search</FormLabel> 
                  <Form className="gap-2">
                    <FormControl
                      type="text"
                      placeholder="Document Number"
                      className="mr-2"
                    />
                  </Form>
                </div>
                <div className="search-bar">
                    <FormLabel>Search</FormLabel> 
                  <Form className="gap-2">
                    <FormControl
                      type="text"
                      placeholder="Document Type"
                      className="mr-2"
                    />
                  </Form>
                </div>
                <div className="search-bar">
                    <FormLabel>Search</FormLabel> 
                  <Form className="gap-2">
                    <FormControl
                      type="text"
                      placeholder="Section Name"
                      className="mr-2"
                    />
                  </Form>
                </div>
                <div className="search-bar">
                    <FormLabel>Search</FormLabel> 
                  <Form className="gap-2">
                    <FormControl
                      type="text"
                      placeholder="Subject"
                      className="mr-2"
                    />
                  </Form>
                </div>
                <div className="add-btn">
                  <NavLink to="/efile/createEfile">
                    <Button variant="outline-secondary" type="submit">
                      + Create
                    </Button>
                  </NavLink>
                </div>
              </div>
            </section>
            {/* Title End */}
          </Col>
        </Row>
  
        {/* Table Start */}
        <div className="table-responsive mt-3 text-center">
          <Table hover>
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Document Number</th>
                <th scope="col">Document Type</th>
                <th scope="col">Section Name</th>
                <th scope="col">Entry Date</th>
                <th scope="col">Action</th>					
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <Button variant="primary" className="me-2">
                    Delete
                  </Button>
                  <Button variant="primary">Update</Button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </Table>
        </div>
        {/* Table End */}
      </>
  )
}

export default AlleFileList