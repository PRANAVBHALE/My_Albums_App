import React, { useState } from "react";

import ErrorMsg from "../../components/ErrorMsg";
import Loader from "../../components/Loader";
import mapUsersWithAlbums from "../../helper/mapUsersWithAlbums";
import { useGetAlbumListQuery } from "../../services/albumsApi";
import { useGetUsersListQuery } from "../../services/usersApi";
import { useHistory } from "react-router-dom";
import { recordType } from "./types";
import AppLayout from "../../components/Layout";
import SelectPage from "../../components/SelectPage";
import { Table } from "antd";

const Albums = () => {
  const [pageLimit, setPageLimit] = useState("20");
  const [start, setStart] = useState("0");

  const history = useHistory();

  let params = {
    start,
    pageLimit,
  };

  const {
    data: albums = [],
    isLoading: albumLoader,
    isFetching: albumFetcher,
    isError: albumError,
  } = useGetAlbumListQuery(params);

  const {
    data: users = [],
    isLoading: userLoader,
    isFetching: userFetcher,
    isError: userError,
  } = useGetUsersListQuery();

  const handleRowClick = (record: recordType) => {
    const { albumId } = record;
    //  history.push(`/photo/album/${albumId}/0/5`)
    history.push({
      pathname: `/photo/album/${albumId}/0/20`,
      state: {
        record,
      },
    });
  };

  const onPageChange = (value: string) => {
    setPageLimit(value);
  };

  if (albumLoader || albumFetcher || userLoader || userFetcher) {
    return <Loader />;
  }

  if (albumError || userError) {
    return <ErrorMsg />;
  }

  const result = users && albums && mapUsersWithAlbums(users, albums);

  const dataSource = result;

  const columns = [
    {
      title: "Img Url",
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
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
  ];

  return (
    <AppLayout>
      <div data-testid="album-table" style={{ minWidth: "80%" }}>
        <div style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between'
        }}>
        Albums
        <SelectPage
          pageLimit={pageLimit}
          onPageChange={(pageLimit: string) => onPageChange(pageLimit)}
        />
        </div>
        
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          onRow={(record) => ({
            onClick: () => {
              handleRowClick(record);
            },
          })}
        />
        
      </div>
    </AppLayout>
  );
};

export default Albums;
