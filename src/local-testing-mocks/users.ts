export type User = {
  id: string;
  userName: string;
  name: string;
  password: string;
  email: string;
};

export const users: User[] = [
  {
    id: "test-user-1",
    userName: "test1",
    name: "Test 1",
    password: "pass",
    email: "test1@donotreply.com",
  },
  {
    id: "test-user-2",
    userName: "test2",
    name: "Test 2",
    password: "pass",
    email: "test2@donotreply.com",
  },
];
