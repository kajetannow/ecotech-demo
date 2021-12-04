import React from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";
import Legend from './Legend';

function ControlPanel() {
  return (
    <div className="p-3 control-panel">
      <Form>
        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label>Search location</Form.Label>
          <div className="form-control-wrapper">
            <Form.Control type="text" placeholder="Type location..." />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label>The amount of rainfall</Form.Label>
          <div className="form-control-wrapper">
            <Form.Control type="range" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLocation">
          <Legend />
        </Form.Group>
      </Form>
    </div>
  );
}

export default ControlPanel;
