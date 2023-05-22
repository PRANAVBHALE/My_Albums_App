import { Table } from "antd";
import ErrorMsg from "../../components/ErrorMsg";
import Loader from "../../components/Loader";
import mapUsersWithAlbums from "../../helper/mapUsersWithAlbums";
import { useGetAlbumListQuery } from "../../services/albumsApi";
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

  if (albumLoader || albumFetcher || userLoader || userFetcher) {
    return <Loader />;
  }

  if (albumError || userError) {
    return <ErrorMsg />;
  }

  console.log("albums--->", albums);
  console.log("users--->", users);
  const result = users && albums && mapUsersWithAlbums(users, albums);

  const dataSource = result;

  const columns = [
    {
      title: "imgUrl",
      dataIndex: "imgUrl",
      render: (imgUrl: string) => (
        <img
          style={{ width: 50, height: 50 }}
          alt={imgUrl}
          src={imgUrl}
          loading="lazy"
        />
      ),
    },

    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
  ];

  return (
	<div data-testid="album-table">
      Albums
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default Albums;
