import store from "../vuex/store"

/**
 * @return userId type: number
 */
export function getSellerId() {
    return store.state.sellerInfo.id
}
