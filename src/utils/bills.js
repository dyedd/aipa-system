import { randomChoose, randomInt } from "./utils"

const BILL_STATES = {
    CONFIRMED: {
        code: "confirmed",
        text: "已提交",
    },
    PAYED: {
        code: "payed",
        text: "已付款",
    },
    SHIPPED: {
        code: "shipped",
        text: "已发货",
    },
    CANCELED: {
        code: "canceled",
        text: "已取消",
    },
    COMPLETED: {
        code: "completed",
        text: "已完成",
    },
}

export function getTextByCode(code) {
    for (let entity of Object.keys(BILL_STATES).map(key => BILL_STATES[key])) {
        if (entity.code === code) {
            return entity.text
        }
    }
    throw new Error("code not found")
}
const CODE_LIST = Object.keys(BILL_STATES).map(key => BILL_STATES[key].code)

const exampleBasicBill = {
    // 订单号
    id: 1, //type: number
    itemId: 1, //type: number
    itemName: "农家土鸡蛋", //type: str
    price: 1234, //type: number
    buyerId: 1, //type: number
    buyerName: "张三", //type: str
    date: "2021-01-01 12:13", //type: str
    state: BILL_STATES.CONFIRMED.code,
}
/**
 * @param sellerId type: number
 * @param page type: number
 * @param counts type: number
 * @return billInfo type: pageOfArrayOfBills
 */
export function fetchBillsBySellerId(sellerId, page, counts) {
    exampleBasicBill.id = sellerId
    const result = []
    for (let i = 0; i < counts; i++) {
        result.push({
            ...exampleBasicBill,
            id: randomInt(100000),
            price: randomInt(1000),
            state: randomChoose(CODE_LIST),
            get stateText() {
                return getTextByCode(this.state)
            },
        })
    }
    return Promise.resolve({
        page: page,
        counts: counts,
        pageCounts: 10,
        value: result,
    })
}

const exampleDetailBill = {
    ...exampleBasicBill,
    phone: "1234312", //type: str
    destination: "中国", //type: str
    // 运费
    shipFee: 6, //type: number
    shipInfo: "厂商配送",
    // 快递单号
    shipNumber: "123123123", //type: str
}
/**
 * @param id type number
 * @return billDetail type Promise<DetailBill>
 */
export function fetchBillById(id) {
    return Promise.resolve({
        ...exampleDetailBill,
        id: id,
        phone: randomInt(1000000000) + 1000000000 + "",
        shipFee: randomInt(6) + 10,
        shipNumber: randomInt(1000000000) + 1000000000 + "",
        get stateText() {
            return getTextByCode(this.state)
        },
    })
}
