import React from 'react'
import { Col,Row,Card, Button } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';

const EfileList = () => {
    const title = 'Select Section Register List';
    const breadcrumbs = [
        { to: '', text: 'E-File Ragistrasion' },
        { to: 'E-File Ragistrasion', text: 'E-File List' },
    ];
    const dataName = [
        {
        name :"Account"
    },
        {
        name :"Student Section"
    },
        {
        name :"Health Care Center"
    },
        {
        name :"Examination Center"
    },
        {
        name :"Library Section"
    },
        {
        name :"Vehicle"
    },
        {
            name:"Engineer Section"
    },
        {
            name:"Guest House"
    },
        {
            name:"Store"   
         },
        {
            name:"New user"
    },
        {
            name :"Deputy Registrar Office"
    },
]
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
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
            <Row className="g-2 mt-3">
            {dataName.map((index,key) => {
                return (    
              <Col sm="6" xxl="4" key={key} >
                <Card className="sh-19 sw-45" >
                  <Card.Body className="text-center d-flex flex-column justify-content-center align-items-center">
                    <p className="heading mb-1">{index.name}</p>
                  </Card.Body>
                </Card>
              </Col>
             
                )
            })}
             </Row>
        </>
    )
}

export default EfileList
