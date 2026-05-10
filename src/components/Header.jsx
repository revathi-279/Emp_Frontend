import { NavLink } from "react-router"

function Header() {
  return (
    <nav className="flex justify-end  text-2xl p-5 bg-pink-100 text-pink-800 gap-6">
      <NavLink to = "" className = {({isActive})=>(isActive ? "text-pink-500" : "")}>
       Home
      </NavLink>
      <NavLink to = "create-emp" className={({isActive})=>(isActive ? "text-pink-500" : "")}>
       Create Employee
      </NavLink>
      <NavLink to = "list" className={({isActive})=>(isActive ? "text-pink-500" : "")}>
      List of Employees
      </NavLink>
      
    </nav>
  )
}
export default Header
