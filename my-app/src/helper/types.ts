export type usersType = [
  {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
  }
];

export type albumsType = [
  {
    userId: number;
    id: number;
    title: string;
  }
];

export interface Iresult {
  id: number;
  name: string;
  albumId: number;
  title: string;
  imgUrl: string;
}
