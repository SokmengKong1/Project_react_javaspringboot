import { useState, useEffect, useContext } from "react";
import { Service, deleteItem, getById } from "../controller/service";
import { Link } from "react-router-dom";
import { EditContext } from "./New/EditContext";
import { useNavigate } from "react-router-dom";
import StatusAction from "../status/StatusAction";
import LoadingProgressBox from "../LoadingProgress/LoadingProgressBox";
// import axios from "axios";
const ListData = () => {
 
  const [item, setItem] = useState([]);
  const [progress,setProgress] = useState(0);
  const [,setLoadings]=useState(true)
  const navigate = useNavigate();
  const { setEditItem } = useContext(EditContext);
  useEffect(() => {
    loading();
  }, []);
  const loading = async () => {
    setLoadings(0)
    setLoadings(true)
    let interval;
    try {
      interval = setInterval(()=>{
        setProgress((prev)=> Math.min(prev +10, 99))
      },100)
      const Table = await Service();
      if(Table){
        setItem(Table.data);
        clearInterval(interval)
        setProgress(100)
        
        console.log(Table.data)
      }
    } catch (error) {
      console.error("Error",error)
    }finally{
      setLoadings(false)
    }
    
    // const Table = await Service(); //list data
    // setItem(Table.data);
    // console.log(Table.data);
  };
  const handleDelete = async (id) => {
    //delete data
    await deleteItem(id);
    loading();
  };

  const handleEdit = (item) => {
    //action to form edit
    setEditItem(item);
    navigate("/edit");
  };
  const handleUpdate = (item) => {
    //action to form edit
    setEditItem(item);
    navigate("/update");
  };
  const handleEditById = async (id) => {
    //get data from id
    const data = await getById(id);
    console.log(data.data);
  };
  // const handleDelete = async (id) => {
  //     await deleteItem(id);
  //     // await axios.post("http://localhost:8080/Table/delete", item);
  //     loading();
  // };

  return (
    <div>
      <LoadingProgressBox progress={progress}/>
      <Link to="/create" className="btn btn-success">
        Add +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <td>No.</td>
            <td>Name</td>
            <td>address</td>
            <td>Status</td>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>

              <td>
                <StatusAction status={item.status} />
              </td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => handleEdit(item)}
                >
                  update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleEditById(item.id)}
                >
                  Edit By Id
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleUpdate(item)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default ListData;
