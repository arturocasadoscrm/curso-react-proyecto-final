import { NavLink, Outlet } from "react-router-dom"
import routes from "../../routes"

const Dashboard = () => {
    return (
        <>
            <div className="topbar">
                <h1>Dashboard</h1>
            </div>
            <div className="container">
                <div className="sidebar">
                    <ul className="links">
                        {routes.map((w) =>
                            w.children?.map((childPath) => (
                                <NavLink
                                    to={childPath.path || ""}
                                    key={childPath.path}
                                >
                                    <li>{childPath.id}</li>
                                </NavLink>
                            ))
                        )}
                    </ul>
                </div>

                <div className="main-section">
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
