import { panelData } from "../utils/panelData"
import { getAllUsers } from "../utils/db/users"
import { generateId } from "../utils/utils"
// 添加注册用户
export const register = ({ commit }, data) => {
    return new Promise((resolve, reject) => {
        const users = getAllUsers()
        users.push({
            ...data,
            group: 0,
            id: generateId(users),
        })
        localStorage.setItem("users", JSON.stringify(users))
    })
}

// 用户登录
export const login = ({ commit }, data) => {
    return new Promise((resolve, reject) => {
        if (data.username === "zhangsan" && data.password === "123456") {
            localStorage.setItem(
                "loginInfo",
                JSON.stringify({
                    ...data,
                    id: 0,
                    group: 2,
                }),
            )
            commit("SET_USER_LOGIN_INFO", data)
            resolve(true)
            return
        }
        // 搜索localstorage
        const userArr = localStorage.getItem("users")
        if (userArr) {
            const users = JSON.parse(userArr)
            for (const item of users) {
                if (item.username === data.username) {
                    localStorage.setItem("loginInfo", JSON.stringify(item))
                    commit("SET_USER_LOGIN_INFO", item)
                    resolve(true)
                    break
                }
            }
        } else {
            resolve(false)
        }
    })
}

// 退出登陆
export const signOut = ({ commit }) => {
    localStorage.removeItem("loginInfo")
    commit("SET_USER_LOGIN_INFO", {})
}
// 自动登录
export const autoLogin = ({ commit }, data) => {
    return new Promise((resolve, reject) => {
        localStorage.setItem(
            "loginInfo",
            JSON.stringify({
                ...data,
                group: 2,
            }),
        )
        commit("SET_USER_LOGIN_INFO", data)
        resolve(true)
    })
}
// 判断是否登陆
export const isLogin = ({ commit }) => {
    const user = localStorage.getItem("loginInfo")
    if (user) {
        commit("SET_USER_LOGIN_INFO", JSON.parse(user))
    }
}

