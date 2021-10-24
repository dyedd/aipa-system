const exampleBasicBill = {
    // 订单号
    id: 1, //type: number
    itemId: 1, //type: number
    itemName: "Intel Core i9-12900K", //type: str
    price: 1234, //type: number
    buyerId: 1, //type: number
    buyerName: "Name", //type: str
    date: "2021-01-01 12:13", //type: TBD
}
/**
 * @param sellerId type: number
 * @param page type: number
 * @param counts type: number
 * @return billInfo type: pageOfArrayOfBills
 */
export function getBillsBySellerId(sellerId, page, counts) {
    exampleBasicBill.id = sellerId
    const result = []
    for (let i = 0; i < counts; i++) {
        result.push({ ...exampleBasicBill })
    }
    return { page: page, counts: counts, value: result }
}
