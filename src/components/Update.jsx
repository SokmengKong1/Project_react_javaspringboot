
import { useEffect, useContext } from "react";
import { EditContext } from './New/EditContext';


const Update = () => {

    const { editItem, setEditItem } = useContext(EditContext);
    useEffect(() => {
        if (editItem) {
            setEditItem(editItem);
            console.log(editItem)
        }
        return () => {
            setEditItem(null);
        };
    }, [editItem, setEditItem]);
    return (
        <div>
            <input type="text" name="name" value={editItem.name} />

        </div>
    )
}

export default Update
