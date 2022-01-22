/* eslint-disable import/no-anonymous-default-export */
const API_URL = "https://api.spacexdata.com/";
export default (endpoint, method, body) =>
    fetch(`${API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body: JSON.stringify(body),
    })
        .then((res) => res.json())
        .then((val) => {
            console.log("val", val);
            return val;
        })
        .catch((err) => {
            console.log("api error", JSON.stringify(err));
            return {
                status: false,
                message: "Ooops network error! Check your net connection",
            };
        });