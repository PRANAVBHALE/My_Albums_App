import { imgUrls } from "./imgUrls";

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

type albumsType = [
  {
    userId: number;
    id: number;
    title: string;
  }
];

interface Iresult {
  id: number;
  name: string;
  albumId: number;
  title: string;
  imgUrl: string;
}

const mapUsersWithAlbums = (
  users: usersType | any[],
  albums: albumsType
): Iresult[] | [] => {
  let myUserCache: { [key: string]: any } = {};
  let results: Iresult[] = [];

  albums.forEach((album) => {
    let foreignUserId = album.userId;
    let user = myUserCache[foreignUserId];

    if (!user) {
      for (let i = 0; i < users.length; i++) {
        const userDict = users[i];

        let id = userDict.id;
        if (id === foreignUserId) {
          myUserCache[foreignUserId] = userDict;
          user = userDict;

          break;
        }
      }
    }

    if (user) {
      results.push({
        id: foreignUserId,
        name: user.name,
        albumId: album.id,
        title: album.title,
        imgUrl: imgUrls[Math.floor(Math.random() * imgUrls.length)],
      });
    }
    // return 1
  });
  return results;
};

export default mapUsersWithAlbums;
