const exampleSellerInfo = {
    id: 1, //type: number
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
/**
 * fetch information from server and return,
 *
 * @param id, type: number
 * @return Promise<SellerInfo>, type defined above
 */
export function fetchSellerInfoById(id) {
    return Promise.resolve({
        ...exampleSellerInfo,
        id: id,
    })
}

/**
 * send new information to server
 * @param id type: number
 * @param modifiableInfo returned from generateModifiableInfo
 * @return Promise<SellerInfo> new sellerInfo returned from server
 */
export async function updateSellerInfoById(id, modifiableSellerInfo) {
    const res = await fetchSellerInfoById(id)
    return { ...res, ...modifiableSellerInfo, id }
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
