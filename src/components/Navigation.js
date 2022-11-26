import {
    BottomNavigation,
    BottomNavigationAction,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";
import {Link} from "react-router-dom";
import {Cottage, DeviceHub, OpenInNew} from "@mui/icons-material";
import config from "config";
import {useState} from "react";
import 'index.css'

const drawerWidth = 240;
const solarWeb = 'https://www.solarweb.com/PvSystems/PvSystem?pvSystemId=ee4405ed-7be2-4409-9b13-762a13136788'
const externalLinks = [
    {
        text: 'SolarWeb',
        link: solarWeb
    },
    {
        text: 'API',
        link: config.baseUrl + '/docs#/'
    }
]
const menu = [
    {
        text: 'Home',
        link: '',
        icon: <Cottage/>
    },
    {
        text: 'Devices',
        link: 'devices',
        icon: <DeviceHub/>
    }
]

const SideMenu = () => {
    return <Drawer classes={'drawer'}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    borderRight: 0,
                    background: '#f2f2f2'
                },
            }}
            variant="permanent"
            anchor="left"
    >
        <Toolbar className={'toolbar'}/>
        <Divider/>
        <List>
            {menu.map(i => (
                <Link key={i.link} to={'/' + i.link}>
                    <ListItem href={i.text} key={i.text} disablePadding button>
                        <ListItemButton>
                            <ListItemIcon>
                                {i.icon}
                            </ListItemIcon>
                            <ListItemText primary={i.text}/>
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
        </List>
        <Divider/>
        <List>
            {externalLinks.map(obj => (
                <a key={obj.link} target={"_blank"} rel={"noreferrer"} href={obj.link}>
                    <ListItem key={obj.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <OpenInNew/>
                            </ListItemIcon>
                            <ListItemText primary={obj.text}/>
                        </ListItemButton>
                    </ListItem>
                </a>
            ))}
        </List>
    </Drawer>
}

const BottomTray = () => {
    const [value, setValue] = useState(0);

    return <BottomNavigation classes={'bottom-nav'}
                             showLabels
                             value={value}
                             onChange={(event, newValue) => {
                                 setValue(newValue);
                             }}
    >
        <BottomNavigationAction component={Link} to={''} label="Home" icon={<Cottage/>}/>
        <BottomNavigationAction component={Link} to={'devices'} label="Devices" icon={<DeviceHub/>}/>
        <BottomNavigationAction component={Link} to={'solar-web'} label="SolarWeb" icon={<OpenInNew/>}/>
    </BottomNavigation>
}
export {SideMenu, BottomTray}