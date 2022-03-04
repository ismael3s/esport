import axios, { AxiosResponse } from 'axios';
import { UserProfile, UserRepos } from '../hooks/useRepositories/types';

const perPage = 10;

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  params: {
    per_page: perPage,
  },
});

const fetchUserInfos = async (username: string): Promise<AxiosResponse<UserProfile>> => githubApi.get(`/users/${username}`);

const fetchUserRepos = async (username: string, page: number): Promise<AxiosResponse<UserRepos[]>> => githubApi.get(`/users/${username}/repos?page=${page + 1}`);

export { fetchUserInfos, fetchUserRepos, perPage };
