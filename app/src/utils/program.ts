import { Connection } from "@solana/web3.js";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import { useWallet } from "@solana/wallet-adapter-react";
import BN from "bn.js";
import idl from "../anchor/idl.json";
import { programId } from "./constants"; // Ensure this is the correct path

const network = 'https://api.devnet.solana.com'; // or 'http://localhost:8899' for local testing
const connection = new Connection(network, "confirmed");

// Function to get the provider
const getProvider = () => {
  const { publicKey, signTransaction, signAllTransactions } = useWallet();

  // Check if wallet is connected
  if (!publicKey || !signTransaction || !signAllTransactions) {
    throw new Error('Wallet not connected');
  }

  const wallet = {
    publicKey,
    signTransaction,
    signAllTransactions,
  };

  return new AnchorProvider(connection, wallet as any, {
    preflightCommitment: "confirmed",
  });
};

// Function to get the program
const getProgram = () => {
  const provider = getProvider();
  const program = new Program(idl as any, programId, provider);
  return program;
};

export { connection, getProvider, getProgram };

// Example function to initialize a user
export const initializeUser = async () => {
  const program = await getProgram();
  const provider = getProvider();
  const userKeypair = web3.Keypair.generate(); // Generate keypair for the new user account

  try {
    const tx = await program.methods.initializeUser()
      .accounts({
        user: userKeypair.publicKey,
        userSigner: provider.wallet.publicKey, // Assumes provider.wallet contains the correct keypair
        systemProgram: web3.SystemProgram.programId,
      })
      .signers([userKeypair])
      .rpc();

    console.log(`Transaction successful: ${tx}`);
  } catch (err) {
    console.error('Failed to initialize user', err);
  }
};

// Function to submit a proposal
export const submitProposal = async (description: string) => {
  const program = await getProgram();
  const provider = getProvider();
  const proposalKeypair = web3.Keypair.generate(); // Generate keypair for the new proposal account

  try {
    const tx = await program.methods.submitProposal(description)
      .accounts({
        proposal: proposalKeypair.publicKey,
        creator: provider.wallet.publicKey, // Assumes provider.wallet contains the correct keypair
        systemProgram: web3.SystemProgram.programId,
      })
      .signers([proposalKeypair])
      .rpc();

    console.log(`Transaction successful: ${tx}`);
  } catch (err) {
    console.error('Failed to submit proposal', err);
  }
};

// Function to reward content creator
export const rewardContentCreator = async (amount: number, contentCreatorPublicKey: web3.PublicKey) => {
  const program = await getProgram();
  const provider = getProvider();

  try {
    const tx = await program.methods.rewardContentCreator(new BN(amount * web3.LAMPORTS_PER_SOL))
      .accounts({
        user: provider.wallet.publicKey, // Assumes provider.wallet contains the correct keypair
        contentCreator: contentCreatorPublicKey,
        systemProgram: web3.SystemProgram.programId,
      })
      .signers([])
      .rpc();

    console.log(`Transaction successful: ${tx}`);
  } catch (err) {
    console.error('Failed to reward content creator', err);
  }
};

// Function to vote on a proposal
export const voteProposal = async (proposalPublicKey: web3.PublicKey) => {
  const program = await getProgram();
  const provider = getProvider();

  try {
    const tx = await program.methods.voteProposal()
      .accounts({
        user: provider.wallet.publicKey, // Assumes provider.wallet contains the correct keypair
        proposal: proposalPublicKey,
      })
      .signers([])
      .rpc();

    console.log(`Transaction successful: ${tx}`);
  } catch (err) {
    console.error('Failed to vote on proposal', err);
  }
};
