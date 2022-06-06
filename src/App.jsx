import React from "react";

import { useMoralis } from "react-moralis";
import { useState } from "react";
// CHAKRA UI
import { Box, Input, Button } from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";

// COMPONENTS
import Home from "./pages/Home";

// const SignUp = () => {
// 	const { signup } = useMoralis();
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	//
// 	return (
// 		<Box>
// 			<Input
// 				placeholder="Email"
// 				value={email}
// 				onChange={(event) => setEmail(event.currentTarget.value)}
// 			/>
// 			<Input
// 				placeholder="Password"
// 				type="password"
// 				value={password}
// 				onChange={(event) => setPassword(event.currentTarget.value)}
// 			/>
// 			<Button onClick={() => signup()}>Sign Up</Button>
// 		</Box>
// 	);
// };

function App() {
	// const { authenticate } = useMoralis();

	// if (isAuthenticated) {
	// 	<Container>
	// 		<Heading>Welcome</Heading>
	// 	</Container>;
	// }

	return <Home />;
	// const {
	// 	authenticated,
	// 	isAuthenticated,
	// 	isAuthenticating,
	// 	authError,
	// 	logout,
	// } = useMoralis();

	// if (!isAuthenticated) {
	// 	return <SignUp />;
	// }

	// if (isAuthenticated) {
	// 	return (
	// 		<Container>
	// 			<Heading>Heading</Heading>
	// 		</Container>
	// 	);
	// }
}

export default App;
