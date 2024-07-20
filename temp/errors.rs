use anchor_lang::prelude::*;
#[error_code]
pub enum MyError {
    #[msg("The user is not eligible to vote.")]
    NotEligibleToVote,
    #[msg("The user has already liked this video.")]
    AlreadyLiked,
}