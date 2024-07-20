use anchor_lang::prelude::*;
use crate::constants::MAX_LIKED_USERS;

#[derive(Accounts)]
pub struct InitializeCreator<'info> {
    #[account(init, payer = user, space = 8 + 32)]
    pub video_creator: Account<'info, VideoCreator>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CreateVideo<'info> {
    #[account(init, payer = user, space = 8 + 32 + 32 + 8 + 32 * MAX_LIKED_USERS)]
    pub video_account: Account<'info, VideoAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut)]
    pub video_creator: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct LikeVideo<'info> {
    #[account(mut)]
    pub video_account: Account<'info, VideoAccount>,
    #[account(mut)]
    pub viewer_account: Signer<'info>,
}

#[derive(Accounts)]
pub struct CreateProposal<'info> {
    #[account(init, payer = video_creator, space = 8 + 32 + 256 + 8 * 10)]
    pub proposal_account: Account<'info, ProposalAccount>,
    #[account(mut)]
    pub video_creator: Signer<'info>,
    pub video_account: Account<'info, VideoAccount>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct VoteProposal<'info> {
    #[account(mut)]
    pub proposal_account: Account<'info, ProposalAccount>,
    #[account(mut)]
    pub viewer_account: Signer<'info>,
    pub video_account: Account<'info, VideoAccount>,
}

#[account]
pub struct VideoCreator {
    pub key: Pubkey,
}

#[account]
pub struct VideoAccount {
    pub video_id: String,
    pub video_creator: Pubkey,
    pub list_user_liked: Vec<Pubkey>,
}

#[account]
pub struct ProposalAccount {
    pub description: String,
    pub options: Vec<VoteOption>,
}

#[derive(AnchorDeserialize, AnchorSerialize, Clone)]
pub struct VoteOption {
    pub label: String,
    pub count: u64,
}
