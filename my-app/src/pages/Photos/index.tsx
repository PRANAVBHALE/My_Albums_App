import styles from './photoPage.module.css'

import { useLocation, useParams } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg";
import Loader from "../../components/Loader";
import { useGetPhotosListQuery } from "../../services/photosApi";
import { Select, Table } from "antd";
import { useState } from "react";
import PhotoModal from "../../components/Modal";
import {IrecordType,recordType,routeParamsType} from './types'
import AppLayout from "../../components/Layout";

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
      title: "Thumbnail",
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
      title: "Url",
      dataIndex: "url",
      render: (url: string) => (
        <img
          style={{ width: 50, height: 50 }}
          alt={url}
          src={url}
          loading="lazy"
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: '70%',
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
    <AppLayout>
    <div  style={{minWidth: "80%"}}>

        <div style={{color:"white"}}>
        {`Owner - ${name} and his album - ${title}`}
        </div>

        <div data-testid="photo-table" >
          <Table dataSource={dataSource} columns={columns} pagination={false}  />
        </div>
        {imgUrl && (
          <PhotoModal
            setPhotoTitle={setPhotoTitle}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setImgUrl={setImgUrl}
          >
            <div className={styles.modal}>
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
                  textAlign: "left",
                  fontSize:'medium'
                }}
              >
                <div>
                Owner - <span className={styles.details}>{name}</span> 
                <br />
                Album - <span className={styles.details}>{title}</span> 
                <br />
                Photo - <span className={styles.details}>{photoTitle}</span> 
                </div>
               
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
    </AppLayout>
     
  );
};

export default Photos;
