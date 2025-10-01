import React from "react";
import { Toaster } from "sonner-native"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


export default function Providers({children}: {children: React.ReactNode}) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient} >
            {children}
            <Toaster position="bottom-center" />

        </QueryClientProvider>
    )


}