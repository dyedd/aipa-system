import { generateId } from "../utils"

const ITEM_INDEX = "item"

const exampleBasicItemInfo = {
    id: -1, //type: number
    name: "NAME", //type: str
    price: -1, //type: number
    sellerId: 1, //type: number
    sellerName: "SELLER NAME", //type: number
    // 评论数量
    reviewCounts: 0, //type: number
    // 销售数量，单位：个
    salesVolume: 0, //type: number
    picture: "", //type: str
}
const DefaultDetailItemInfo = {
    ...exampleBasicItemInfo,
    detailedDescription: "商品的说明", //type: str
    // 销售额, 单位：元
    sales: 0, //type: number
}
function getRaw() {
    return localStorage.getItem(ITEM_INDEX)
}
function setRaw(str) {
    localStorage.setItem(ITEM_INDEX, str)
}
export function getAllItems() {
    const rawItems = getRaw()
    if (!rawItems) {
        return []
    }
    return JSON.parse(rawItems)
}

export function getAllItemsBySellerId(sellerId) {
    return getAllItems().filter(item => {
        return item.sellerId === sellerId
    })
}
export function getItemsBySellerIdPaginated(sellerId, page, counts) {
    const allItems = getAllItemsBySellerId(sellerId)
    const pageCounts = Math.ceil(allItems.length / counts)
    const offset = page * counts
    if (offset >= allItems.length) {
        return { page: page, counts: 0, value: [], pageCounts: pageCounts }
    }
    let endExclusive = offset + counts
    if (offset + counts > allItems.length) {
        endExclusive = allItems.length
        counts = endExclusive - offset
    }
    return {
        page: page,
        counts: counts,
        value: allItems.slice(offset, endExclusive),
        pageCounts: pageCounts,
    }
}

export function newItem(item, sellerId) {
    const items = getAllItems()
    item.id = generateId(items)
    items.push({
        ...DefaultDetailItemInfo,
        ...item,
        sellerId: sellerId,
    })
    setRaw(JSON.stringify(items))
    return item
}
export function readItem(id) {
    for (let item of getAllItems()) {
        if (item.id === id) {
            return item
        }
    }
    // NOT FOUND
    return null
}

export function updateItem(id, modifiedItem) {
    const allItems = getAllItems()
    for (let item of allItems) {
        if (id === item.id) {
            Object.assign(item, modifiedItem)
            setRaw(JSON.stringify(allItems))
            return item
        }
    }
    // NOT FOUND
    return null
}

export function deleteItem(id) {
    const allItems = getAllItems()
    for (let item of allItems) {
        if (item.id === id) {
            allItems.splice(allItems.indexOf(item), 1)
            setRaw(JSON.stringify(allItems))
            return true
        }
    }
    //  NOT FOUND
    return false
}

/**
 * @param keyword type: str
 */
export function searchItemsByKeywordAndSellerId(sellerId, keyword) {
    return getAllItemsBySellerId(sellerId).filter(item => {
        return (
            item.name.indexOf(keyword) !== -1 ||
            item.detailedDescription.indexOf(keyword) !== -1
        )
    })
}
