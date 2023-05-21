import { useGetAlbumListQuery } from "../../services/albumsApi"


const Albums = () => {

  const {
    data: albums = [],
    isLoading: albumLoader,
    isFetching: albumFetcher,
    isError: albumError,
  } = useGetAlbumListQuery(1);

  if (albumLoader || albumFetcher) {
    return <div>Loading</div>;
  }

  if (albumError) {
    return <div>Error</div>;
  }

  console.log('albums--->',albums)
  return <div>
    Albums
  </div>
}

export default Albums