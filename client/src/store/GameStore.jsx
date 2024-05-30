import { makeAutoObservable } from 'mobx';

export default class GameStore {
    constructor() {
        this._types = [];
        this._genres = [];
        this._games = [];
        this._selectedType = {};
        this._selectedGenre = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 8;
        makeAutoObservable(this); // mobx отслеживает изменение состояния
    }

    setTypes(types) {
        this._types = types;
    }

    setGenres(genres) {
        this._genres = genres;
    }

    setGames(games) {
        this._games = games;
    }

    setSelectedType(type) {
        this.setPage(1);
        this._selectedType = type;
    }

    setSelectedGenre(genre) {
        this.setPage(1);
        this._selectedGenre = genre;
    }

    setPage(page) {
        this._page = page;
    }

    setTotalCount(count) {
        this._totalCount = count;
    }

    get types() {
        return this._types;
    }

    get genres() {
        return this._genres;
    }

    get games() {
        return this._games;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedGenre() {
        return this._selectedGenre;
    }

    get page() {
        return this._page;
    }

    get totalCount() {
        return this._totalCount;
    }

    get limit() {
        return this._limit;
    }
}
