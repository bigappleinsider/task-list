import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TaskList from '~src/containers/TaskList';

export default (
	<Switch>
		<Route exact path="/" component={TaskList} />
	</Switch>
);
