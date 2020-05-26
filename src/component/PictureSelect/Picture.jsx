import React, { useState } from "react";
import "./index.css";
const PictureSelect = ({ pictures, onChange }) => {
  const [value, setValue] = useState(pictures);
  const [kai, setKai] = useState(false);
  /**
   * 选择某一个图片
   * @param id 点击的ID
   */
  const setPictureData = (id) => {
    const data = value;
    const newData = data.filter((v) => {
      if (v.id === id) {
        v.kai = !v.kai;
      }
      return v;
    });
    setValue([...newData]);
    updatePic();
  };
  /**
   * 选择首页的图片
   */
  const showAll = () => {
    updateData();
    setKai(!kai);
    updatePic();
  };
  /**
   * 更新视图
   */
  const updateData = () => {
    const newData = value.filter((v) => {
      kai === false?v.kai = true:v.kai = false
      return v;
    });
    setValue([...newData]);
  };
  /**
   * 数据传递到父组件当中
   */
  const updatePic = () => {
    let flag = 0;
    let arr = [];
    value.forEach((v) => {
      if (v.kai === true) {
        flag++;
        arr.push(v.id);
      }
    });
    if (flag === value.length) {
      setKai(true);
    } else {
      setKai(false);
    }
    onChange(arr);
  };
  let num = 0;
  value.filter((v) => {
    if (v.kai === true) {
      num++;
    }
    return v.kai === true ? v.id : null;
  });
  return Array.isArray(pictures) ? (
    <div>
      <input
        id="foo"
        type="checkbox"
        onChange={showAll}
        checked={kai}
      />
      <label htmlFor="foo">
        {num > 0 ? "已经选中" + num + "文件" : "没有选中文件"}
      </label>
      <ul>
        {value.map((v) => {
          return (
            <li key={v.id} onClick={() => setPictureData(v.id)}>
              <span className={v.kai ? "show" : ""}></span>
              <img src={v.url} alt=""/>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div>图片格式不存在</div>
  );
};

export default React.memo(PictureSelect);
