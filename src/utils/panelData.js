import { reactive } from "@vue/reactivity"
import sgzw from "../assets/cate/cate-sgzw.png"
import lymm from "../assets/cate/cate-lymm.png"
import mmhc from "../assets/cate/cate-mmhc.png"
import nfjg from "../assets/cate/cate-nfjg.png"
import sczw from "../assets/cate/cate-sczw.png"
import shuic from "../assets/cate/cate-shuic.png"
import zzzm from "../assets/cate/cate-zzzm.png"
import qcrd from "../assets/cate/cate-zzzm.png"
export const panelData = reactive([
    {
        navTags: "水果",
        img: sgzw,
        parent: [
            {
                name: "热带水果",
                children: ["芒果", "荔枝", "菠萝", "火龙果"],
            },
            {
                name: "柑橘类",
                children: ["柠檬", "柑桔"],
            },
            {
                name: "浆果类",
                children: ["葡萄", "草莓", "圣女果"],
            },
            {
                name: "瓜果类",
                children: ["西瓜", "甜瓜", "哈密瓜"],
            },
        ],
    },
    {
        navTags: "蔬菜",
        img: sczw,
        parent: [
            {
                name: "葱姜蒜类",
                children: ["韭黄", "蒜苗", "大蒜", "大葱"],
            },
            {
                name: "根茎菜类",
                children: ["萝卜", "胡萝卜"],
            },
            {
                name: "叶菜类",
                children: ["白菜", "小白菜", "生菜"],
            },
            {
                name: "豆菜类",
                children: ["毛豆", "刀豆", "四季豆"],
            },
        ],
    },
    {
        navTags: "禽畜肉蛋",
        img: qcrd,
        parent: [
            {
                name: "禽畜苗",
                children: ["芒果", "荔枝", "菠萝", "火龙果"],
            },
            {
                name: "蛋类",
                children: ["柠檬", "柑桔"],
            },
            {
                name: "活畜",
                children: ["葡萄", "草莓", "圣女果"],
            },
            {
                name: "活禽",
                children: ["西瓜", "甜瓜", "哈密瓜"],
            },
        ],
    },
    {
        navTags: "水产",
        img: shuic,
        parent: [
            {
                name: "水产种苗",
                children: ["芒果", "荔枝", "菠萝", "火龙果"],
            },
            {
                name: "虾类",
                children: ["柠檬", "柑桔"],
            },
            {
                name: "贝类",
                children: ["葡萄", "草莓", "圣女果"],
            },
            {
                name: "食用鱼类",
                children: ["西瓜", "甜瓜", "哈密瓜"],
            },
        ],
    },
    {
        navTags: "农副加工",
        img: nfjg,
        parent: [
            {
                name: "干果坚果",
                children: ["芒果", "荔枝", "菠萝", "火龙果"],
            },
            {
                name: "茶叶",
                children: ["柠檬", "柑桔"],
            },
            {
                name: "肉制品加工",
                children: ["葡萄", "草莓", "圣女果"],
            },
            {
                name: "水产品加工",
                children: ["西瓜", "甜瓜", "哈密瓜"],
            },
        ],
    },
    {
        navTags: "粮油米面",
        img: lymm,
        parent: [
            {
                name: "食用油",
                children: ["芒果", "荔枝", "菠萝", "火龙果"],
            },
            {
                name: "调味品",
                children: ["柠檬", "柑桔"],
            },
            {
                name: "香辛料",
                children: ["葡萄", "草莓", "圣女果"],
            },
            {
                name: "豆制品",
                children: ["西瓜", "甜瓜", "哈密瓜"],
            },
        ],
    },
    {
        navTags: "种子种苗",
        img: zzzm,
        parent: [
            {
                name: "水果种苗",
                children: ["苹果树苗", "梨树苗", "西瓜苗", "火龙果苗"],
            },
        ],
    },
    {
        navTags: "苗木花草",
        img: mmhc,
        parent: [
            {
                name: "乔木",
                children: ["轻木", "酸角树", "香樟"],
            },
            {
                name: "灌木",
                children: ["散沫花", "火龙珠"],
            },
            {
                name: "竹类",
                children: ["竹子"],
            },
            {
                name: "棕榈类",
                children: ["海枣", "棕树", "椰子树"],
            },
        ],
    },
])
