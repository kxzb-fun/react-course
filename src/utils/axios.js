import axios from "axios";

// 创建一个 Axios 实例
const axiosInstance = axios.create({
  // process.env.REACT_APP_API_BASE_URL ||
  baseURL: "https://api.example.com", // 设置基础 URL
  timeout: 10000, // 设置请求超时时间
  headers: {
    "Content-Type": "application/json", // 默认请求头类型
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在发送请求前可以做一些处理，比如添加 token
    const token = localStorage.getItem("token"); // 从本地存储中获取 token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 将 token 添加到请求头
    }
    return config; // 返回修改后的配置
  },
  (error) => {
    // 请求错误时的处理
    console.error("请求错误：", error);
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 对响应数据进行处理

    if (response.data && response.data.code !== 200) {
      // 假设后端返回的 code 不是 200 时代表有问题
      console.error("业务错误：", response.data.message);
      return Promise.reject(response.data.message);
    }
    return response.data; // 返回成功响应数据
  },
  (error) => {
    // 对响应错误进行处理
    if (error.response) {
      // 后端返回了非 2xx 的 HTTP 状态码
      console.error("响应错误：", error.response.status, error.response.data);
      if (error.response.status === 401) {
        // 处理未授权（例如 token 失效）
        console.warn("未授权，请重新登录！");
        // 可跳转到登录页或清除本地 token
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
      //   403 代表没有权限
      // 404 代表资源不存在  notFount 页面
    } else if (error.request) {
      // 请求已发送但未收到响应
      console.error("未收到响应：", error.request);
    } else {
      // 其他错误
      console.error("请求设置错误：", error.message);
    }
    return Promise.reject(error);
  }
);

// 通用数据处理函数
const processData = (data) => {
  // 根据实际需求处理数据，例如格式化时间戳或过滤无效字段
  if (Array.isArray(data)) {
    return data.map((item) => ({
      ...item,
      timestamp: new Date(item.timestamp).toLocaleString(), // 转换时间戳为本地时间字符串
    }));
  }
  return data;
};

// 封装接口请求方法
const api = {
  get: (url, params) =>
    axiosInstance
      .get(url, { params })
      .then((res) => processData(res.data))
      .catch((err) => {
        console.error("GET 请求失败：", err);
        throw err;
      }),

  post: (url, data) =>
    axiosInstance
      .post(url, data)
      .then((res) => processData(res.data))
      .catch((err) => {
        console.error("POST 请求失败：", err);
        throw err;
      }),

  put: (url, data) =>
    axiosInstance
      .put(url, data)
      .then((res) => processData(res.data))
      .catch((err) => {
        console.error("PUT 请求失败：", err);
        throw err;
      }),

  delete: (url) =>
    axiosInstance
      .delete(url)
      .then((res) => processData(res.data))
      .catch((err) => {
        console.error("DELETE 请求失败：", err);
        throw err;
      }),
};

export default api;
