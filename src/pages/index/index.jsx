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
    Taro.navigateTo({
      url: "/pages/detail/index",
    });
  };
  return (
    <View className="index">
      <View>首页</View>
      <View
        onClick={() => onClick()}
        style={{ backgroundColor: "blue", padding: "10px" }}
      >
        跳转到详情页
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
