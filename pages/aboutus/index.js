import Link from "next/link";

function Aboutpage() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <>
      <h1>Abot us page</h1>
      <ul>
        {details.map((ele) => (
          <li>
            <Link href={`/aboutus/${ele.id}`}> {ele.name} </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Aboutpage;
