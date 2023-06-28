import { useRouter } from "next/router";

function Developer() {
  const router = useRouter();
  const { id } = router.query; // Retrieve the dynamic route value

  return (
    <div>
      <h1>User</h1>
      <p>NAME: {id}</p>
    </div>
  );
}

export default Developer;
