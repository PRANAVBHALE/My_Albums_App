import { useLocation, useParams } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg";
import Loader from "../../components/Loader";
import { useGetPhotosListQuery } from "../../services/photosApi";
import { Descriptions, Table } from "antd";
import { useState } from "react";
import PhotoModal from "../../components/PhotoModal";

type recordType = {
  albumId: number;
  id: number;
  url: string;
  name: string;
  title: string;
};

interface IrecordType {
  record: {
    albumId: number;
    id: number;
    imgUrl: string;
    name: string;
    title: string;
  };
}

const Photos = () => {
  const routeParams = useParams();
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [photoTitle, setPhotoTitle] = useState("");
  const [pageLimit, setPageLimit] = useState("20");

  const {
    data: photos,
    isLoading: photosLoader,
    isFetching: photosFetching,
    isError: photosError,
  } = useGetPhotosListQuery(routeParams);

  const { record } = location.state as IrecordType; // Type Casting, then you can get the params passed via router

  const { name, title } = record;

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
      </div>
    </div>
  );
};

export default Photos;
