// 添加注册用户
export const register = ({ commit }, data) => {
    return new Promise((resolve, reject) => {
        const userArr = localStorage.getItem("users")
        let users = []
        if (userArr) {
            users = JSON.parse(userArr)
        }
        users.push({ ...data, group: 0 })
        localStorage.setItem("users", JSON.stringify(users))
    })
}

// 用户登录
export const login = ({ commit }, data) => {
    return new Promise((resolve, reject) => {
        if (data.username === "zhangsan" && data.password === "123456") {
            localStorage.setItem(
                "loginInfo",
                JSON.stringify({ ...data, group: 2 }),
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

// 判断是否登陆
export const isLogin = ({ commit }) => {
    const user = localStorage.getItem("loginInfo")
    if (user) {
        commit("SET_USER_LOGIN_INFO", JSON.parse(user))
    }
}
