//_"name" - такие переменные нельзя изменять. Принятый стандарт
import { makeAutoObservable } from 'mobx'

export default class UserStore {
    constructor(){
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this) // следит за их изменениями
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    // аксессоры
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}