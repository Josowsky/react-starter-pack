export interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  login: {
    uuid: string;
    username: string;
  };
  picture: {
    large: string;
    medium: string;
  };
  location: {
    street: {
      name: string;
      number: number;
    };
    city: string;
    state: string;
    postcode: string;
  };
  phone: string;
  cell: string;
}
