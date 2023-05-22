import { useParams } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg";
import Loader from "../../components/Loader";
import { useGetPhotosListQuery } from "../../services/photosApi";
const Photos = () => {

  const routeParams = useParams()

  const {
    data: photos,
    isLoading: photosLoader,
    isFetching: photosFetching,
    isError: photosError,
} = useGetPhotosListQuery(routeParams);


if (photosLoader || photosFetching) {
  return <Loader />;
}

if (photosError) {
  return <ErrorMsg />;
}

console.log('photos-->',photos)

  return <div>Photos</div>;
};

export default Photos;
