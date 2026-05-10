import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-12 px-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-6">
        
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-pink-700 mb-6">
          HOME
        </h2>

        {/* Description Card */}
        <p className="text-gray-700 text-base text-justify">
          The <b>Employee Management System</b> is a simple and efficient web application designed to manage employee records easily. 
          It allows users to add new employees, view employee details, update existing information, and delete records whenever required.
          <br /><br />
          This application provides a user-friendly interface for performing all basic employee management operations in an organized way. 
          It helps in maintaining employee data accurately and demonstrates the implementation of CRUD operations using modern web technologies.
        </p>

        {/* Details */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
            <h3 className="font-semibold text-pink-700">Add</h3>
            <p className="text-sm text-gray-600">New Employees</p>
          </div>

          <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
            <h3 className="font-semibold text-pink-700">Manage</h3>
            <p className="text-sm text-gray-600">Update Data</p>
          </div>

          <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
            <h3 className="font-semibold text-pink-700">Delete</h3> 
            <p className="text-sm text-gray-600">Remove Records</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;