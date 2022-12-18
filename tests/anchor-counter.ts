import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AnchorCounter } from "../target/types/anchor_counter";

describe("anchor-counter", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorCounter as Program<AnchorCounter>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
