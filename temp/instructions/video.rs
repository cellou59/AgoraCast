use anchor_lang::prelude::*;
use solana_program::entrypoint::ProgramResult;
use crate::state::*;


pub fn create_video(ctx: Context<CreateVideo>, video_id: String) -> ProgramResult {
    let video_account = &mut ctx.accounts.video_account;
    video_account.video_id = video_id;
    video_account.video_creator = ctx.accounts.video_creator.key();
    video_account.list_user_liked = Vec::new();
    Ok(())
}
