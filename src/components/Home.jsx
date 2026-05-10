import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 pt-6 px-6">
      
      <div className="max-w-3xl mx-auto">
        
        {/* Title */}
        <h2 className="text-center text-4xl font-semi-bold text-red-900 mb-10">
          WELCOME TO EMPLOYEE MANAGEMENT SYSTEM
        </h2>

        {/* Description */}
        <p className="text-gray-700">
          The <b>Employee Management System</b> is a simple and efficient web application designed to manage employee records easily. 
          It allows users to add new employees, view employee details, update existing information, and delete records whenever required.
          <br /><br />
          This application provides a user-friendly interface for performing all basic employee management operations in an organized way. 
          It helps in maintaining employee data accurately and demonstrates the implementation of CRUD operations using modern web technologies.
        </p>

        {/* Details */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          
          <div className="bg-red-100 p-5 rounded-lg border-0">
            <h3 className="font-semibold text-red-800 mb-1">Add</h3>
            <p className="text-sm text-gray-700">New Employees</p>
          </div>

          <div className="bg-red-100 p-5 rounded-lg border-0">
            <h3 className="font-semibold text-pink-800 mb-1">Manage</h3>
            <p className="text-sm text-gray-700">Update Data</p>
          </div>

          <div className="bg-red-100 p-5 rounded-lg border-0">
            <h3 className="font-semibold text-pink-700 mb-1">Delete</h3> 
            <p className="text-sm text-gray-700">Remove Records</p>
          </div>

        </div>

        

      </div>
    </div>
  );
}

export default Home;