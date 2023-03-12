import ApiCall from "../../utils/apiCall";
const api = new ApiCall();
const url = `${process.env.REACT_APP_API_URL}/api`;

export const report = async () => {
    const data = await api.request("GET", `${url}/leads/report`);

    return data;
};

export const leads = async ({ type, page, limit, sortOrder, sortField }) => {
    const data = await api.request("GET", `${url}/leads?type=${type}&page=${page}&limit=${limit}&sortOrder=${sortOrder}&sortField=${sortField}`);

    return data;
};