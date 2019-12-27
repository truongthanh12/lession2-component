import React, { Component } from 'react';
import RowNav from './RowNav';

class Table extends Component {
    render() {
        return (
            <div>
                <div className="mng3">
                <table>
                    <tbody>
                        <tr>
                            <td>STT</td>
                            <td>Thành viên</td>
                            <td>Quyền hạng</td>
                            <td>
                                <button type="submit">Thêm</button>
                                <button type="submit">Đóng</button>
                            </td>
                        </tr>
                    <RowNav />
                </tbody>
                    </table>
            </div>
            </div>
        );
    }
}

export default Table;