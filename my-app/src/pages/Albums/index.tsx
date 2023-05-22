import ErrorMsg from "../../components/ErrorMsg";
import Loader from "../../components/Loader";
import { useGetAlbumListQuery } from "../../services/albumsApi"


const Albums = () => {

  const {
    data: albums = [],
    isLoading: albumLoader,
    isFetching: albumFetcher,
    isError: albumError,
  } = useGetAlbumListQuery(1);

  if (albumLoader || albumFetcher) {
    return <Loader />;
  }

  if (albumError) {
    return <ErrorMsg />;
  }

  console.log('albums--->',albums)
  return <div>
    Albums
  </div>
}

export default Albums