import { AnchorProvider, Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";


import {IDL} from "../anchor/idl";
import {
  PROGRAM_ID,
} from "./constants";

export const getProgram = (connection, wallet) => {
  // TODO 2 Uncomment le code
  const provider = new AnchorProvider(connection, wallet, {
    commitment: "confirmed",
  });
  const program = new Program(IDL, PROGRAM_ID, provider);
  return program;
};