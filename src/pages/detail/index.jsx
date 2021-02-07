import React from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

function Index() {
  const data = [
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
    { title: "测试标题" },
  ];

  const onClick = () => {
    Taro.navigateBack({
      delta: 1,
    });
  };

  return (
    <View className="index">
      <View
        onClick={() => onClick()}
        style={{
          width: "100%",
          backgroundColor: "red",
          padding: "10px",
          position: "fixed",
          top: 0,
        }}
      >
        回退首页
      </View>
      {data.map((item, i) => (
        <View style={{ padding: "20px" }} key={i}>
          {item.title}-{i}
        </View>
      ))}
    </View>
  );
}

export default Index;
