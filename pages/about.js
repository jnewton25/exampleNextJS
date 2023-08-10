import Link from "next/link";
import Head from "next/head";

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<h1>About</h1>
			<p>My name is justin newton</p>
			<p> / add img here / </p>
			<p>
				my current role is a software developer intern for RSS at WR
				Berkley
			</p>
			<h2>
				<Link href="/">Back to home</Link>
			</h2>
		</>
	);
}
