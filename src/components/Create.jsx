
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { createItem } from '../controller/service';
const Create = () => {
    let navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        address: "",
        status: "",
    });
    const { name, address, status } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        // await axios.post("http://localhost:8080/Table/create", user)
        await createItem(user)
        navigate("/")
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3 border rounded p-4 mt-2 shadow">
                        <Form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="">Name</label>
                                <input type="text" className="form-control" placeholder="Enter Your name" name="name" value={name} onChange={(e) => onInputChange(e)} />
                                <label htmlFor="">Address</label>
                                <input type="text" className="form-control" placeholder="Enter Your address" name="address" value={address} onChange={(e) => onInputChange(e)} />
                                <label>Status</label>
                                <input type="text" className="form-control" placeholder="Enter Your name" name="status" value={status} onChange={(e) => onInputChange(e)} />
                                <Button className='' type="submit">Submit</Button>
                            </div>
                        </Form>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Create
