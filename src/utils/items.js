const exampleBasicItemInfo = {
    id: 1, //type: number
    name: "Intel Core i9-12900K", //type: str
    price: 1234, //type: number
    sellerId: 1, //type: number
    sellerName: "江南皮革厂", //type: number
    // 评论数量
    reviewCounts: 1, //type: number
    // 销售数量，单位：个
    salesVolume: 1, //type: number
    picture: "/example/shop-profile-pic.jpg",
}

const pageOfArrayOfBasicItemInfo = {
    // ...
    page: 0, //type: number
    counts: 0, //type: number
    value: [exampleBasicItemInfo], //type: basicItemInfo
}
/**
 * fetch items from server by sellerId
 * @param page type: number
 * @param counts type: number
 * @return items type: pageOfArrayOfBasicItemInfo
 */
export function fetchItemsBySellerId(sellerId, page, counts) {
    const result = []
    exampleBasicItemInfo.sellerId = sellerId
    for (let i = 0; i < counts; i++) {
        result.push({ ...exampleBasicItemInfo })
    }
    return { page: page, counts: counts, value: result }
}

// TODO
export function hasMoreItems(any) {
    return true
}
