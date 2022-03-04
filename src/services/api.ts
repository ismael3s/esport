import axios, { AxiosResponse } from 'axios';
import { UserProfile, UserRepos } from '../hooks/useRepositories/types';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  params: {
    per_page: 10,
  },
});

const fetchUserInfos = async (username: string): Promise<AxiosResponse<UserProfile>> => githubApi.get(`/users/${username}`);

const fetchUserRepos = async (username: string): Promise<AxiosResponse<UserRepos[]>> => githubApi.get(`/users/${username}/repos`);

export { fetchUserInfos, fetchUserRepos };
