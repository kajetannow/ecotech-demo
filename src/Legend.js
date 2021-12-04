import * as react from 'react';
import { Form, FormLabel } from "react-bootstrap";


const Legend = () => {
    return (
        <div className="legendWrapper">
            <Form.Label>Legend</Form.Label>
            <div className="legend">
                <div className="circle circle-1"></div>
                <div className="circle-p"><p>0% - 10%</p></div>
            </div>
            <div className="legend">
                <div className="circle circle-2"></div>
                <div className="circle-p"><p>11% - 20%</p></div>
            </div>
            <div className="legend">
                <div className="circle circle-3"></div>
                <div className="circle-p"><p>21% - 35%</p></div>
            </div>
            <div className="legend">
                <div className="circle circle-4"></div>
                <div className="circle-p"><p>36% - 50%</p></div>
            </div>
            <div className="legend">
                <div className="circle circle-5"></div>
                <div className="circle-p"><p>51% - 75%</p></div>
            </div>
            <div className="legend">
                <div className="circle circle-6"></div>
                <div className="circle-p"><p>76% - 100%</p></div>
            </div>
        </div>
    );
}

export default Legend;
