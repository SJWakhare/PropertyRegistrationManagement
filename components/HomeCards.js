import React from "react";

function HomeCards() {
	return (
		<div className="row justify-content-center">
            <div className="">
			<div class="row">
				<div class="col-12">
					<h1 class="text-center mb-5 mt-5">See how we can help</h1>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-3 col-md-6 col-sm-12 mb-4">
					<div class="card">
						<div class="card-body">
							<img
								class="w-50"
								src="https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg"
								alt=""
							/>
							<h5 class="card-title">Buy a home</h5>
							<p class="card-text">
								With over 1 million+ homes for sale available on the website,
								ElitePro can match you with a house you will want to call home.
							</p>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-6 col-sm-12 mb-4">
					<div class="card">
						<div class="card-body">
							<img
								class="w-50"
								src="https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg"
								alt=""
							/>
							<h5 class="card-title">Rent a home</h5>
							<p class="card-text">
								With filters and custom keyword search, We can help you
								easily find a home or apartment for rent that you'll love.
							</p>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-6 col-sm-12 mb-4">
					<div class="card">
						<div class="card-body">
							<img
								class="w-50"
								src="https://www.trulia.com/images/icons/txl3/illustrations/Neighborhoods.svg"
								alt=""
							/>
							<h5 class="card-title">See neighborhoods</h5>
							<p class="card-text">
								With more neighborhood insights than any other real estate
								website, we've captured the color and diversity of communities.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<hr />
				</div>
			</div>
		</div>
        </div>
	);
}

export default HomeCards;
