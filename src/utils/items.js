const exampleBasicItemInfo = {
    id: 1, //type: number
    name: "AMD Ryzen 5950X", //type: str
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

const exampleDetailItemInfo = {
    ...exampleBasicItemInfo,
    detailedDescription:
        "商品的详细说明\nAMD will host its Accelerated Data Center Premiere on November 8, 2021 at 11 a.m. ET, showcasing the company's upcoming innovations with AMD EPYC processors and AMD Instinct accelerators. The virtual event is slated to feature presentations from AMD President and CEO Dr. Lisa Su, Senior Vice President and General Manager, Data Center and Embedded Solutions Business Group Forrest Norrod, and Senior Vice President and General Manager, Server Business Unit Dan McNamara. The event will be accessible to the public at this page starting at 11 a.m. ET. A replay will be available and can be accessed after the conclusion of the livestream event.", //type: str
    // 销售额, 单位：元
    sales: 1, //type: number
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

/*
 * @param id: type: number id of the item to be fetched
 * @return item: type: Promise<DetailItemInfo>
 */
export function fetchItemById(id) {
    return Promise.resolve({
        ...exampleDetailItemInfo,
        id: id,
        sales: Math.round(Math.random() * 10000),
        salesVolume: Math.round(Math.random() * 1000),
        reviewCounts: Math.round(Math.random() * 5000),
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
