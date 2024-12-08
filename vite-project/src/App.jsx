// App.js
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GET_USER } from "./api/queries";
import client from "./api/graphqlClient";

const App = () => {
  // Correct usage of `useQuery` with a single object argument
  const { data, error, isLoading } = useQuery({
    queryKey: ["user", 1], // The query key, with userId as part of the array
    queryFn: async () => {
      const response = await client.request(GET_USER);
      return response.users[0]; // Extract the first user object
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>User Info</h1>
      <h2>{data.name}</h2>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Address:</strong> {data.address.street}, {data.address.city}, {data.address.zipcode}</p>
          <p><strong>Company:</strong> {data.company.name} - {data.company.catchPhrase}</p>
    </div>
  );
};

export default App;
