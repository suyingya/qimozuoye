import React, { useState } from "react";

const TryCatchDemo: React.FC = () => {

    const handleClick = () => {
        try {
          const obj = JSON.parse("{ invalid json }");
          console.log("解析结果：", obj);
        } catch (err: any) {
          console.error("捕获到错误：", err);
        }
        // const obj = JSON.parse("{ invalid json }");
        // console.log("解析结果：", obj);
    };

    return (
        <div>
            <h2>try-catch JSON.parse 错误演示</h2>
            <button onClick={handleClick}>点击触发解析错误</button>
        </div>
    );
};

export default TryCatchDemo;