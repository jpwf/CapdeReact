import { Routes, Route } from 'react-router-dom'
import App from './App'
import Inside from './inside'

const Routing = () =>{
    return(
        <>
        
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="inside" element={<Inside/>}/>
                
               
            </Routes>
        
        </>
    )
}

export default Routing