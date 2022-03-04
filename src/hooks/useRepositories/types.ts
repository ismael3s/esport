export type UserInfo = string;

export type UserProfile = {
    avatar_url: string;
    login: string;
    public_repos: number;
}

export type UserRepos = {
    id: number;
    name: string;
    stargazers_count: number;
    forks_count: number;
    description: string;
}

export type UserReposList = {
    userRepos: UserRepos[];
    totalCount: number
}
