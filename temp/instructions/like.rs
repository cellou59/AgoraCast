use anchor_lang::prelude::*;
use solana_program::entrypoint::ProgramResult;
use crate::state::*;
use crate::errors::MyError;

pub fn like_video(ctx: Context<LikeVideo>) -> ProgramResult {
    let video_account = &mut ctx.accounts.video_account;
    let viewer_account = &ctx.accounts.viewer_account;
    
    // Ensure the user has not already liked this video
    require!(
        video_account.list_user_liked.contains(&viewer_account.key()),
        MyError::AlreadyLiked
    );


    video_account.list_user_liked.push(viewer_account.key());
    Ok(())
}