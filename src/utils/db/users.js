const USER_INDEX = "users"
export function getAllUsers() {
    const userArr = localStorage.getItem(USER_INDEX)
    if (userArr === null || userArr === underline || userArr === "") {
        return []
    }
    return JSON.parse(userArr)
}
