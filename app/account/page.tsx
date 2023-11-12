"use client";

import Box from "@/components/Box";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";

const Error =() =>{
    // const sessionData = useSessionContext(); maybe use this to display user name and details in future 
    // const { user } = useUser();
    return(
        <Box className="h-full flex items-center justify-center">
            <div className="text-neutral-400 text-2xl">
                Account Page.
                
                <br />
                Nothing to see here :P
            </div>
        </Box>
    );
};

export default Error;