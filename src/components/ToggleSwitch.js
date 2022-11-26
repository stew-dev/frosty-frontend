import {Switch} from "@mui/material";
import ApiService from "service/ApiService";

const ToggleSwitch = ({device}) => {

    const switchDevice = () => {
        ApiService.switchDevice(device)
    }

    return <Switch onClick={switchDevice} checked={device.is_on}/>
}

export default ToggleSwitch
