import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjdmOWRkYjBkYTdmZTMyN2MxNTA3NWUyZThiOGIxNSIsIm5iZiI6MTY5MjE1MzY5Ni44MTUsInN1YiI6IjY0ZGMzNzYwYjc3ZDRiMTE0MzQ3MjI0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uxfhwQXcu7GrBoKIpmeU4NzxqmncJx2kRh53ohoEsR4",
        "Content-Type": "application/json;charset=utf-8",
    },
    timeout: 10000,
});

export default apiClient;