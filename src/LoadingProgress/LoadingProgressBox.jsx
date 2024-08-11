/* eslint-disable react/prop-types */
import "./LoadingProgressStyle.css"
const LoadingProgressBox =({progress}) =>{
    return(
        <div className="progress-bar">
        <div className={`progress-bar-inner ${progress === 100 ? 'hide': ''}`}
            style={{width:`${progress}%`}}>
        </div>
        </div>
    )
}
export default LoadingProgressBox;