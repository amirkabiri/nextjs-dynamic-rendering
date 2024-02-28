export default function Page({ apiData }) {
  if (!apiData) return <h1>loading</h1>;

  return <div>
    <h1>Users</h1>
    {apiData.map(user => <div key={user.id}>{user.name}</div>)}
  </div>;
}

Page.apiMethod = () => fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());