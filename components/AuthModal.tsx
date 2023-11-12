"use client";

import { useSessionContext, useSupabaseClient }
 from "@supabase/auth-helpers-react";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeMinimal, ThemeSupa } from "@supabase/auth-ui-shared";


import Modal from "./Modals";
import useAuthModal from "@/hooks/useAuthModal";


const AuthModal = () =>{
    const supabaseClinet = useSupabaseClient(); 
    const router = useRouter();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();

    useEffect( () => {
        if(session){
            router.refresh();
            onClose();
        }

    }, [session, router, onClose]);

    const onChange = (open: boolean) => {
        if(!open) {
            onClose();
        }
        
    }


    return(
        <Modal
        title = "Welcome Back"
        description = "Log in to your account"
        isOpen = {isOpen}
        onChange={ onChange }
        >
            <Auth
            theme = "dark"
            magicLink
            providers={["google", "github"]}
                supabaseClient={supabaseClinet}
                appearance={{
                    theme: ThemeSupa,
                    variables:{
                        default:{
                            colors:{
                                brand:'#404040',
                                brandAccent: '#00FFFF',
                            }
                        }
                    }
                }}
            />

        </Modal>
    );

}

export default AuthModal;