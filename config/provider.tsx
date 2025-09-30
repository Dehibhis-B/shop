import React from "react";
import { Toaster } from "sonner-native"
import { QueryClient, QueryClientProvider } from


export default function Providers({children}: {children: ReactNode}) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient} >
            {children}
            <Toaster position="botton-center" />

        </QueryClientProvider>
    )


}