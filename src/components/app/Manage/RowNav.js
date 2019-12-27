import React, { Component } from 'react';

class RowNav extends Component {
    render() {
        return (
            <div>
                <tr>
                        <td>1</td>
                        <td>tên gì dài dài tí cho đủ hàng</td>
                        <td>quyền</td>
                        <td>
                            <button type="submit">Sửa</button>
                            <button type="submit">Xóa</button>
                        </td>
                    </tr>
            </div>
        );
    }
}

export default RowNav;