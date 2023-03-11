import axios from 'axios';
import { toast } from 'react-toastify';

export class ApiCall {
    getLocalToken() {
        this.accessToken = localStorage.getItem("session") || null;
    }

    async request(method, url, body) {
        try {
            this.getLocalToken();
    
            const options = {
                headers: {
                    Authorization: this.accessToken,
                    method,
                    url,
                    data: body || undefined
                }
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
                headers: {
                    method,
                    url,
                    data: body || undefined
                }
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