import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import { fetchUserInfos, fetchUserRepos } from '../../services/api';
import { useSessionStorage } from '../useSessionStorage';
import { UserProfile, UserReposList } from './types';

interface IRepositoriesContext {
  onSubmit: (event: React.FormEvent) => void;
  onFavorite: (id: number) => void;
  onChangePage: (id: number) => void;
  favoritedRepositoriesId: number[];
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
  const [, setCachedRepositories, get] = useSessionStorage<number[]>(
    userProfile.login,
  );
  const [favoritedRepositoriesId, setFavoritedRepositoriesId] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    async function fetchUserData(): Promise<void> {
      try {
        setFavoritedRepositoriesId([]);
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
    setFavoritedRepositoriesId(get() ?? []);
  }, [userProfile.login]);

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    formData.forEach((value): void => {
      if (value && value.toString().trim().length > 0) {
        setUsername(String(value).trim());
      }
    });
  };

  const onFavorite = (id: number): void => {
    if (favoritedRepositoriesId.includes(id)) {
      setFavoritedRepositoriesId((prevState): number[] => {
        const newArray = prevState.filter((item): boolean => item !== id);

        setCachedRepositories(newArray);
        return newArray;
      });
    } else {
      setFavoritedRepositoriesId((prevState): number[] => {
        setCachedRepositories([...prevState, id]);
        return [...prevState, id];
      });
    }
  };

  const onChangePage = (page: number): void => setCurrentPage(page);

  const value: IRepositoriesContext = useMemo(() => ({
    onSubmit,
    onChangePage,
    userProfile,
    userRepos,
    isLoading,
    onFavorite,
    favoritedRepositoriesId,
  }), [userRepos, isLoading, userProfile, onFavorite, favoritedRepositoriesId]);

  return (
    <RepositoriesContext.Provider value={value}>
      {children}
    </RepositoriesContext.Provider>
  );
};

const useRepositores = (): IRepositoriesContext => useContext(RepositoriesContext);

export { RepositoriesContextProvider, useRepositores };
