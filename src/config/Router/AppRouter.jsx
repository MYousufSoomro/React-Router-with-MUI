import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home  from "../../screens/Home/Home"
import Products  from "../../screens/Products/Products"
import Error from "../../screens/Error/Error";

const AppRouter = ()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/products" element={<Products />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </Router>
    )
}

export default AppRouter