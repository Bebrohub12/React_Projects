import React from 'react'

function Nav() {

  const fakeData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      age: 28,
      address: "123 Elm Street, Springfield, IL",
      phone: "555-123-4567",
      jobTitle: "Software Developer",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      age: 32,
      address: "456 Oak Avenue, Seattle, WA",
      phone: "555-234-5678",
      jobTitle: "Graphic Designer",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      age: 24,
      address: "789 Pine Road, Austin, TX",
      phone: "555-345-6789",
      jobTitle: "Marketing Specialist",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      age: 45,
      address: "321 Maple Drive, Denver, CO",
      phone: "555-456-7890",
      jobTitle: "Project Manager",
    },
    {
      id: 5,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      age: 30,
      address: "654 Cedar Lane, Boston, MA",
      phone: "555-567-8901",
      jobTitle: "Data Analyst",
    },
    {
      id: 5,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      age: 30,
      address: "654 Cedar Lane, Boston, MA",
      phone: "555-567-8901",
      jobTitle: "Data Analyst",
    },
  ];





  return (
    <div>
      {
        fakeData.map((item, ind) => {
          return (
            <>
              <li key={ind}>{item.name}</li>
              <p key={ind}>{item.age}</p>
              <h1 key={ind}>{item.email}</h1>
            </>
          )

        })
      }
    </div>
  )
}

export default Nav