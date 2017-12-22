export const UPDATE_FILES='UPDATE_FILES';
export const UPDATE_STAR='UPDATE_STAR';
export const UPDATE_PARENT='UPDATE_PARENT';
export const USER_ACTIVITES='USER_ACTIVITES';
export const ACTIVITES='ACTIVITES';


export function filedisplay(data) {
    return {
        type: 'UPDATE_FILES',
        data,
    };
}

export function stardisplay(data) {
    return {
        type: 'UPDATE_STAR',
        data,
    };
}

export function updateparent(data) {
    return {
        type: 'UPDATE_PARENT',
        data,
    };
}


export function useractivity(data) {
    return {
        type: 'USER_ACTIVITES',
        data,
    };
}

export function activity(data) {
    return {
        type: 'ACTIVITES',
        data,
    };
}
