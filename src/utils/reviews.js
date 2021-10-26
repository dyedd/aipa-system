const exampleReview = {
    id: 1, //type: number
    userId: 1, //type: number
    userName: "冷冽谷的波尔多", //type: str
    itemId: 1, //type: number
    itemName: "AMD Ryzen 5950X", //type: str
    userProfilePicture: "/example/vordt.webp", //type: str
    date: "2021-01-01 10:11", //type: str
    content:
        "帮人配的,日常使用、办公绝对够了。主板和分开两个快递送,到货慢了点,东西没问题,新cpu,所以事先主板接电用U盘刷了bios,一次点亮,性能很强,在显卡天价的情况下性价比很高,朋友很满意。好评", //type: str
    // 评分 min: 1 max: 5
    rate: 0, //type: number
}

const examplePageOfArrayOfReview = {
    page: 0, //type: number
    counts: 0, //type: number
    pageCounts: 0, //type: number
    value: [exampleReview],
}
/*
 * @param id type: number
 * @param page type: number
 * @param counts type: counts number of reviews want to be fetched
 * @return result type: Promise<PageOfArrayOfReview> defined above
 */
export function fetchReviewsByItemId(id, page, counts) {
    const result = []
    for (let i = 0; i < counts; i++) {
        result.push({
            ...exampleReview,
            id: page * counts + i,
            itemId: id,
            rate: Math.floor(Math.random() * 5) + 1,
        })
    }
    return Promise.resolve({
        page: page,
        counts: counts,
        pageCounts: 10,
        value: result,
    })
}
