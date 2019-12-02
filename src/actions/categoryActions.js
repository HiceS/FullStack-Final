export const addCategory = (id) => {
    return {
        type: "ADD_CATEGORY",
        id: id
    }
}

export const deleteCategory = (id) => {
    return {
        type: "DELETE_CATEGORY",
        id: id
    }
}

export const refreshCategory = () => {
    return {
        type: "REFRESH_CATEGORY"
    }
}