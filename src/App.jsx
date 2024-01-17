
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Users, Main, Posts, HeaderPage, Pro } from "./pages"

const App = () => {
    return (
        <Router>
            <Routes>
            <Route element={<HeaderPage />} path="/">
                    <Route element={<Main />} path='/' />
                    <Route element={<Users />} path='/users' />
                    <Route element={<Posts />} path='/posts' />
                    <Route element={<Pro/>} path="/pro"/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App