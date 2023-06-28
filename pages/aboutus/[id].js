import { useRouter } from "next/router";

function Developer() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const router = useRouter();
  const { id } = router.query;

  const user = details.find((user) => user.id === parseInt(id));

  return (
    <div>
      <h1>About Us - {user.name}</h1>

      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Developer;
