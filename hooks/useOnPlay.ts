import { Song } from "@/types";
import useAuthModal from "./useAuthModal";
import usePlayer from "./usePlayer";
import { useUser } from "./useUser";

interface useOnPlayProps{
    

};
const useOnPlay = (songs: Song[]) =>{
    const player = usePlayer();
    const authModal = useAuthModal();
    const { user } = useUser();

    const onPlay = (id: string) => {
        if(!user){
            return authModal.onOpen(); // makes sure unlogged people cant play music
        }

        player.setId(id);
        player.setIds(songs.map((song) => song.id ));

    };

    return onPlay;

};

export default useOnPlay;