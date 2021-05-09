import React from 'react';

const CategoryEdit = (props) => {
    const { changeColor, changeName, categoryDetails } = props;
    return (
        <div className="category-edit">
            <label>צבע רקע-שם קטגוריה:</label>
            <select value={categoryDetails.color} onChange={(ev) => changeColor(ev)}>
                <option value='rgb(237 28 36)'>אדום</option>
                <option value="rgb(0 0 255)">כחול</option>
                <option value="rgb(25 210 25)">ירוק</option>
                <option value="rgb(245 245 16)">צהוב</option>
            </select>
            <label>שם קטגוריה:</label>
            <input type="text" value={categoryDetails.category} onChange={(ev) => changeName(ev)} />
        </div>
    )
}

export default CategoryEdit;