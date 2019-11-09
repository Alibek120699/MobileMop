import React, { Component } from "react";
import {
	ADD_FRIEND,
	REMOVE_FRIEND,
	ADD_TRACK,
	REMOVE_TRACK
} from "./actions/Actions";
import { users } from "./users";
import { tracks as allTracks } from "./tracks";



const initialState = {
	friends =users,
	tracks = allTracks.slice(3, 8),
	notifications = [],
}

export default function PlayerReducer(state=initialState, action)
