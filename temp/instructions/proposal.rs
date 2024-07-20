use anchor_lang::prelude::*;
use solana_program::entrypoint::ProgramResult;
use crate::state::*;
use crate::errors::MyError;

pub fn create_proposal(ctx: Context<CreateProposal>, description: String, options: Vec<VoteOption>) -> ProgramResult {
    let proposal_account = &mut ctx.accounts.proposal_account;
    proposal_account.description = description;
    proposal_account.options = options;
    Ok(())
}

pub fn vote_proposal(ctx: Context<VoteProposal>, option_index: usize) -> ProgramResult {
    let proposal_account = &mut ctx.accounts.proposal_account;
    let viewer_account = &ctx.accounts.viewer_account;
    let video_account = &ctx.accounts.video_account;
    
    // Ensure the viewer has liked the 
    // if !video_account.list_user_liked.contains(&viewer_account.key()) {
    //     return Err(MyError::NotEligibleToVote.into());
    // }
    require!(
        !video_account.list_user_liked.contains(&viewer_account.key()),
        MyError::AlreadyLiked
    );



    // Increment the count for the chosen option
    proposal_account.options[option_index].count += 1;
    Ok(())
}
