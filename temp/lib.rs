use anchor_lang::prelude::*;
use solana_program::entrypoint::ProgramResult;

pub mod constants;
pub mod errors;
pub mod instructions;
pub mod state;

use crate::instructions::*;
use crate::state::*;

declare_id!("GdP3wgEx5T9ghFFQvWehX2qzerR3gULxnaPLLMzFp3cQ");

#[program]
mod mescena {
    use super::*;

    pub fn initialize_creator(ctx: Context<InitializeCreator>) -> ProgramResult {
        instructions::initialize_creator(ctx)
    }

    pub fn create_video(ctx: Context<CreateVideo>, video_id: String) -> ProgramResult {
        instructions::create_video(ctx, video_id)
    }

    pub fn like_video(ctx: Context<LikeVideo>) -> ProgramResult {
        instructions::like_video(ctx)
    }

    pub fn create_proposal(
        ctx: Context<CreateProposal>,
        description: String,
        options: Vec<VoteOption>,
    ) -> ProgramResult {
        instructions::create_proposal(ctx, description, options)
    }

    pub fn vote_proposal(ctx: Context<VoteProposal>, option_index: usize) -> ProgramResult {
        instructions::vote_proposal(ctx, option_index)
    }
}
