import {
    Card,
    CardActions, CardContent,
    CardHeader,
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import ToggleSwitch from "components/ToggleSwitch";
import ApiService from "service/ApiService";
import 'index.css'

const DeviceCard = ({device, id, isManual}) => {

    const convertIdToName = (id) => {
        return id.replaceAll('_', ' ')
    }

    const switchDevice = (device, manual_control) => {
        ApiService.switchManual(device, manual_control)
    }

    return (
        <Grid2 tablet={4} mobile={12}>
            <Card elevation={1} key={id}>
                <CardHeader className={'card-text'}
                    action={
                        <ToggleSwitch device={device}/>
                    }
                    title={convertIdToName(device._id)}
                />
                <CardContent className={'card-text'}>
                    <span>Power : {device.power}w</span><br/>
                    <span>Priority : {device.priority}</span>
                </CardContent>
                <CardActions className={'card-actions'}>
                    <ToggleButtonGroup size={'small'} key={device.manual_control} exclusive value={device.manual_control} color="primary">
                        <ToggleButton onClick={() => switchDevice(device, true)} value={true}>Manual</ToggleButton>
                        <ToggleButton onClick={() => switchDevice(device, false)} value={false}>Auto</ToggleButton>
                    </ToggleButtonGroup>
                </CardActions>
            </Card>
        </Grid2>
    )
}


export default DeviceCard