import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getMovieDetailAction } from '../../redux/actions/PhimAction';

export default function Details(props) { // props giống this.props

    const {chiTietPhim} = useSelector(state => state.PhimReducer);

    const dispatch = useDispatch();
    // Tự gọi API khi trang vừa load
    useEffect(() => {
        // Lấy tham số từ url
        let {id} = props.match.params;
        // Gọi action truyền vào id phim
        dispatch(getMovieDetailAction(id))
    }, [])

    return (
        <div className="container">
            {/* Id: {props.match.params.id} */}
            <div className="row mt-5">
                <div className='col-6'>
                    <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.tenPhim} className="w-100" />
                </div>
                <div className='col-6'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên phim</th>
                                <th>{chiTietPhim.tenPhim}</th>
                            </tr>
                            <tr>
                                <th>Mô tả</th>
                                <th>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem dolorum consequuntur cupiditate magnam. Perferendis minus praesentium amet distinctio aut error recusandae dolore earum blanditiis? Aut, facere? Laboriosam, laborum error.</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}
