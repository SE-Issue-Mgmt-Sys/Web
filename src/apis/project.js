import { authAPI, baseAPI } from "./customApi";

const JoinTeam = async (id, request) => {
  try {
    const response = await authAPI.post(`project/team/${id}`, request);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    alert("팀 생성 에러");
  }
};

const JoitProject = async (request) => {
  try {
    const response = await authAPI.post(`project/create`, request);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    alert("프로젝트 생성 에러");
  }
};

const SearchProject = async (name) => {
  try {
    const response = await baseAPI.get(`project/search`, {
      params: { name: name },
    });
    // console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    alert("프로젝트 검색 에러");
  }
};

const MyProject = async () => {
  try {
    const response = await authAPI.get(`project/my`);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    alert("내 프로젝트 조회 에러");
  }
};

const ProjectDetail = async (id) => {
  try {
    const response = await authAPI.get(`project/info/${id}`);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    alert("프로젝트 조회 에러");
  }
};
export { JoinTeam, JoitProject, SearchProject, MyProject, ProjectDetail };