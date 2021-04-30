export { }

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

// This is too general
// interface Action {
//     type: string;
//     payload?: any;
// }

// Let's make an Interface for each Actions
interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES; // --> needs to have this exact string!
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

// type union
type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction;

enum ActionType {
    SEARCH_REPOSITORIES = "search_repositories",
    SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
    SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}

const reducer = (
    state: RepositoriesState,
    action: Action,
): RepositoriesState => {


    switch (action.type) {

        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };

        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            // 100% certain that "action" is SearchRepositoriesSuccessAction
            return { loading: false, error: null, data: action.payload };

        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] }

        default:
            return state;


    }
}