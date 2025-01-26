import {Navigate, Outlet} from 'react-router-dom'

const Auth = () => {
    const autenticado = localStorage.getItem("token")

    return (
        <main className="flex justify-center content-center w-full h-screen ">
        {/* <Outlet/><Outlet /><Outlet /><Outlet /> */}
        {autenticado ? <Navigate to="/dashboard"/> : <Outlet/>}
        </main>
    )
}

export default Auth