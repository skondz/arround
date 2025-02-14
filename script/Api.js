class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((error) => console.log("Error", error));
  }
}
export const api = new Api("https://around-api.es.tripleten-services.com/v1/", {
  authorization: "5cb824c7-18ee-4a7f-a0d4-afa785bcbcee",
});
