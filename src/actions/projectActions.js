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

export const refreshProject = () => {
    return dispatch => {
        return fetch("https://raw.githubusercontent.com/HiceS/FullStack-Final/master/src/dataSample.json")
          .then(handleErrors)
          .then(res => res.json())
          .then(json => {
            dispatch(createProject(json.products));
            return json.products;
          })
          .catch(error => {console.log("Error Cannot refresh")});
    };
}

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}

export const createProject = (project) => {
    console.log(project);
    return {
        type: "CREATE_PROJECT",
        project: project
    }
}