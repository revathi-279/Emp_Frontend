import { useLocation } from "react-router";

function Employee() {
  // Read state (empObj) received from navigation by useLocation()
  const { state } = useLocation();

  return (
    <div className="max-w-md mx-auto mt-10 rounded-xl bg-pink-100 p-8 text-center">
      <div>
        <h1 className="text-2xl text-pink-900 mb-6">Employee Details</h1>

      <p className="mb-2">Name: {state.name}</p>
      <p className="mb-2">Email: {state.email} </p>
      <p className="mb-2">Mobile: {state.mobile}</p>
      <p className="mb-2">Designation: {state.designation}</p>
      <p className="mb-2">Company: {state.companyName}</p>
    </div>
      </div>
  );
}

export default Employee;