const stateDatVe = {
  danhSachGheDangDat: [
    // { maGhe: "01", giaVe: 75000, stt: "01" },
    // { maGhe: "02", giaVe: 75000, stt: "02" },
  ],
};

export const QuanLyDatVeReducer = (state = stateDatVe, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      // Kiểm tra ghế có trong mảng danhSachGheDangDat => có xóa, không thì thêm vào
      let index = state.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === action.ghe.maGhe
      );
      if (index !== -1) {
        state.danhSachGheDangDat.splice(index, 1);
      } else {
        state.danhSachGheDangDat.push(action.ghe);
      }
      // Cập nhật lại state
      state.danhSachGheDangDat = [...state.danhSachGheDangDat];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
