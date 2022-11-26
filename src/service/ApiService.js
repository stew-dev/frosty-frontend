import axios from "axios";
import config from "config";

export default class ApiService {
    static switchDevice = (device) => {
        const manual_control = !device.is_on
        axios.post(config.baseUrl + "/device/switch", {
            _id: device._id,
            is_on: !device.is_on,
            manual_control
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    static switchManual = (device, manual_control) => {
        axios.post(config.baseUrl + "/device/control", {
            _id: device._id,
            manual_control
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
}


