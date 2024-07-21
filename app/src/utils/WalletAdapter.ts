import { WalletContextState } from "@solana/wallet-adapter-react";
import { Wallet } from "@project-serum/anchor";
import { PublicKey, Transaction, Keypair } from "@solana/web3.js";

class WalletAdapter implements Wallet {
  private wallet: WalletContextState;

  constructor(wallet: WalletContextState) {
    this.wallet = wallet;
  }

  get publicKey(): PublicKey {
    if (!this.wallet.publicKey) {
      throw new Error("Wallet not connected");
    }
    return this.wallet.publicKey;
  }

  async signTransaction(tx: Transaction): Promise<Transaction> {
    if (!this.wallet.signTransaction) {
      throw new Error("signTransaction method is undefined");
    }
    return this.wallet.signTransaction(tx);
  }

  async signAllTransactions(txs: Transaction[]): Promise<Transaction[]> {
    if (!this.wallet.signAllTransactions) {
      throw new Error("signAllTransactions method is undefined");
    }
    return this.wallet.signAllTransactions(txs);
  }

  // Adding the payer property expected by NodeWallet
  get payer(): Keypair {
    if (!this.wallet.publicKey) {
      throw new Error("Wallet not connected");
    }
    return Keypair.fromSecretKey(new Uint8Array(this.wallet.publicKey.toBytes()));
  }
}

export default WalletAdapter;
