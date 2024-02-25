
const baseUrl = 'http://localhost:3000/api/api'

export class APIService {
    async validateUserLogin(username: string, password: string){
        const response = await fetch(baseUrl + '/login', {
            method: "POST",
            // mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            // referrerPolicy: "no-referrer",
            body: JSON.stringify({"username": username, "password": password})
        })
        return response.json()
    }
}