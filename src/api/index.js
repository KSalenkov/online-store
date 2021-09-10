import axios from "axios";

export const url = "https://murmuring-tor-81614.herokuapp.com";

const instance = axios.create({
    baseURL: url,
});

export const getGoodsList = async (dealers) => {
    const content = await instance.get(`${url}/api/goods/?dealers=${dealers}`);
    return content;
};

export const getDealers = async () => {
    const content = await instance.get(`${url}/api/dealers/`);
    return content;
};
