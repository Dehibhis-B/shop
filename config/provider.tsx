import React from "react";
import { Toaster } from "sonner-native"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthProvider } from "@/store/auth"


export default function Providers({children}: {children: React.ReactNode}) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient} >
            <AuthProvider>
                {children}
                <Toaster position="bottom-center" />
            </AuthProvider>
        </QueryClientProvider>
    )


}