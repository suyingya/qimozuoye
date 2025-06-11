import React, { useEffect, useState } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

const AsyncTest2: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 异步函数：获取宝可梦数据
  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/1'); // 获取宝可梦数据（比如宝可梦ID=1，即皮卡丘）
      if (!response.ok) {
        throw new Error('数据请求失败');
      }

      const data = await response.json(); // 解析返回的 JSON 数据
      console.log("返回的数据",data); // 打印数据到控制台，方便查看
      setPokemon({
        name: data.name,
        url: data.forms[0].url,
      });
    } catch (error: any) {
      setError(error.message); // 捕获并显示错误信息
    }
  };

  useEffect(() => {
    console.log("开始调用异步函数");
    fetchPokemon(); // 组件加载时调用异步函数
    console.log("结束调用异步函数");
  }, []);

  return (
    <div>
      <h1>宝可梦信息</h1>
      {error && <p style={{ color: 'red' }}>出错了：{error}</p>}
      {pokemon ? (
        <div>
          <h2>宝可梦名字：{pokemon.name}</h2>
          <p>宝可梦详情链接：<a href={pokemon.url} target="_blank" rel="noopener noreferrer">{pokemon.url}</a></p>
        </div>
      ) : (
        <p>正在加载宝可梦数据...</p>
      )}
    </div>
  );
};

export default AsyncTest2;
