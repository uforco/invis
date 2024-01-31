import axios from "axios"

const instance = axios.create({
    baseURL: 'https://invis-server.vercel.app',
});
const Server_Url = () => {
    return instance
};

export default Server_Url;