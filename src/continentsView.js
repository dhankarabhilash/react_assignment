import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

function Continents(props) {
	const { setContinentValue } = props
	return(
		<Query query={gql`
			query {
				continents {
					name
					code
				}
			}
		`}>

			{({loading, error, data}) => {
				if (loading) {
					return (
						<p>
							Loading...
						</p>
					);
				}
				if (error) { 
					return <p> Error </p> 
				}

				return (
					<div class="list-group">
					{
						data.continents.map((continent, index) => (
							<button key={continent.code} onClick={() => setContinentValue(continent)} class="list-group-item">
								{continent.name}
							</button>
						))
					}
					</div>
				)
			}}

		</Query>
	);
}

export default Continents;