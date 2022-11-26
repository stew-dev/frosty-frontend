import {useEffect, useState} from "react";
import axios from "axios";
import {createTheme, ThemeProvider} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import config from "config";
import DeviceCard from "components/DeviceCard";


const Devices = () => {
    const [devices, setDevices] = useState({});

    const getDevices = () => {
        axios.get(config.baseUrl + "/devices/data"
        )
            .then(response => {
                setDevices(new Map(Object.entries(response.data)));
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        const interval = setInterval(getDevices, 1000);
        return () => clearInterval(interval)
    }, [])

    const deviceMap = () => {
        const devicesArray = Array.from(devices.values())
        return <ThemeProvider
            theme={createTheme({
                breakpoints: {
                    values: {
                        laptop: 1024,
                        tablet: 900,
                        mobile: 0,
                        desktop: 1280,
                    },
                },
            })}
        >
            {devicesArray.map(d => {
                return <DeviceCard key={d._id} device={d} id={d._id} isManual={d.manual_control}/>
            })}
        </ThemeProvider>
    }

    return (
        <div style={{display: 'flex', flexFlow: 'column'}}>
            <div style={{minHeight: 48, flexBasis: '100%', background: '#4b4b4b', borderBottom: '2px solid #e2001a'}}/>
            <div style={{padding: 20}}>
                <Grid2 container spacing={2}>
                    {devices.size > 0 && deviceMap()}
                </Grid2>
            </div>
        </div>
    )
}

export default Devices