import axios from 'axios';


export const layDanhSachPhimAction = () => {
    return (dispatch) => {

        // Gọi action loading open
        dispatch({
            type : 'openLoading'
        })
        setTimeout(async () => {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method : 'GET'
            });
            // Sau khi lấy dữ liệu từ API về sử dụng hàm dispatch của redux thunk để đưa dữ liệu lên server
            dispatch({
                type: 'LAY_DANH_SACH_PHIM',
                mangPhim: result.data
            })
    
            // Tắt loading
            dispatch({
                type: 'closeLoading'
            })
        }, 1000);
    }
}

// Lấy thông tin chi tiết phim

export const getMovieDetailAction = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url : `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            });
            console.log('result',result)
            // Sau khi lấy dữ liệu từ API chúng ta sẽ đưa dữ liệu lên reducer = dispatch
            dispatch({
                type: 'GET_MOVIE_DETAIL',
                chiTietPhim: result.data
            })
        }catch(errors) {
            console.log(errors);
        }
    }
}