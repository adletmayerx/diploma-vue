class Api {
  private _url: string;

  constructor(url: string) {
    this._url = url;
  }

  public getMovies() {
    return fetch(this._url, {
      headers: {},
    }).then(this._checkResult);
  }

  private _checkResult = (res: any) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };
}
const api = new Api("https://api.nomoreparties.co/beatfilm-movies");

export default api;
