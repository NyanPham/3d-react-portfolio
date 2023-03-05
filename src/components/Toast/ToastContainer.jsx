import Toast from './Toast'
import ReactDOM from 'react-dom'

const ToastContainer = () => {
    return ReactDOM.createPortal(<Toast />, document.getElementById('root'))
}

export default ToastContainer
