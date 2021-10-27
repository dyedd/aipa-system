const SELLER_INDEX = "seller"

function getRaw() {
    return localStorage.getItem(SELLER_INDEX)
}
function setRaw(str) {
    localStorage.setItem(SELLER_INDEX, str)
}
function saveAll(allSellers) {
    setRaw(JSON.stringify(allSellers))
}
export function validatePassByUsn(username, password) {
    for (let seller of getAllSellers()) {
        if (seller.username === username) {
            if (seller.password === password) {
                return { ...seller }
            } else {
                return -1
            }
        }
    }
    return null
}
export function getAllSellers() {
    const raw = getRaw()
    if (raw == null || raw == "") {
        return []
    }
    return JSON.parse(raw)
}
export function newSeller(seller) {
    const allSellers = getAllSellers()
    seller = {
        ...seller,
        id: allSellers.length,
    }
    allSellers.push(seller)
    saveAll(allSellers)
    return { ...seller }
}
export function updateSellerById(id, newInfo) {
    const allSellers = getAllSellers()
    for (let seller of allSellers) {
        if (seller.id === id) {
            Object.assign(seller, newInfo)
            saveAll(allSellers)
            return { ...seller }
        }
    }
    return null
}
export function getSellerInfoById(id) {
    for (let seller of getAllSellers()) {
        if (seller.id === id) {
            return { ...seller }
        }
    }
    return null
}
