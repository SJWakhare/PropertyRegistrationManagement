import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./PropertyCard.css";
import { useNavigate } from "react-router-dom";

function PropertyCard(props) {
	let navigate = useNavigate();

	const handleClick = () => {
		// Handle the click event here
		// You can navigate to a new page, open a modal, or perform any desired action
		navigate(`/property-individual-page-${props.num}`);
	};

	return (
		<div className="row">
			<div className="col">
				<div onClick={handleClick}>
					<Card sx={{ maxWidth: 300 }} className="m-2 PropertyCard">
						<CardMedia
							sx={{ height: 140 }}
							image={props.image}
							title="green iguana"
						/>
						<CardContent>
							<div className="d-flex justify-content-between">
								<Typography gutterBottom variant="h5" component="div">
									$<span>{props.price}</span>
								</Typography>
								<Typography>
									<FavoriteBorderOutlinedIcon />
								</Typography>
							</div>
							<div>
								<Typography variant="body2" color="text.secondary">
									<span>{props.bhk}</span>BHK &nbsp;<span>{props.sqft}</span>
									Sq.Ft.&nbsp; Year Built - <span>{props.yearBuilt}</span>
								</Typography>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default PropertyCard;
