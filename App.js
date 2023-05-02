import ReactDOM  from "react-dom/client";
import Github from "./components/Github";
const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
    return(
        <>
        <Github/>
        </>
    )
}

root.render(<AppLayout />)
