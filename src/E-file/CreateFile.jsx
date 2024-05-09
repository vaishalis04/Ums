import { Button, Col, Form, Row, FormControl } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Select from 'react-select';

const CreateFile = () => {
    const title = 'Create E-File';
    const breadcrumbs = [
        { to: '', text: 'E-File Ragistrasion' },
        { to: 'E-File Ragistrasion', text: 'Create E-File' },
    ];
    const [selectValue, setSelectValue] = useState();
    const options = [
        { value: 'Breadstick', label: 'Breadstick' },
        { value: 'Biscotti', label: 'Biscotti' },
        { value: 'Fougasse', label: 'Fougasse' },
        { value: 'Lefse', label: 'Lefse' },
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
                        <div className="search-header d-flex justify-content-between">
                            <div className="search-bar">
                                {/* <Form className="d-flex gap-2">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-2"
                  />
                  <Button variant="outline-secondary" type="submit">
                    Search
                  </Button>
                </Form> */}
                            </div>
                            <div className="add-btn">
                                <Button variant="outline-secondary " type="submit">
                                    Back
                                </Button>
                                <Button variant="outline-secondary" type="submit">
                                    View List
                                </Button>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
            <Form>
                <div className="mb-3">
                    <Form.Label>Section</Form.Label>
                    <Select classNamePrefix="react-select" options={options} value={selectValue} onChange={setSelectValue} placeholder="" />
                </div>
                <div className="mb-3">
                    <Form.Label>Select Document Type </Form.Label>
                    <Select classNamePrefix="react-select" options={options} value={selectValue} onChange={setSelectValue} placeholder="" />
                </div>
                <div className="mb-3">
                    <Form.Label>Document Number</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Document Number"
                    />
                </div>
                <div className="mb-3">
                    <Form.Label>Enter Subject</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Enter Subject"
                    />
                </div>
                <div className="mb-3">
                    <label> Upload File : </label>
                    <input type="file" className=" outline-secondary form-control required" id="file" name="file" ng-model="Form.file" required />
                </div>
                <div className="mb-3">
                    <Form.Label>Add remark</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </div>
                <div className="mb-3">
                    <Form.Label>Select</Form.Label>
                    <Select classNamePrefix="react-select" options={options} value={selectValue} onChange={setSelectValue} placeholder="" />
                </div>

                <Button variant="primary">Submit</Button>
            </Form>
        </>
    )
}

export default CreateFile