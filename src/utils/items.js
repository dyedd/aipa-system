import { randomInt } from "./utils"
import {
    getItemsBySellerIdPaginated,
    newItem,
    deleteItem,
    readItem,
    updateItem,
    searchItemsByKeywordAndSellerId,
    getAllItems,
} from "./db/item-repository"
import { getSellerId } from "./userInfo"

const exampleBasicItemInfo = {
    id: 1, //type: number
    name: "农家土鸡蛋", //type: str
    price: 1234, //type: number
    sellerId: 1, //type: number
    sellerName: "江西特产", //type: number
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
        "上鲜 这个牌子的产品很好，上鲜食品的鸡米花很好吃，之前都是在超市购买，发现网上更实惠！感觉这个牌子的鸡块跟外面买的一样，非常的好吃，煎几分钟就好了。色泽金黄，外酥里嫩，肉质细腻，鸡肉多，只裹了一层薄薄面粉，咸度合适，吃起来肉香味十足，蘸着番茄酱很好吃。拿回来自己炸，挺好吃的，还吃得放心。味道很好，鸡肉软嫩可口，非常美味，有点好吃到停不下来。第一次在京东买生鲜，上鲜 冷冻鸡肉系列食品，品质有保证，零激素，食用放心，500g一大袋，吃过后感觉味道不错。家人一直爱吃上鲜 食品，之前是买的别的组合装，到了夏季就是鸡米花买的更多了。质量真的是很好了，里面是实实在在的鸡肉，不像有些产品。这个能吃到鸡肉，味道也很好，价格赶上搞活动就很划算。包装看着简单干净，一直买这个牌子的鸡冻品，大品牌的质量有保证。 快递也非常速度，吃完来回购了。", //type: str
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
    //    const result = []
    //    exampleBasicItemInfo.sellerId = sellerId
    //    for (let i = 0; i < counts; i++) {
    //        result.push({
    //            ...exampleBasicItemInfo,
    //            ...{
    //                id: page * counts + i,
    //                price: Math.round(Math.random() * 10000),
    //                reviewCounts: Math.round(Math.random() * 3000),
    //                salesVolume: Math.round(Math.random() * 3000),
    //            },
    //        })
    //    }
    //    return Promise.resolve({
    //        page: page,
    //        counts: counts,
    //        value: result,
    //        pageCounts: 10,
    //    })
    return new Promise((resolve, reject) => {
        resolve(getItemsBySellerIdPaginated(sellerId, page, counts))
    })
}

/**
 * @param item type: modifiableDetailItemInfo without id
 */
export function createItem(item) {
    //    return Promise.resolve({
    //        ...exampleDetailItemInfo,
    //        ...newItem,
    //        id: randomInt(1000) + 1000,
    //    })
    return Promise.resolve(newItem(item, getSellerId()))
}

/*
 * @param id
 * @return Promise<any>
 */
export function removeItemById(id) {
    return new Promise((resolve, reject) => {
        const result = deleteItem(id)
        if (result) {
            resolve(true)
        } else {
            reject(new Error("NOT FOUND"))
        }
    })
}

/*
 * @param id type: number id of the item to be fetched
 * @return item: type: Promise<DetailItemInfo>
 */
export function fetchItemById(id) {
    //    return Promise.resolve({
    //        ...exampleDetailItemInfo,
    //        id: id,
    //        sales: Math.round(Math.random() * 10000),
    //        salesVolume: Math.round(Math.random() * 1000),
    //        reviewCounts: Math.round(Math.random() * 5000),
    //    })
    return new Promise((resolve, reject) => {
        const result = readItem(id)
        if (result) {
            resolve(result)
        } else {
            reject(new Error("NOT FOUND"))
        }
    })
}

export function fetchAllItems() {
    return Promise.resolve(getAllItems())
}

/*
 * @param id type: number id of the item to be modified
 * @param modifiableDetailItemInfo type: ModifiableDetailItemInfo
 * @return result type: Promise<DetailItemInfo>
 */
export async function updateItemById(id, modifiableDetailItemInfo) {
    //    const value = await fetchItemById(id)
    //    return {
    //        ...value,
    //        ...modifiableDetailItemInfo,
    //    }
    return new Promise((resolve, reject) => {
        const result = updateItem(id, modifiableDetailItemInfo)
        if (result) {
            resolve(result)
        } else {
            reject(new Error("NOT FOUND"))
        }
    })
}

export function fetchItemsByKeywordAndSellerId(sellerId, keyword) {
    return Promise.resolve(searchItemsByKeywordAndSellerId(sellerId, keyword))
}
export function hasMoreItems(pageLike) {
    if (
        !(
            pageLike.page !== undefined &&
            pageLike.page !== null &&
            pageLike.pageCounts !== null &&
            pageLike.pageCounts !== undefined
        )
    ) {
        throw new Error("this is not a page-like object")
    }
    return pageLike.page < pageLike.pageCounts - 1
}

/**
 * generate modifiableDetailItemInfo, for  modifying existing item
 * @param item: type: DetailItemInfo, defined above
 * @return result: type: ModifiableDetailItemInfo
 */
export function generateModifiableDetailItemInfo(item) {
    const { id, name, price, detailedDescription, picture } = item
    return { id, name, price, detailedDescription, picture }
}
