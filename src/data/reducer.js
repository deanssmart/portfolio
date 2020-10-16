import initial from "./initial";

const home = () => {
    return {
        ...initial,
    };
};

const projects = (state) => {
    return {
        ...state,
        home: false,
        projects: true,
        contact: false,     
    };
};

const contact = (state) => {
    return {
        ...state,
        home: false,
        projects: false,
        contact: true,       
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "HOME_PAGE": return home(state);
        case "PROJECTS_PAGE": return projects(state);
        case "CONTACT_PAGE": return contact(state);
        default: return state;
    };
};

export default reducer;