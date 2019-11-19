import React, { Component } from "react";
import {
	ActionTypes
} from "../actions/ActionTypes";
import { users } from "../storage/users";
import { tracks as allTracks } from "../storage/tracks";



const initialState = {
	friends: users,
	tracks: allTracks.slice(3, 8),
	notifications: [],
}

export default function PlayerReducer(storeData = initialState, action) {
	switch(ActionTypes){
		case ActionTypes.LOAD_TRACK:
			 return {...storeData, tracks: action.payload.data}
		case ActionTypes.LOAD_FRIEND:
			return {...storeData, friends: action.payload.data}
		default:
			return storeData || {}
	}
}
