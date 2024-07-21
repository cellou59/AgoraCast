import { PublicKey } from "@solana/web3.js";

export const SOLANA_PUBLIC_KEY = new PublicKey("5AKHumTEkTQwT5wrFFEK336pptKWqH1JV4wSjKqC8zG7");

// Mapping video IDs to the same Solana public key
export const VIDEO_TO_SOLANA_KEY = {
  // Define all your video IDs here
  "pnZ5m3EmNko": SOLANA_PUBLIC_KEY,
  "HIVP5tqntrs": SOLANA_PUBLIC_KEY,
  "b40m11VsGFo": SOLANA_PUBLIC_KEY,
  "0P0aQreFs8w": SOLANA_PUBLIC_KEY,
};
