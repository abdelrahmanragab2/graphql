// api/QueryClientProvider.js
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a new query client
const queryClient = new QueryClient();

const ReactQueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
