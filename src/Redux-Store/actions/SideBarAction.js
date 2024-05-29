import { useDispatch } from "react-redux"
import { OpenSidebar } from "../slices/SideBarSlice";

export const SideBarAction = () => {
    const dispatch = useDispatch();
    const ToggleSidebar = (item) => {
        dispatch(OpenSidebar(item));
    }
    return {ToggleSidebar};
}