export const getUserss = (state) => {
    return state.friendGroupPage.users
}

export const getPageSize = (state) => {
    return state.friendGroupPage.UersPageSize
}

export const getUsersTotalCount = (state) => {
    return state.friendGroupPage.UsersTotalCount
}

export const getSelectedPage = (state) => {
    return state.friendGroupPage.SelectedPage
}

export const getIsLoading = (state) => {
    return state.friendGroupPage.isLoading
}

export const getFollowing = (state) => {
    return state.friendGroupPage.followingInProgress
}