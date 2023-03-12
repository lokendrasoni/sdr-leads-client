import axios from 'axios';
import { toast } from 'react-toastify';

export default class ApiCall {
    getLocalToken() {
        this.accessToken = localStorage.getItem("token") || null;
    }

    async request(method, url, body) {
        try {
            this.getLocalToken();
    
            const options = {
                headers: {
                    Authorization: this.accessToken
                },
                method,
                url,
                data: body || undefined
            };

            const data = await axios(options);

            return data.data;
        }
        catch (err) {
            const message = err.response?.data?.message
            toast.error(message || "Something went wrong.");
            throw err;
        }
    }

    async requestPublic(method, url, body) {
        try {
            const options = {
                method,
                url,
                data: body || undefined
            };

            const data = await axios(options);

            return data.data;
        }
        catch (err) {
            const message = err.response?.data?.message
            toast.error(message || "Something went wrong.");
            throw err;
        }
    }
}