import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <div className="mng4">
                    <p id="loi">Lỗi, nhập lại</p>
                    <p id="tc">Thành công</p>
                </div>
                <div className="txs">
                    <p id="txtthem">Thêm<button id="txtxoa">X</button></p>
                    <label htmlFor="thanhvien">Thành Viên</label>
                    <input type="text" name="thanhvien" placeholder="Nhập thành viên..." />
                    <label htmlFor="matkhau">Mật khẩu</label>
                    <input type="text" name="matkhau" placeholder="Nhập mật khẩu..." />
                    <label htmlFor="quyen">Quyền</label>
                    <select name="quyen">
                    <option value="qtv">Quản trị viên</option>
                    <option value="nv">Nhân viên</option>
                    <option value="cch">Chủ cửa hàng</option>
                    </select>
                    <button type="submit">Thêm</button>
                </div>
            </div>
        );
    }
}

export default Form;