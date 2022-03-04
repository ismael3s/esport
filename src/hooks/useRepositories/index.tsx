import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { fetchUserInfos, fetchUserRepos, perPage } from '../../services/api';
import { useSessionStorage } from '../useSessionStorage';
import { UserProfile, UserRepos, UserReposList } from './types';

interface IRepositoriesContext {
  onSubmit: (event: React.FormEvent) => void;
  onFavorite: (id: UserRepos) => void;
  onPageChange: (count: number) => void;
  favoritedRepositories: UserRepos[];
  pageCount: number;
  currentPage: number;
  userProfile: UserProfile;
  userRepos: UserReposList;
  isLoading: boolean;
}

const RepositoriesContext = createContext<IRepositoriesContext>(
  {} as IRepositoriesContext,
);

const RepositoriesContextProvider: React.FC = ({ children }): JSX.Element => {
  const [username, setUsername] = useState('');
  const [userProfile, setUserProfile] = useState<UserProfile>({} as UserProfile);
  const [userRepos, setUserRepos] = useState<UserReposList>({} as UserReposList);
  const [isLoading, setIsLoading] = useState(false);
  const [, setCachedRepositories] = useSessionStorage<UserRepos[]>(
    `${userProfile.login}:repos`,
  );
  const [favoritedRepositories, setFavoritedRepositories] = useState<UserRepos[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function fetchUserData(): Promise<void> {
      try {
        setIsLoading(true);

        const [userInfo, repositories] = await Promise.all([
          fetchUserInfos(username), fetchUserRepos(username, currentPage)]);

        setUserProfile(userInfo.data);
        setUserRepos({
          userRepos: repositories.data,
          totalCount: repositories.data.length,
        });
      } catch (error) {
        setUserProfile({} as UserProfile);
        setUserRepos({} as UserReposList);

        toast.error("Failer to fetch user's data", {
          position: 'bottom-center',
        });
      } finally {
        setIsLoading(false);
      }
    }

    if (username.trim().length > 0) {
      fetchUserData();
    }
  }, [username, currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [username]);

  useEffect(() => {
    const favoritedReposString = sessionStorage.getItem(`${userProfile.login}:repos`);
    const favoritedRepos = favoritedReposString ? JSON.parse(favoritedReposString) : [];

    setFavoritedRepositories(favoritedRepos);
  }, [userProfile.login]);

  useEffect(() => {
    setPageCount(Math.ceil(userProfile.public_repos / perPage));
  }, [userProfile.public_repos]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    formData.forEach((value): void => {
      if (value && value.toString().trim().length > 0) {
        setUsername(String(value).trim());
      }
    });
  };

  const onFavorite = useCallback((repo: UserRepos): void => {
    const favoritedRepositoryIsAlreadyCached = favoritedRepositories.some(
      ({ id }): boolean => id === repo.id,
    );

    if (favoritedRepositoryIsAlreadyCached) {
      setFavoritedRepositories((prevState): UserRepos[] => {
        const newArray = prevState.filter(({ id }): boolean => id !== repo.id);

        setCachedRepositories(newArray);

        return newArray;
      });
    } else {
      setFavoritedRepositories((prevState): UserRepos[] => {
        setCachedRepositories([...prevState, repo]);

        return [...prevState, repo];
      });
    }
  }, [setCachedRepositories, setFavoritedRepositories, favoritedRepositories]);

  const onPageChange = useCallback((count: number): void => {
    setCurrentPage(count);
  }, []);

  const value: IRepositoriesContext = useMemo(
    () => ({
      onSubmit,
      onPageChange,
      onFavorite,
      userProfile,
      userRepos,
      isLoading,
      currentPage,
      favoritedRepositories,
      pageCount,
    }),
    [
      userRepos, isLoading, userProfile, onFavorite,
      pageCount, onPageChange,
      currentPage, favoritedRepositories,
    ],
  );

  return (
    <RepositoriesContext.Provider value={value}>
      {children}
    </RepositoriesContext.Provider>
  );
};

const useRepositores = (): IRepositoriesContext => useContext(RepositoriesContext);

export { RepositoriesContextProvider, useRepositores };
