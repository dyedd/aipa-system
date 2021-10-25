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
    picture: "/example/shop-profile-pic.jpg", //type: str
}

const examplePageOfArrayOfBasicItemInfo = {
    // ...
    page: 0, //type: number
    // aka. value.length
    counts: 0, //type: number
    // 总页数
    pageCounts: 10, //type:number
    value: [exampleBasicItemInfo], //type: basicItemInfo
}
/**
 * fetch items from server by sellerId
 * @param page type: number
 * @param counts type: number
 * @return items type: Promise<PageOfArrayOfBasicItemInfo>
 */
export function fetchItemsBySellerId(sellerId, page, counts) {
    const result = []
    exampleBasicItemInfo.sellerId = sellerId
    for (let i = 0; i < counts; i++) {
        result.push({
            ...exampleBasicItemInfo,
            ...{
                id: page * counts + i,
                price: Math.round(Math.random() * 10000),
                reviewCounts: Math.round(Math.random() * 3000),
                salesVolume: Math.round(Math.random() * 3000),
            },
        })
    }
    return Promise.resolve({
        page: page,
        counts: counts,
        value: result,
        pageCounts: 10,
    })
}

export function hasMoreItems(any) {
    if (
        !(
            any.page !== undefined &&
            any.page !== null &&
            any.pageCounts !== null &&
            any.pageCounts !== undefined
        )
    ) {
        throw new Error("this is not a page-like object")
    }
    return any.page < any.pageCounts - 1
}
