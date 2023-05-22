import ErrorMsg from "../../components/ErrorMsg";
import Loader from "../../components/Loader";
import { useGetAlbumListQuery } from "../../services/albumsApi"
import { useGetUsersListQuery } from "../../services/usersApi";

const Albums = () => {

  const {
    data: albums = [],
    isLoading: albumLoader,
    isFetching: albumFetcher,
    isError: albumError,
  } = useGetAlbumListQuery(1);

  const {
    data: users = [],
    isLoading: userLoader,
    isFetching: userFetcher,
    isError: userError,
} = useGetUsersListQuery();

  if (albumLoader || albumFetcher || userLoader || userFetcher  ) {
    return <Loader />;
  }

  if (albumError || userError) {
    return <ErrorMsg />;
  }

  console.log('albums--->',albums)
  console.log('users--->',users)

  return <div>
    Albums
  </div>
}

export default Albums