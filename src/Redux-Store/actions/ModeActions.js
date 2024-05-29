import { useDispatch } from "react-redux"
import { setSelectedMode } from "../slices/SelectMode";

export const ModeAction = () => {
    const dispatch = useDispatch();
    const setMode = (item) => {
        dispatch(setSelectedMode(item));
    }
    return {setMode};
}