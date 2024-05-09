import React from 'react';
import { Button, Col, Form, Row, Table, FormControl } from 'react-bootstrap';

import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import { NavLink } from 'react-router-dom';

const PermissionPage = () => {
  const title = 'Permissions';
  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'User_Management', text: 'User Management' },
    { to: 'Permission', text: 'Permission' },
  ];

  return (
    <>
      <Row>
        <Col>
          {/* Title Start */}
          <section className="scroll-section " id="title">
            <div className="page-title-container">
              <h1 className="mb-0 pb-0 display-4">{title}</h1>
              <BreadcrumbList items={breadcrumbs} />
            </div>
            <div className="search-header d-flex justify-content-between">
              <div className="search-bar">
                <Form className="d-flex gap-2">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-2"
                  />
                  <Button variant="outline-secondary" type="submit">
                    Search
                  </Button>
                </Form>
              </div>
              <div className="add-btn">
                {/* Update NavLink to navigate to path="/newDesignation" */}
                <NavLink to="/user_management/newPermission">
                  <Button variant="outline-secondary" type="submit">
                    + New Permission
                  </Button>
                </NavLink>
              </div>
            </div>
          </section>
          {/* Title End */}
        </Col>
      </Row>

      {/* Table Start */}
      <div className="table-responsive">
        <Table hover>
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Title</th>
              <th scope="col">Top Designation</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
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
  );
};

export default PermissionPage;
