/**
 * example usage see ItemManage.vue
 * NOTE: the return function do NOT check whether the page to navigate is overbound(below zero or exceed pageCounts -1)
 * @param fetchFunc type: (page: number) => Promise<PageLike>
 * @param initPage type: number
 * @param callback type: (result: PageLike) => Promise<any>
 * @return navigate type: (offset: number) => void
 */
export function commonNavigator(
    fetchFunc,
    initPage,
    callback,
    { init = false } = {},
) {
    if (init) {
        fetchFunc(initPage).then(res => callback(res))
    }
    return (offset, { absolute = false } = {}) => {
        let to = initPage + offset
        if (absolute) {
            to = offset
        }
        fetchFunc(to)
            .then(res => {
                return callback(res)
            })
            .then(any => {
                /**
                 * use initPage to save current page
                 * update current when request succeed
                 */
                initPage = to
            })
    }
}

/**
 * generate random integral number
 * start: 0(inclusive), end: a(exclusive)
 * @param a type: number, as end
 */
export function randomInt(a) {
    return Math.floor(Math.random() * a)
}

/*
 * @param list: an array-like object
 * @return list[RANDOM]
 */
export function randomChoose(list) {
    return list[randomInt(list.length)]
}

export function generateId(arrayOfEntityLike) {
    if (arrayOfEntityLike.length === 0) {
        return 0
    }
    return (
        arrayOfEntityLike.reduce((pre, cur) => {
            return cur.id > pre.id ? cur : pre
        }).id + 1
    )
}
