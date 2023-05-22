export type recordType = {
  albumId: number;
  id: number;
  url: string;
  name: string;
  title: string;
};

export interface IrecordType {
  record: {
    albumId: number;
    id: number;
    imgUrl: string;
    name: string;
    title: string;
  };
}

export type routeParamsType = {
  limit: string;
  start: string;
  albumid: string;
};