// 加载商品分类
export const loadPanelSort = ({ commit }) => {
    return new Promise((resolve, reject) => {
        commit("SET_GOODS_SORT", panelData)
    })
}
// 加载商品轮播图
export const loadCarouselItems = ({ commit }) => {
    return new Promise((resolve, reject) => {
        const data = {
            carouselItems: [
                {
                    url: "#",
                    image: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/1.jpg",
                },
                {
                    url: "#",
                    image: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/2.jpg",
                },
                {
                    url: "#",
                    image: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/3.jpg",
                },
            ],
            activity: [
                {
                    url: "#",
                    image: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/d2569b7b6c1c4ea4a2d43eafa6253fbe.jpg",
                },
                {
                    url: "#",
                    image: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/c620f9898f8b4fcaa42a6f449afe733f.jpg",
                },
            ],
        }
        commit("SET_CAROUSELITEMS_INFO", data)
    })
}
export const loadSeckillsInfo = ({ commit }) => {
    return new Promise((resolve, reject) => {
        const data = [
            {
                intro: "山东生姜批发基地，老姜，鲜姜大黄姜，小黄姜",
                img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/seckill/s1.jpg",
                price: 0.6,
                realPrice: 1.2,
            },
            {
                intro: "绿心黑豆大黑豆苏北农家自产青仁黑豆黄心黑豆可作黑豆籽包邮费",
                img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/seckill/s2.jpeg",
                price: 4.9,
                realPrice: 12.96,
            },
            {
                intro: "小木耳黑木耳首选",
                img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/seckill/s3.jpeg",
                price: 15.0,
                realPrice: 20.0,
            },
            {
                intro: "77%氢氧化铜可湿性粉剂 针对细菌性溃疡 角斑病",
                img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/seckill/s4.jpg",
                price: 7.5,
                realPrice: 10.0,
            },
            {
                intro: "叶面肥 酶解鱼蛋白深海鱼定向酶切技术，分子量小，活性更高",
                img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/seckill/s5.jpg",
                price: 20.0,
                realPrice: 25.0,
            },
            {
                intro: "荞麦米甜荞 荞麦米粗粮养生粮",
                img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/seckill/s6.jpeg",
                price: 160.0,
                realPrice: 165.0,
            },
        ]

        // 距离开始秒杀时间
        const deadline = {
            hours: Math.floor(Math.random() * 12),
            minute: Math.floor(Math.random() * 60),
            seconds: Math.floor(Math.random() * 60),
        }
        commit("SET_SECKILLS_INFO", [data, deadline])
    })
}
export const loadNewGoods = ({ commit }) => {
    return new Promise((resolve, reject) => {
        const data = [
            {
                name: "荷兰香蜜杏苗",
                img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/new/1.jpg",
                desc: "嫁接荷兰香蜜杏苗 新品种 个头超大 适应南北方 基地现挖现发",
                price: "5.50",
            },
            {
                name: "水果黄瓜种子",
                img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/new/2.jpeg",
                desc: "杂交抗病纯磁坐果性好，长势旺，脆甜，无苦味，瓜皮嫩绿",
                price: "25.00",
            },
            {
                name: "泡核桃",
                img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/new/3.jpeg",
                desc: "新货一件代发 大果云南薄皮核桃5斤9斤装包邮电商供应大 麻子",
                price: "9.90",
            },
            {
                name: "荷兰香蜜杏苗",
                img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/new/4.jpeg",
                desc: "100% 2年 塑料瓶装",
                price: "120.00",
            },
            {
                name: "南非西柚",
                img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/new/5.jpg",
                desc: "4个/6个装 果肉饱满 酸苦多汁",
                price: "19.90",
            },
        ]
        commit("SET_NEW_GOODS", data)
    })
}
export const loadHot = ({ commit }) => {
    return new Promise((resolve, reject) => {
        const data = {
            link: [
                "休闲零食",
                "坚果",
                "牛奶",
                "饮料冲调",
                "食用油",
                "大米",
                "白酒",
                "红酒",
                "烧烤食材",
                "牛排",
                "樱桃",
            ],
            detail: [
                {
                    bigImg: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/big1.jpg",
                    itemFour: [
                        {
                            title: "草莓苗",
                            intro: "买2免1",
                            img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/1.jpg",
                        },
                        {
                            title: "饮料冲调",
                            intro: "第二件半价",
                            img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/2.jpg",
                        },
                        {
                            title: "休闲零食",
                            intro: "满99减40",
                            img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/3.jpg",
                        },
                        {
                            title: "无核香脆枣",
                            intro: "粮票抵2%",
                            img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/4.jpeg",
                        },
                    ],
                    itemContent: [
                        "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/bottom1.jpg",
                        "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/bottom1.jpg",
                        "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/bottom1.jpg",
                    ],
                },
                {
                    bigImg: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/big1.jpg",
                    itemFour: [
                        {
                            title: "新鲜红心猕猴桃",
                            intro: "丰富好味",
                            img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/5.jpeg",
                        },
                        {
                            title: "攀枝花小贵妃芒",
                            intro: "特级果",
                            img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/6.jpeg",
                        },
                        {
                            title: "波尔山羊",
                            intro: "山羊批发",
                            img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/7.jpeg",
                        },
                        {
                            title: "烤海鸭蛋",
                            intro: "丰富好味",
                            img: "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/8.jpg",
                        },
                    ],
                    itemContent: [
                        "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/bottom1.jpg",
                        "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/bottom1.jpg",
                        "https://aipi-tust.obs.cn-north-4.myhuaweicloud.com:443/hot/bottom1.jpg",
                    ],
                },
            ],
        }
        commit("SET_HOT_INFO", data)
    })
}
export const loadAddress = ({ commit }) => {
    return new Promise((resolve, reject) => {
        const address = [
            {
                addressId: "123456",
                name: "Gavin",
                province: "广东省",
                city: "广州市",
                area: "天河区",
                address: "燕岭路633号",
                phone: "152****0609",
                postalcode: "510000",
            },
            {
                addressId: "123458",
                name: "Kevin",
                province: "上海市",
                city: "上海市",
                area: "浦东新区",
                address: "沙新镇",
                phone: "158****0888",
                postalcode: "200120",
            },
        ]
        commit("SET_USER_ADDRESS", address)
    })
}
// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
    return new Promise((resolve, reject) => {
        commit("ADD_SHOPPING_CART", data)
    })
}
//   加载购物车
export const loadShoppingCart = ({ commit }) => {
    return new Promise((resolve, reject) => {
        const data = [
            {
                count: 1,
                img: "https://image.cnhnb.com/image/jpeg/head/2021/03/01/2d6fcca804ec4daab7b7a2bd9aa9dfe0.jpeg?imageView2/1/w/525/h/525/format/jpg/interlace/1/quality/100/ignore-error/1",
                package: "一斤",
                price: 28,
                title: "苹果",
            },
        ]
        commit("SET_SHOPPING_CART", data)
    })
}
