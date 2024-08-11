/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Form from 'react-bootstrap/Form';
import { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { EditContext } from './New/EditContext';
import LoadingProgressBox from "../LoadingProgress/LoadingProgressBox";
import { updateItem, createItem } from '../controller/service';

const Edit = () => {
    const [user, setUser] = useState({ id: '', name: '', dob: '', address: '', status: '' });
    const navigate = useNavigate();
    const { editItem, setEditItem } = useContext(EditContext);
    const [progress,setProgress] = useState(0);
    const [loading,setLoadings]=useState(true)
    useEffect(() => {   
        let interval; 
              if (editItem) {
                setUser(editItem);
                interval = setInterval(()=>{
                    setProgress((prev)=> Math.min(prev +10, 99))
                  },100)
                  setTimeout(()=>{
                    clearInterval(interval)
                    setProgress(100)
                    // loading(false)
                    
                  },1000)

            }else{
                setLoadings(false)
            }
        return () => {
            clearInterval(interval)
        };
    }, [editItem ]);






    // useEffect(() => {    
    //     console.log(editItem)
    //     if (editItem) {
    //         setUser(editItem);
    //     }
    //     return () => {
    //         setEditItem(null);
    //     };
    // }, [editItem, setEditItem]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (user.id) {

                await updateItem(user);
                console.log("Item updated successfully");
            } else {
                await createItem(user)
                console.log("Item created successfully");
            }

            navigate('/'); // Navigate back to the item list after form submission
        } catch (error) {
            console.error("Failed to submit the form", error);
        }
    };
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <LoadingProgressBox progress={progress}/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3 border rounded p-4 mt-2 shadow">
                        <Form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="">Name</label>
                                <input type="text" className="form-control" placeholder="Enter Your name" name="name" value={user.name} onChange={(e) => onInputChange(e)} />
                                <label htmlFor="">Address</label>
                                <input type="text" className="form-control" placeholder="Enter Your address" name="address" value={user.address} onChange={(e) => onInputChange(e)} />
                                <label>Status</label>
                                <input type="text" className="form-control" placeholder="Enter Your name" name="status" value={user.status} onChange={(e) => onInputChange(e)} />
                                <Button className='' type="submit">Submit</Button>
                            </div>
                        </Form>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Edit
