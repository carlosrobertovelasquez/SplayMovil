import { gql } from '@apollo/client';

export const IS_FOLLOW = gql`
	query isFollow($id: ID!) {
		isFollow(id: $id)
	}
`;
export const FOLLOW = gql`
	mutation follow($id: ID!) {
		follow(id: $id)
	}
`;

export const UN_FOLLOW = gql`
	mutation unFollow($id: ID!) {
		unFollow(id: $id)
	}
`;
export const GET_FOLLOWERS = gql`
	query getFollowers($id: ID!) {
		getFollowers(id: $id) {
			email
			name
			avatar
		}
	}
`;
