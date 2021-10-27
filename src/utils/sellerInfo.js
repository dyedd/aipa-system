import {
    getSellerInfoById,
    newSeller,
    updateSellerById,
    validatePassByUsn,
} from "./db/sellers-repository"
const exampleSellerInfo = {
    id: 1, //type: number
    username: "", //type: str
    name: "江南皮革厂", //type: str
    joinTime: "2021-01-01", //type: TBD
    location: "浙江 温州", //type: str
    // 商品数量
    itemCount: 0, //type: number
    // 销售量
    salesVolume: 0, //type: number
    // 1:1 图片
    profilePicture: "/example/shop-profile-pic.jpg", //type: str
    //简介
    description: "", //type: str
}

export function login({ username, password }) {
    return new Promise((resolve, reject) => {
        const result = validatePassByUsn(username, password)
        if (result === -1) {
            reject(new Error("密码错误"))
        }
        if (result === null) {
            reject(new Error("用户不存在"))
        }
        resolve(result)
    })
}
export function register(info) {
    return Promise.resolve(newSeller(info))
}

/**
 * fetch information from server and return,
 *
 * @param id, type: number
 * @return Promise<SellerInfo>, type defined above
 */
export function fetchSellerInfoById(id) {
    //    return Promise.resolve({
    //        ...exampleSellerInfo,
    //        id: id,
    //    })
    return new Promise((resolve, reject) => {
        const result = getSellerInfoById(id)
        if (result) {
            resolve(result)
        } else {
            reject(new Error("NOT FOUND"))
        }
    })
}

/**
 * send new information to server
 * @param id type: number
 * @param modifiableInfo returned from generateModifiableInfo
 * @return Promise<SellerInfo> new sellerInfo returned from server
 */
export async function updateSellerInfoById(id, modifiableSellerInfo) {
    //    const res = await fetchSellerInfoById(id)
    //    return { ...res, ...modifiableSellerInfo, id }
    return new Promise((resolve, reject) => {
        const result = updateSellerById(id, modifiableSellerInfo)
        if (result) {
            resolve(result)
        } else {
            reject(new Error("NOT FOUND"))
        }
    })
}

/**
 * generate modifiableInfo, for saving and post modifed information
 * modifedInfo defined in function
 *
 * @param sellerInfo returned from fetchSellerInfo
 * @return modifiableSellerInfo
 */
export function generateModifiableSellerInfo(sellerInfo) {
    const modifiableInfo = {
        id: sellerInfo.id, //type: number
        name: sellerInfo.name, //type: str
        location: sellerInfo.location, //type: str
        description: sellerInfo.description, //type: str
    }
    return modifiableInfo
}
