import store from "../vuex/store"

/**
 * @return userId type: number
 */
export function getUserId() {
    return store.state.userInfo.id
}
