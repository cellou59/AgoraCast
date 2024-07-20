use anchor_lang::prelude::*;
use solana_program::entrypoint::ProgramResult;
use crate::state::*;


pub fn initialize_creator(ctx: Context<InitializeCreator>) -> ProgramResult {
    Ok(())
}
