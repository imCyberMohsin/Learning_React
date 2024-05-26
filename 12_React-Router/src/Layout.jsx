import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />  {/* Will Remain Unchanged */}
            <Outlet />  {/* Dynamically Change */}
            <Footer />  {/* Will Remain Unchanged */}
        </>
    )
}

export default Layout