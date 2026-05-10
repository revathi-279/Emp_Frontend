import { NavLink } from "react-router"

function Header() {
  return (
    <nav className="flex justify-end  text-2xl p-5 bg-red-50 text-red-500 gap-6">
      <NavLink to = "" className = {({isActive})=>(isActive ? "text-red-800" : "")}>
       Home
      </NavLink>
      <NavLink to = "create-emp" className={({isActive})=>(isActive ? "text-red-800" : "")}>
       Create Employee
      </NavLink>
      <NavLink to = "list" className={({isActive})=>(isActive ? "text-red-800" : "")}>
      List of Employees
      </NavLink>
      
    </nav>
  )
}
export default Header
