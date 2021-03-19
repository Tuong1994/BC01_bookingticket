const stateDefault = {
    mangPhim : [],
    chiTietPhim: {},
}

export const PhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_PHIM' : {
            state.mangPhim = [...action.mangPhim]
            return {...state}
        }

        case 'GET_MOVIE_DETAIL' : {
            state.chiTietPhim = action.chiTietPhim;
            return {...state};
        }
        default:
            return {...state}
    }
}

