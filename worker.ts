import links from "./links.json";

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    // 去掉頭尾的 slash
    const key = url.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
    if (key in links) {
      return Response.redirect((links as Record<string, string>)[key], 301);
    }
    return fetch(request);
  },
};
