import httpService from "./http.service";
const todosEndepoint = "todos/";
const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndepoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
    return data;
  },
  postTaks: async () => {
    const { data } = await httpService.post(todosEndepoint, {
      params: {
        userId: 1123,
        id: 1321312,
        title: "DDDDDDDDDDDDDDDDDDD",
        completed: false,
      },
    });
    return data;
  },
};
export default todosService;
