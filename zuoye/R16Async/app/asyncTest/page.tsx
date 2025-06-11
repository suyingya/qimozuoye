'use client'
import { useEffect } from "react";

const AsyncTest = () => {
  useEffect(() => {
    const asyncFn=()=>{
      console.log("异步函数开始");
      setTimeout(() => {
        console.log("这是异步操作(1秒后执行)");
      }, 1000);
      console.log("异步函数结束");
    }
    asyncFn();
  }, []);

  return (
    <div>
      <h2>同步与异步函数测试</h2>
      <p>请打开控制台查看输出顺序。</p>
    </div>
  );
}

export default AsyncTest;