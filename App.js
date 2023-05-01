import ClComponent from "./ClComponent";
import FnComponent from "./FnComponent";
import ReactDOM  from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
    return(
        <>
        <ClComponent />
        <FnComponent/>
        </>
    )
}

root.render(<AppLayout />)
