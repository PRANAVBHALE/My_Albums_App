import { useLocation, useParams } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg";
import Loader from "../../components/Loader";
import { useGetPhotosListQuery } from "../../services/photosApi";
import { Descriptions, Select, Table } from "antd";
import { useState } from "react";
import PhotoModal from "../../components/Modal";
import {IrecordType,recordType,routeParamsType} from './types'

const Photos = () => {
  const routeParams:routeParamsType = useParams();
  console.log(routeParams)
  const {limit ,start , albumid} = routeParams
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [photoTitle, setPhotoTitle] = useState("");
  const [pageLimit, setPageLimit] = useState(limit);


  const params = {
    start,
    pageLimit,
    albumid
  }

  const {
    data: photos,
    isLoading: photosLoader,
    isFetching: photosFetching,
    isError: photosError,
  } = useGetPhotosListQuery(params);

  const { record } = location.state as IrecordType; // Type Casting, then you can get the params passed via router

  const { name, title } = record;

  const onPageChange = (value: string) => {
    setPageLimit(value);
  };

  const columns = [
    {
      title: "thumbnail",
      dataIndex: "thumbnailUrl", // this is the value that is parsed from the DB / server side
      render: (thumbnailUrl: string) => (
        <img
          style={{ width: 50, height: 50 }}
          alt={thumbnailUrl}
          src={thumbnailUrl}
          loading="lazy"
        />
      ), // 'theImageURL' is the variable you must declare in order the render the URL
      onCell: (record: recordType) => {
        return {
          onClick: () => {
            console.log("modal---", record);
            setModalOpen(true);
            setImgUrl(record.url);
            setPhotoTitle(record.title);
          },
        };
      },
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
      //  onCell: () => alert("clicked")
    },
  ];

  const dataSource = photos;
  if (photosLoader || photosFetching) {
    return <Loader />;
  }

  if (photosError) {
    return <ErrorMsg />;
  }

  console.log("photos-->", photos);

  return (
    <div>
      <div>
        <Descriptions
          title={`Owner - ${name} and his album - ${title}`}
          bordered
        />

        <div data-testid="photo-table">
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
        {imgUrl && (
          <PhotoModal
            setPhotoTitle={setPhotoTitle}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setImgUrl={setImgUrl}
          >
            <div style={{ display: "flex" }}>
              <img
                style={{ width: 300, height: 300 }}
                src={imgUrl}
                alt={imgUrl}
                loading="lazy"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Owner - {name}
                <br />
                Album - {title}
                <br />
                Photo - {photoTitle}
              </div>
            </div>
          </PhotoModal>
        )}

      <Select
        defaultValue={pageLimit + " / page"}
        style={{ width: 120 }}
        onChange={onPageChange}
        options={[
          { value: "20", label: "20 / page" },
          { value: "30", label: "30 / page" },
          { value: "50", label: "50 / page" },
          { value: "100", label: "100 / page" },
        ]}
      />
      </div>
    </div>
  );
};

export default Photos;
