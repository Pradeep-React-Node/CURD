import React from 'react'
import "./error.css"
import {Link } from 'react-router-dom';

 const Error = () => {
    return (
        <>
            <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-12 ">
		<div class="col-10 col-offset-1  text-center">
		<div class="four_zero_four_bg">
		
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<Link to="/"  className="link_404">
		Go to Home</Link>
	
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
        </>
    )
}

export default Error;