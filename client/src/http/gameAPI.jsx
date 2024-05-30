import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type);
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type');
    return data
}

export const createGenre = async (genre) => {
    const { data } = await $authHost.post('api/genre', genre);
    return data
}

export const fetchGenres = async () => {
    const { data } = await $host.get('api/genre');
    return data
}

export const createGame = async (game) => {
    const { data } = await $authHost.post('api/game', game);
    return data
}

export const fetchGames = async (typeId, genreId, page, limit = 5) => {
    const { data } = await $host.get('api/game', { params: {
        typeId, genreId, page, limit
    }});
    return data
}

export const fetchOneGame = async (id) => {
    const { data } = await $host.get('api/game/' + id);
    return data
}