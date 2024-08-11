
const StatusAction = ({ status }) => {
    let statusClass;//style
    let statusText;// text
    switch (status) {
        case 'ACT':
            statusClass = 'badge bg-success';
            statusText = 'Active';
            break;
        case 'INT':
            statusClass = 'badge bg-secondary';
            statusText = 'Inactive';
            break;
        case 'DET':
            statusClass = 'badge bg-danger';
            statusText = 'Deleted';
            break;
        default:
            statusClass = 'badge bg-warning text-dark';
            statusText = 'Unknown';
    }
    return (
        <span className={statusClass}>
            {statusText}
        </span>
    )
}
export default StatusAction;