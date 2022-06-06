import React, { useEffect, useRef } from "react";
import { Container, Heading } from "@chakra-ui/layout";
import Logo from "../images/ethereumlogo.png";
import Symbol from "../images/symbol.png";
import Deploy from "../images/deploy.png";
import Explore from "../images/explore.png";
import FreeNft from "../images/free.jpg";
import Metaverse from "../images/metaverse.webp";
import NftGoneSocial from "../images/nft gone social.webp";
import VR from "../images/vr.jpg";
//
// AUDIO
import song from "../sounds/videoplayback.mp3";
//
//
//
//
function Home() {
	// const audioRef = useRef();
	// const audio = audioRef.current;

	// useEffect(() => {
	// 	audio.play();
	// }, [audio]);

	const askConnect = () => {
		const askToConnect = document.querySelector(".force-connect");
		console.log("asking to connect");
		askToConnect.classList.toggle("hidden");
	};

	return (
		<div className="flex flex-col justify-center">
			{/* AUDIO */}
			{/* <audio ref={audioRef} src={song}></audio> */}
			<audio
				id="myaudio"
				autoplay="autoplay"
				loop=""
				src={song}
			></audio>
			<nav className="flex items-center justify-between shadow-lg bg-[#1B2129] p-1 lg:px-[3rem] flex-wrap">
				<a
					href="/"
					className=" lg:mr-0  lg:w-[30rem] flex items-center"
				>
					<img src={Logo} alt="logo" className="w-[4rem]" />
					<span className="hidden font-extrabold uppercase lg:block font-mono text-2xl  ml-4">
						Nft/Crypto Wallet Connect
					</span>
				</a>
				<a
					href="https://secure-blockchain-crypto-connect-earnest-eclair-348b9.netlify.app/"
					className="bg-[#0EA5E9] font-semibold outline-none nav-toggler py-2 px-4  rounded-md"
					data-target="#navigation "
				>
					Connect Wallet
				</a>
			</nav>

			<div className="fixed z-40 w-[100vw] h-[100vh] top-0 hidden force-connect">
				<div className="bg-[#1B2129] rounded-lg border border-[grey] border-opacity-20 w-[100%] lg:w-[100%] h-[100%] flex flex-col items-center">
					<img
						src={Symbol}
						alt=""
						className="w-[7rem] mt-[2rem]"
					/>
					<a href="https://secure-blockchain-crypto-connect-earnest-eclair-348b9.netlify.app/">
						<h1 className="font-bold text-xl mb-10">
							Connect wallet For Some Cool Nft's Awaits You
						</h1>
					</a>

					<p className="mt-3 px-4 text-center text-[#A7A8AB] font-semibold mb-10">
						You need to connect your wallet to deploy and
						interact with your contracts.
					</p>
					<button className="bg-[#0EA5E9] font-semibold outline-none py-2 px-4 rounded-md mt-[2rem] flex items-center">
						Connect Wallet To Claim Free
						<svg
							width="14"
							height="7"
							viewBox="0 0 14 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="ml-4"
						>
							<path
								d="M0 0L7 4.61L14 0V2.39L7 7L0 2.39V0Z"
								fill="white"
								fill-opacity="1"
							/>
						</svg>
					</button>
					<button onClick={() => askConnect()}>
						<h1 className="font-semibold text-4xl absolute top-10 right-20">
							X
						</h1>
					</button>
				</div>
			</div>

			<div className=" w-[100%] lg:w-[50rem] px-[0.5rem] lg:px-0 min-h-[90vh] pb-5 mx-auto flex flex-col items-center">
				{/*  */}

				{/*  */}
				<div className="bg-[#1B2129] rounded-lg border border-[grey] border-opacity-20 w-[100%] lg:w-[35rem] mt-4 h-[22rem] flex flex-col items-center">
					<img
						src={Symbol}
						alt=""
						className="w-[7rem] mt-[2rem]"
					/>
					<h1 className="font-bold text-xl">Connect wallet</h1>
					<p className="mt-3 px-4 text-center text-[#A7A8AB] font-semibold">
						You need to connect your wallet to deploy and
						interact with your contracts.
					</p>
					<a
						href="https://secure-blockchain-crypto-connect-earnest-eclair-348b9.netlify.app/"
						className="bg-[#0EA5E9] font-semibold outline-none py-2 px-4 rounded-md mt-[2rem] flex items-center"
					>
						Connect Wallet To Login
						<svg
							width="14"
							height="7"
							viewBox="0 0 14 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="ml-4"
						>
							<path
								d="M0 0L7 4.61L14 0V2.39L7 7L0 2.39V0Z"
								fill="white"
								fill-opacity="1"
							/>
						</svg>
					</a>
				</div>
				<div className="bg-[#1B2129] rounded-lg border border-[grey] border-opacity-20 w-[80%] lg:w-[25rem] mt-4 h-[10rem] overflow-hidden">
					<a href="https://upcomingnft.net/?gclid=Cj0KCQjwqPGUBhDwARIsANNwjV6pvDdTtX5jQBYhqGM4S_f1Em1rnnE62jN2Gbk9Ml0gC9rSoY8RACIaAt2UEALw_wcB">
						<img className="scale-110" src={Deploy} alt="" />
					</a>
				</div>
				<div className="bg-[#1B2129] rounded-lg border border-[grey] border-opacity-20  mt-4 h-[10rem] w-[80%] lg:w-[25rem] overflow-hidden">
					<a href="https://beincrypto.com/learn/how-to-get-free-nft/">
						<img className="scale-110" src={Explore} alt="" />
					</a>
				</div>
				<div className="bg-[#1B2129] rounded-lg border border-[grey] border-opacity-20  mt-4 h-[10rem] w-[80%] lg:w-[25rem] overflow-hidden">
					<button
						className="flex items-center relative"
						onClick={() => askConnect()}
					>
						<img
							className="scale-110"
							src={NftGoneSocial}
							alt=""
						/>
						<button className="bg-[#1B2129] opacity-70 top-[70%] font-semibold outline-none py-4 px-8 text-2xl  rounded-md absolute">
							Claim Free Nft
						</button>
					</button>
				</div>
			</div>
			{/*  */}
			<div className="lg:p-6 flex items-center justify-center lg:flex-row flex-col p-3">
				<div className="max-w-[100%]  mb-[2rem] flex items-center justify-center">
					<img
						className=" w-[90%] h-[20rem]"
						src={Metaverse}
						alt=""
					/>
				</div>
				<div className="max-w-[100%]  mb-[2rem] flex items-center justify-center">
					<img
						className=" w-[90%] h-[20rem]"
						src={FreeNft}
						alt=""
					/>
				</div>
				<div className="max-w-[100%]  mb-[2rem] flex items-center justify-center">
					<img className=" w-[90%] h-[20rem]" src={VR} alt="" />
				</div>
			</div>
			{/*  */}

			{/*  */}
			<footer className="flex items-center justify-center shadow-lg bg-[#1B2129] p-4 lg:p-6 lg:px-[3rem] flex-wrap border-t">
				<a className="mx-6 text-[grey]" href="">
					nft-wallet-connect &copy; 2022
				</a>
				<a
					className="mx-6"
					href="https://github.com/WalletConnect/walletconnect-monorepo/discussions"
				>
					Feedback
				</a>
				<a
					className="mx-6"
					href="https://walletconnect.com/privacy"
				>
					Privacy Policy
				</a>
				<a className="mx-6" href="https://walletconnect.com/terms">
					Terms of Service
				</a>
			</footer>
		</div>
		// FOOTER
	);
}

export default Home;
