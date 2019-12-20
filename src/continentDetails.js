import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

function ContinentDetails(props) {
	const { setContinentValue, continentValue } = props
	return(
		<Query query={gql`
			query {
				continent(code: "${continentValue.code}") {
					countries {
				  	  code
				  	  name
				  	  native
				  	  phone
				  	  currency
				  	  emoji
				  	  emojiU
				  	}
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
					<div class="container">
						<div class="row">
						{
							data.continent.countries.map(({name, code, native, phone, currency}, index) => (
								<div key={code} class="panel panel-default">
									<div class="panel-heading">{name}</div>
									<div class="panel-body">
										<p> Native: {native} </p>
										<p> Phone: {phone} </p>
										<p> Currency: {currency} </p>
									</div>
								</div>
							))
						}
						</div>
					</div>
				)
			}}

		</Query>
	);
}

export default ContinentDetails;