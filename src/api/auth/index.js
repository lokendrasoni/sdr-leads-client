import ApiCall from "../../utils/apiCall";
const api = new ApiCall();
const url = `${process.env.REACT_APP_API_URL}/api`;

export const login = async (username, password) => {
    const data = await api.requestPublic("POST", `${url}/auth/login`, { username, password });

    return data;
};

export const register = async (username, password) => {
    const data = await api.requestPublic("POST", `${url}/auth/register`, { username, password });

    return data;
};

export const status = async () => {
    const data = await api.request("GET", `${url}/auth/status`);

    return data;
};